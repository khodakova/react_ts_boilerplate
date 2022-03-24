import cn from 'classnames';
import React, {Suspense, lazy} from 'react';

import packageJson from '../../../package.json';

const LazyStrawberryIcon = lazy(() => import('./strawberry'));
export const App = (): React.ReactElement => (
    <div>
        <div className='styles-header'>It works</div>
        <Suspense fallback={ 'loading...' }>
            <LazyStrawberryIcon className='styles-image'/>
        </Suspense>
        <div>
            <a
                className='styles-link'
                href="https://github.com/glook/webpack-typescript-react"
                target="_blank"
            >
                @glook/webpack-typescript-react ({ packageJson.version })
            </a>
        </div>
    </div>
);
