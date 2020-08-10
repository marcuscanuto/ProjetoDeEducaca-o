import React from 'react'
import { Link } from 'react-router-dom'
import backIcon from '../../Assests/Downloads Dia 01/images/icons/back.svg'
// importando logo
import logoIconn from '../../Assests/Downloads Dia 01/images/logo.svg'
// importando css
import './style.css'

// Dica faz uma função normal depois transforma ela para arrow function
// no react a forma mais fácil de declarar as tipagens das propriedade é transformando as funções em constantes usando 
// arrow function

// dizendo que o componemte pode receber uma propriedade com typecript
// 1- interface para definir os formatos das tipagens de um obj 
// as propriedades que você recebe no componente são obj

// PageHeaderProps são as propriedades do componente
// : React.FunctionComponent para dizer que a função é um componente feito por uma função e ele recebe um parâmetro
// : React.FC você pode usar assim recebe // um parâmentro com sinal de menor e maior
// dentro você passa a interface com as propriedades
// dentro dos parâmetros da função componete você recebe todas as propriedades com um só parâmetro
// o nome é props ali que eu coloquei ali vou receber todas as propriedades

interface PageHeaderProps {
    title: string // obrigatória. // para não ser obrigatória precisaria de uma interrogação na frente ex: title?: string
    description?:string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoIconn} alt="logo" />

            </div>

            <div className="header-content">
                {/* as chaves pq é uma variável js colocada no html */}
                <strong>{props.title}</strong>
                {/* fazendo um if ternário no react  */}
                {props.description ? <p> {props.description} </p>: null}

                  {/* props.children É o conteudo que você passa pra dentro do componente lá no teacherList   */}
                {props.children}
            </div>
        </header>
    )
}



export default PageHeader