import * as React from 'react';

import { YandexMapkitViewProps } from './YandexMapkit.types';

export default function YandexMapkitView(props: YandexMapkitViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
