import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './containers/Sidebar';
import SignUp from './containers/SignUp';
import Auth from './containers/Auth';

ReactDOM.render(
  <div>
    {/* <Sidebar
      title="Class Component"
      data={{ name: 'Alisher', age: 78 }}
    /> */}
    {/* <SignUp /> */}
    <Auth />
  </div>
  , document.getElementById('root'));