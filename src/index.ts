// Reexport the native module. On web, it will be resolved to YandexMapkitModule.web.ts
// and on native platforms to YandexMapkitModule.ts
export { default } from './YandexMapkitModule';
export { default as YandexMapkitView } from './YandexMapkitView';
export * from  './YandexMapkit.types';
