import React from 'react';
import ReactDOM from 'react-dom/client';
import Logovert from './componentes/logo-vertical/logovertical';
import Logohori from './componentes/logo-horizontal/logohorizontal';
import Cardlogin from './componentes/cardlogin/card-login';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section>
    <div className='Index'>
      <React.StrictMode>
        <Cardlogin />
      </React.StrictMode>
    </div>
  </section>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
