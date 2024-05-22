import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const LatexEditor = () => {
  const webviewRef = useRef<WebView>(null);
  // const [latexValue, setLatexValue] = useState<string>('');

  // const handleMessage = (event: WebViewMessageEvent) => {
  // const message = event.nativeEvent.data;
  // setLatexValue(message);
  // };

  // const setInitialLatexValue = (value: string) => {
  //   webviewRef.current?.postMessage(JSON.stringify({ type: 'setLatex', value }));
  // };

  // const clearMathField = () => {
  //   webviewRef.current?.postMessage(JSON.stringify({ type: 'clearLatex' }));
  // };

  useEffect(() => {
    if (webviewRef && webviewRef.current) {
      webviewRef.current.requestFocus();
    }
  }, []);

  return (
    <View className="w-screen h-[90%]">
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://raect-math-keyboard.vercel.app' }}
        // onMessage={handleMessage}
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
      {/* <View className="p-5">
        <Button title="Set Initial Latex" onPress={() => setInitialLatexValue('')} />
        <Button title="Clear" onPress={clearMathField} />
        <Text>Latex produced: {latexValue}</Text>
      </View> */}
    </View>
  );
};

export default LatexEditor;
