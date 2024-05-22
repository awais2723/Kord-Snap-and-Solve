import React, { useState } from 'react';
import { View } from 'react-native';
import WebView, { WebViewProps } from 'react-native-webview';

type MathJaxProps = WebViewProps & {
  html: string;
  mathJaxOptions?: Record<string, any>;
  contentLoader?: () => React.JSX.Element;
  css?: {
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    lineHeight?: string;
    fontWeight?: string;
    padding?: string;
  };
};

const MathJax: React.FC<MathJaxProps> = ({
  html,
  mathJaxOptions,
  contentLoader,
  css,
  ...filteredProps
}: MathJaxProps) => {
  const [height, setHeight] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const RenderLoading: React.JSX.Element | null = contentLoader ? contentLoader() : null;

  const handleMessage = (message: { nativeEvent: { data: string } }) => {
    const newHeight = Number(message.nativeEvent.data);
    setHeight(newHeight);
    setLoading(false);
  };

  const defaultOptions = {
    messageStyle: 'none',
    showMathMenu: false,
    extensions: ['tex2jax.js'],
    jax: ['input/TeX', 'output/CommonHTML'],
    tex2jax: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
      displayMath: [
        ['$$', '$$'],
        ['\\[', '\\]'],
      ],
      processEscapes: true,
    },
    TeX: {
      extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js'],
    },
    CommonHTML: {
      linebreaks: { automatic: true },
    },
    styles: {
      '.MathJax_Display': {
        background: css?.backgroundColor || '#ffffff',
      },
      body: {
        background: css?.backgroundColor || '#ffffff',
      },
    },
  };

  const wrapMathjax = (content: string): string => {
    const options = JSON.stringify(Object.assign({}, defaultOptions, mathJaxOptions));
    return `
      <html style="border: none; background:${css?.backgroundColor || '#ffffff'};">
        <head>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
          <style>
            *{margin:0;padding:0;box-sizing:border-box}
            #MathJax_Message {${css?.fontSize || '14px'}}
            a {color: white !important;text-decoration: underline !important}
          </style>
        </head>
        <body style="display:contents;border:none;padding-bottom:100px;background:${
          css?.backgroundColor || '#ffffff'
        };">
          <div id="formula" style="visibility:hidden;color:${
            css?.color || '#000000'
          };background:${css?.backgroundColor || '#ffffff'};font-size:${
            css?.fontSize || '14px'
          };padding:${css?.padding || 0};line-height:${css?.lineHeight || '20px'};font-weight:${
            css?.fontWeight || 'bold'
          };max-height:fit-content;max-width:fit-content;overflow:auto;border:none;display:flex;flex-direction:column;justify-content:start;align-items:start;row-gap:4px;">
              ${content}
          </div>
          <script type="text/x-mathjax-config">
          MathJax.Hub.Config(${options});
          MathJax.Hub.Queue(function(){let height=document.getElementById("formula").scrollHeight;document.getElementById("formula").style.visibility="";window.ReactNativeWebView.postMessage(String(height))});
          </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"></script>
        </body>
      </html>
    `;
  };

  html = wrapMathjax(html);

  return (
    <>
      {loading && RenderLoading && RenderLoading}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height,
          borderWidth: 0,
          borderColor: 'transparent',
          backgroundColor: css?.backgroundColor || '#ffffff',
        }}>
        <WebView
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
          onMessage={handleMessage}
          source={{ html }}
          {...filteredProps}
        />
      </View>
    </>
  );
};

export default MathJax;
