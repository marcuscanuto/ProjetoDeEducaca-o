import React,{InputHTMLAttributes} from 'react'
import './style.css'

// interface inputProps extends InputHTMLAttributes<HTMLInputElement> PRO INPUT RECEBER AS PROPRIEDADES PADRÃO DELE
interface inputProps extends InputHTMLAttributes<HTMLInputElement>{
name:string
label:string
}

// const  Input:React.FC<inputProps> = (drops) assim passa tudo de uma vez todas as propriedades
// da outra forma aqui eu tô desestruturando pegando só a label e usando ali

// ...rest pega todas as propriedades do input que a gente importou e guarda no obj
const Input:React.FC<inputProps> = ({label,name, ...rest})=> {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    )
}

export default Input
