import { createStore } from 'redux';
import { rootResolver } from './reducer.root';

export const store = createStore(rootResolver);
