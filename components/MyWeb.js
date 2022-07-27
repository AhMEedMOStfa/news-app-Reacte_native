import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function MyWeb() {
    return (
      <WebView
        source={{
          uri: 'https://google.com'
        }}
        style={{ marginTop: 20 }}
      />
    );
}
