import { defineConfig } from '@umijs/max';

import routes from './routes';

export default defineConfig({
  base: '',
  publicPath: '',

  define: {
    'process.env': {
      API_URL: process.env.API_URL ?? '/api',
    },
  },

  antd: {},

  // routes
  routes,

  title: 'FilFi',
  access: false,
  deadCode: {},
  layout: false,
  locale: {
    title: true,
    default: 'en-US',
    useLocalStorage: true,
  },
  request: {},
  model: false,
  initialState: false,
  moment2dayjs: {},
  cssLoaderModules: {
    exportLocalsConvention: 'camelCase',
  },
  svgo: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
  npmClient: 'pnpm',
  links: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
    },
  ],
});
