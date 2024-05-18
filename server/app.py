from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from PIL import Image
import base64
from pix2tex.cli import LatexOCR
from pylatexenc.latex2text import LatexNodes2Text
import pytesseract 
import cv2
import numpy as np
import io

# If you're on Windows, you will need to point pytesseract to the path where you installed Tesseract
pytesseract.pytesseract.tesseract_cmd = r'tesseract'

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Initialize the LaTeX OCR model
model = LatexOCR()

def image_processing(image):
    """
    Processes an image for OCR.

    Args:
        image: The PIL Image object to be processed.

    Returns:
        img: The processed image ready for OCR.
    """
    try:
        # Read the image file into a numpy array
        img = np.array(image)

        if img.ndim == 2:  # Grayscale image
            gray = img
        elif img.shape[2] == 4:  # RGBA image
            gray = cv2.cvtColor(img, cv2.COLOR_BGRA2GRAY)
        else:  # RGB image
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
        # Apply Gaussian blur to remove noise
        blur = cv2.GaussianBlur(gray, (5, 5), 0)
        # Apply adaptive thresholding to get a binary image
        bin_img = cv2.adaptiveThreshold(blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 31, 2)
        
        # Perform dilation and erosion to remove noise
        kernel = np.ones((1, 1), np.uint8) 
        img = cv2.dilate(bin_img, kernel, iterations=1) 
        img = cv2.erode(img, kernel, iterations=1) 
        
        # Convert the NumPy array back to a PIL Image object
        img = Image.fromarray(img)
        return img
    except Exception as e:
        raise ValueError(f"Error in image processing: {str(e)}")

@app.route('/')
@cross_origin()
def home():
    """
    Home route for the application.

    Returns:
        str: A string indicating that the server is running.
    """
    return 'Server is running!'

@app.route('/latex', methods=['POST'])
@cross_origin()
def image_to_latex():
    """
    Endpoint to convert an uploaded image to LaTeX.

    This function handles POST requests to the /latex URL. It expects a JSON payload
    containing the image data in Base64 format. The image data should be included in 
    the 'uri' field of the JSON object.

    Returns:
        flask.Response: A JSON response with either the LaTeX code or an error message.
    """

    try:
        # Parse the JSON request body
        data = request.get_json()
        if not data or 'uri' not in data or 'type' not in data or 'name' not in data:
            return jsonify({'error': 'Invalid input data'}), 400

        # Decode the image data from the URI
        image_data = base64.b64decode(data['uri'].split(',')[1])
        image_file = Image.open(io.BytesIO(image_data))

        # Process the image
        img = image_processing(image_file)

        # Convert the image to LaTeX format using the model
        latex_response = model(img)
        
        # Convert LaTeX to plain text
        text_response = LatexNodes2Text().latex_to_text(latex_response)
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
    return jsonify({'latex': latex_response, 'text': text_response}), 200

@app.route('/text', methods=['POST'])
@cross_origin()
def image_to_text():
    """
    Endpoint to convert an uploaded image to text.

    This function handles POST requests to the /latex URL. It expects a JSON payload
    containing the image data in Base64 format. The image data should be included in 
    the 'uri' field of the JSON object.

    Returns:
        flask.Response: A JSON response with either the extracted text or an error message.
    """

    try:
        # Parse the JSON request body
        data = request.get_json()
        if not data or 'uri' not in data or 'type' not in data or 'name' not in data:
            return jsonify({'error': 'Invalid input data'}), 400

        # Decode the image data from the URI
        image_data = base64.b64decode(data['uri'].split(',')[1])
        image_file = Image.open(io.BytesIO(image_data))

        # Process the image
        img = image_processing(image_file)
        
        # Convert the processed image to text format using Tesseract OCR
        text_response = pytesseract.image_to_string(img)
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
    return jsonify({'text': text_response}), 200

if __name__ == '__main__':
    app.run(debug=True, host='192.168.18.3', port=5000)
