
// instalar o axios para conexão com o servidor ele vai consumir API externas

import React from 'react';
import ReactDOM from 'react-dom';
// primeiro pensar no mobile pra depois expandir a tela
import App from './App';
// import * as serviceWorker from './serviceWorker'; remova essa linh para parar de dar erro
// o import da dom é a árvore dos elementos para o react trabalhar 
// essa pasta é a pasta principal do react 

ReactDOM.render(
  <React.StrictMode>
    <App />  
    {/* esse app ele é importado ali em cima */}
  </React.StrictMode>,
  document.getElementById('root') // esse linha diz vá no documento html e procure o id root dentro desse elemento jogue 
  // jogue isso aqui
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // isso pega toda a estrutura e joga no elemento a gente manipula ela através do javascript
);

