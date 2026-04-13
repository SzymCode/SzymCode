export const structureConfig = {
  alias: {
    nucleify: '~/atomic',
  },
  components: [
    { path: '~/components' },
    { path: '~/sections', pathPrefix: false },
    // { path: '~/atomic/atom', prefix: 'ad', extensions: ['vue'] },
    // { path: '~/atomic/molecule', prefix: 'ad', extensions: ['vue'] },
    // { path: '~/atomic/organism', prefix: 'ad', extensions: ['vue'] },
  ],
  imports: {
    dirs: ['~/composables/**', '~/atomic/**'],
  },
  publicDir: '../../public',
}
