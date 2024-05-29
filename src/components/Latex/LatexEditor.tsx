import { Component, createRef, RefObject } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

type Props = object;

class LatexEditor extends Component<Props> {
  webviewRef: RefObject<WebView>;

  constructor(props: Props) {
    super(props);
    this.webviewRef = createRef<WebView>();
    // this.state = {
    //   latexValue: '',
    // };
  }

  componentDidMount() {
    if (this.webviewRef && this.webviewRef.current) {
      this.webviewRef.current.requestFocus();
    }
  }

  // handleMessage = (event) => {
  //   const message = event.nativeEvent.data;
  //   this.setState({ latexValue: message });
  // };

  // setInitialLatexValue = (value) => {
  //   this.webviewRef.current?.postMessage(JSON.stringify({ type: 'setLatex', value }));
  // };

  // clearMathField = () => {
  //   this.webviewRef.current?.postMessage(JSON.stringify({ type: 'clearLatex' }));
  // };

  render() {
    return (
      <View className="w-screen h-[90%]">
        <WebView
          ref={this.webviewRef}
          source={{ uri: 'https://raect-math-keyboard.vercel.app' }}
          // onMessage={this.handleMessage}
          bounces={false}
          overScrollMode="never"
          scalesPageToFit={true}
          scrollEnabled={false}
          setBuiltInZoomControls={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyboardDisplayRequiresUserAction={false}
          hideKeyboardAccessoryView={true}
          textInteractionEnabled={false}
          useWebView2={true}
          thirdPartyCookiesEnabled={true}
          startInLoadingState={false}
          javaScriptEnabled={true}
          originWhitelist={['*']}
        />
        {/* <View style={{ padding: 20 }}>
          <Button title="Set Initial Latex" onPress={() => this.setInitialLatexValue('')} />
          <Button title="Clear" onPress={this.clearMathField} />
          <Text>Latex produced: {this.state.latexValue}</Text>
        </View> */}
      </View>
    );
  }
}

export default LatexEditor;
