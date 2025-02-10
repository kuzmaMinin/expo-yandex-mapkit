import { NativeModule, requireNativeModule } from 'expo';

import { YandexMapkitModuleEvents } from './YandexMapkit.types';

declare class YandexMapkitModule extends NativeModule<YandexMapkitModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<YandexMapkitModule>('YandexMapkit');
