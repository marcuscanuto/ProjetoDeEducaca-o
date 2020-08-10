import React from 'react'
import whatsappIcon from '../../Assests/Downloads Dia 01/images/icons/whatsapp.svg'
import './style.css'
import api from '../../service/api'


export interface Teacher{
    id:number
    avatar:string
    bio:string
    cost:number
    name:string
    subject:string
    whatsapp:string
}

 interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher})=>{
  function  createNewConnection(){
      api.post('/connection',{
          user_id:teacher.id,
      })
  }

    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name}/>
                        <div>
                            <strong>{teacher.name}</strong>
                             <span>{teacher.subject}</span>
                        </div>
                    </header>

                    <p>{teacher.bio}</p>

                    <footer>
                        <p>
                            Preço/Hora
                             <strong>R$ {teacher.cost}</strong>
                        </p>
                        {/* usando variável dentro do texo */}
                        {/* target="_blank" para abir em outra tela o contato com whatsapp */}
                        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} type="button">
                            <img src={whatsappIcon} alt="Entra em contato por whatsapp"/>
                            Entrar em contato
                        </a>
                    </footer>

                </article>
    )
}

export default TeacherItem