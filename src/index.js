import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ProductList from './component/ProductList.js';


ReactDOM.render(
  <>
    <div>
      Popular products
    </div>
    <hr/>
    <ProductList/>
  </>,
  document.getElementById('root')
);
