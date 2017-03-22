import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Components
import ViewerWrapper from './containers/ViewerWrapper';

//Added for Material-UI (http://www.material-ui.com/#/get-started/installation)
injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <ViewerWrapper/>
  </MuiThemeProvider>,
  document.getElementById('app')
);
