/// <reference types="vite/client" />

declare module 'vue-camera-lib' {
  import { Plugin } from 'vue'
  const plugin: Plugin
  export default plugin
}
declare module 'vue-camera-lib' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const WebCamUI: any
}
