import { registerWebModule, NativeModule } from 'expo';

import { YandexMapkitModuleEvents } from './YandexMapkit.types';

class YandexMapkitModule extends NativeModule<YandexMapkitModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(YandexMapkitModule);
