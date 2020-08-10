import React,{SelectHTMLAttributes} from 'react'
import './style.css'


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
name:string
label:string
options:Array<{
    value:string,
    label:string
}>
}


const Select:React.FC<SelectProps> = ({label,name,options, ...rest})=> {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option value="" disabled  hidden>Selecione uma opção</option>
                {/* quando clicar "selecione uma opção não vai aparecer mais" */}
                {options.map(options =>{
                    return <option key={options.value} value={options.value}>{options.label}</option>
                    // quando a gente cria uma estrutura de repetição no react onde a gente percorre o array retornando
                    // para cada posição do array algum html  o primeiro elemento do array logo dentro do map ele
                    //  obrigatotiamente precisa ter uma proprieade chamada key ele já é padrão da tag option
                    // obs: isso é somente no primeiro elemento dentro do map 
                    // dentro da key coloca-se uma informação única dentre todas as opções
                })}
            </select>
        </div>
    )
}

export default Select
