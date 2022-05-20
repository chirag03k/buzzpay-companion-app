import {mergeConfig, UserConfigExport} from 'vite';
import mockServer from 'vite-plugin-mock-server';
import commonConfig from './vite.common';

const devConfig: UserConfigExport = {
  plugins: [mockServer()],
  server: {
    port: 3000,
    open: true,
  },
};

export default mergeConfig(commonConfig, devConfig);
