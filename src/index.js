import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css'; //import cssnya
import App from './App';
import * as serviceWorker from './serviceWorker';
import { appendFile } from 'fs';

//const items = ['Merah','Kuning','Hijau','Biru'];

const items = [
  {
    name : "Summer",
    color : 'Merah',
    img :'Panas.jpg'
  },
  {
    name : "Auntum",
    color : 'Kuning',
    img :'Gugur.jpg'
  },
  {
    name : "Spring",
    color : 'Hijau',
    img :'Semi.jpg'
  }, {
    name : "Winter",
    color : 'Biru',
    img :'Salju.jpg'
  },
  {
    name : "Calculator",
    color : 'Oranye',
  },
];

ReactDOM.render(<App items={items}/>,
  document.getElementById('root')
);
serviceWorker.register();
