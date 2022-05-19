import {mergeConfig, UserConfigExport} from 'vite';
import commonConfig from './vite.common';

// Add any production-specific configuration here (we may need to exclude React from being bundled)
const prodConfig: UserConfigExport = {};

export default mergeConfig(commonConfig, prodConfig);
