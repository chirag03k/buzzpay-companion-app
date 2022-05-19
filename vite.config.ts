import {defineConfig} from 'vite';
import devConfig from './configuration/vite.development';
import prodConfig from './configuration/vite.production';

// https://vitejs.dev/config/
// When running `vite` it will use the development config, but `vite build` will use the production config
export default defineConfig(({mode}) => (mode === 'development' ? devConfig : prodConfig));
