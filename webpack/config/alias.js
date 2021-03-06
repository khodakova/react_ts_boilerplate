import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
    '@': join(rootDir, '/src'),
    '@images': join(rootDir, '/src/assets/images'),
    '@styles': join(rootDir, '/src/styles'),
    '@components': join(rootDir, '/src/components'),
};
