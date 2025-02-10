import { requireNativeView } from 'expo';
import * as React from 'react';

import { YandexMapkitViewProps } from './YandexMapkit.types';

const NativeView: React.ComponentType<YandexMapkitViewProps> =
  requireNativeView('YandexMapkit');

export default function YandexMapkitView(props: YandexMapkitViewProps) {
  return <NativeView {...props} />;
}
