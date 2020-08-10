import React from 'react';
import './Assests/style/Global.css' // fazendo o importe css por dentro do javaScript
import Routes from './Routes';

// REGRAS NA CRIAÇÃO DOS COMPONENTES
// 1- Sempre começar com letras maiúsculas (letras minúscula o react vai achar que é tag do html)
// 2- você precisa importar o React aqui mesmo se ele não for usado 
// 3- sintaxe de html dentro do javaScript se conhece como JSX === javaScript + xml
// Esse app a gente conhece como componente dentro do react 
// componentes são funções que retornam um html
// Cria-se as componentes para evitar a repetição de código  podem ser usados várias vezes
function App() {
  return (
    // aqui você pode colocar todo o html
    <Routes/>    
);


}

export default App;
