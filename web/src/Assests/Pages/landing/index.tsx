import React, { useState,useEffect } from 'react';
// importando imagem  
import logoImg from '../../../Assests/Downloads Dia 01/images/logo.svg'
import landingImg from '../../Downloads Dia 01/images/landing.svg'
import studyIcon from '../../Downloads Dia 01/images/icons/study.svg'
// agora logoImg isso passa a ser uma variável javaScript
import purpleHeartIcon from '../../Downloads Dia 01/images/icons/purple-heart.svg'
// importando css não precisa passar o nome
import './style.css'  
// usar link do react para não carregar a página toda
import {Link} from 'react-router-dom'
import api from '../../../service/api';



function Landing() {

    // estado
    // useEffect() uma função que tem que ser importada e ela tem 2 param
    // 1 recebe uma função e 2 array de depêndencias(ele quer dizer quando eu quero disparar essa primeira função) 
    // toda vez que a variável mudar dentro do array a função vai ser chamada 
    // pra ser chamada uma vez somente quando entrar numa determinada tela deixa o array vazio

    const[totalConnections, setTotalConnections] = useState(0) 
    
    useEffect(()=>{
        api.get('/connection').then(response => {
            // console.log(response)
            const { total }= response.data
            setTotalConnections(total)
        })
    }, [])
   
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    {/* no react não é o caminho precisa importar a img */}
                    {/* toda vez para usar a variável js no html coloca entre as chaves */}
                    <img src={logoImg} alt="logo" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <div>
                    <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                    <div className="buttons-container">
                        <Link to="/study" className="study">
                             <img src={studyIcon} alt="Estudar" />
                            Estudar
                        </Link>
                            

                        
                        <Link to="/give-classes" className="give-classes">
                            <img src={studyIcon} alt="Dar aulas" />
                            Dar aulas
                        </Link>
                            
                    </div>
                </div>

                <span className="total-connections">
                        total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>

            </div>
        </div>
    )


}


export default Landing;

