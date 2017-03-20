import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

// Components
import ViewerWrapper from './containers/ViewerWrapper';

render(
  <ViewerWrapper/>,
  document.getElementById('app')
);
