import ReactDOM from 'react-dom';
import Main from './containers/Main/Main';

import { mockData, buttonTypes } from './mockApi/mockData';

import './index.scss';

ReactDOM.render(
  <Main 
    data={mockData()} 
    buttonTypes={buttonTypes()}
  />,
  document.getElementById('root')
);
