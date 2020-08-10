import React from 'react'
// importando de dentro do react router dom
import {BrowserRouter,Route} from 'react-router-dom' // quando dar um erro aqui instale o yarn add @types/react-router-dom -D
import Landing from './Assests/Pages/landing'
import TeacherList from './Assests/Pages/TeacherList'
import TeacherForm from './Assests/Pages/TeacherForm'

function Routes(){
    return (
        // precisa colocar ele por volta de todas as rotas da minha aplicação
        // cada página da aplicação vai ser um route
        // cuidado com a letra maiúscula 
        < BrowserRouter> 
        {/* propriedade obrigatórias
            obs:Usar route para inicializar as telas 
            1 - path="" === qual endereço que o usuário precisa está acessando pra conseguir o acesso
            2- component={} === o que será mostrado quando o usuário colocar padrão no caso a barra
            3- exact === vai fazer uma verificação de igualdade pois o react se tiver a barra ele mostra então iria mostrar a 
            página inicial sempre com ele comparando não acontece isso(Se a rota for exatamente igual a isso)
        */}
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
       </BrowserRouter>
    )
}

export default Routes