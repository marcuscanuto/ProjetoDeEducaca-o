import React, { useState, FormEvent } from 'react'
import PageHeader from '../../../Componentes/PageHeader'
import './style.css'
import Input from '../../../Componentes/input'
import warningIcon from '../../Downloads Dia 01/images/icons/warning.svg'
import Textarea from '../../../Componentes/textArea'
import Select from '../../../Componentes/select'
import api from '../../../service/api'
import { useHistory } from 'react-router-dom'


//  ctrl + . sugestões de importação 

// import {useHistory} from 'react-router-dom' server pra você mandar ir pra outra página depois de uma execução
// e o usuário não precisar clicar num link necessariamente ex: depois de um cadastro realizdo você direciona a página
// para a página de listagem





// propriedades é uma forma de conseguir passar informações para o header
function TeacherForm() {
    // usando o conceito estado do react para colocar novo horário tem que importar lá em cima junto com react useStates
    // dentro do parâmetro você passa o valor inicial dessa variável
    // quando a gente usa o useState a gente não pode modificar diretamente as variáveis do estado então cria a função
    // setScheduleItems que eu escolhi o nome poder ser qualquer um para modificar as variáveis do estado (useState )
    // precisamos desestruturar pq o useStates retorna 2 param em forma de array
    // na primeira posição ele retorna todas essas informações aqui
    // no 2 param ele retorna uma função e essa função vai substituir o valor do scheduleItems

    // usando estados a gente vai trabalhar com formulário no react de forma mais raiz mas existem bibliotecas para facilitar

    // estamos colocando cada input em um estado
    
    const history = useHistory()    
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')


    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')


    // essa função está no onsubmit do formulário então ela vai receber um evento
    // e ele não sabe exatamente qual o formato desse evento pq n estou criando a função diretamente dentro do onSubmit
    //  definindo o formato de forma manual
    function handleCreateClass(e: FormEvent) {
        e.preventDefault() // Prevenir o comportamento padrão do formulário

        // passando a rota e todas as informações para criar novo cadastro
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost:Number(cost),
            schedule:scheduleItems
        }).then( () => {
            alert('Cadastro realizado com sucesso.')
            history.push('/') //coloca o endereço que eu quero enviar o usuário
        }).catch( ()=>{
            alert('cadastro não realizado. Tente novamente.')
        })

        // console.log({
        //     name,
        //     avatar,
        //     whatsapp,
        //     bio,
        //     subject,
        //     cost,
        //     scheduleItems
        // })
    }




    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {

        setScheduleItems([
            // copia o array que eu já tenho e adionca uma posição nova no final com ...
            ...scheduleItems, //copiando todos os items de dentro de um array 
            // adicionando novo item no novo array
            { week_day: 0, from: '', to: '' }
        ])
    }

    // exemplo de como vai ser chamada a função setScheduleItemValue(0,'week_day',2)
    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                // [field]:value tá sobreescrevendo o valor de week_day 
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem
        })

        // console.log(updateScheduleItems)
        setScheduleItems(updateScheduleItems)
    }







    return (
        <div id="page-teacher-form" className="container">
            {/* title é uma propriedade e eu posso dar o nome que eu quise para ela // precisa dixer
            para o componente que ele vai receber uma propriedade faz isso lá no modulo do componente
            */}
            <PageHeader
                title="Que incrível que você quer dá aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    {/* separar um bloco dentro do formulário chamamos de fieldset */}
                    <fieldset>
                        <legend>Seus dados</legend>
                        {/* onChange === toda vez que o input mudar o seu valor vamos fazer alguma coisa com o novo valor */}
                        {/* onChange vem um evento e dentro do evento a gente pega o texto dentro do e com e.target */}
                        <Input name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }} />


                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}

                        />


                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />


                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                        {/* 
                            <div className="input-block">
                                <label htmlFor="whatsapp">WhatsApp</label>
                                <input type="text" id="whatsapp" />
                            </div> */}
                    </fieldset>


                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Filosofia', label: 'Filosofia' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Educação física', label: 'Educação física' },
                            ]}

                        />


                        <Input
                            name="cost"
                            label="Custo da sua hora por aula "
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />


                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                                <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                                </button>
                        </legend>
                        {/*  o map retorna 2 param 1 o valor e 2 o índice */}
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },

                                        ]}

                                    />

                                    <Input
                                     name="from" 
                                     label="Das" 
                                     type="time"
                                     value={scheduleItem.from}
                                     onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                                     />
                                   
                                    <Input 
                                    name="to" 
                                    label="Até" 
                                    type="time" 
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>




                    <footer>
                        <p>
                            <img src={warningIcon} alt="aviso importante" />
                            Importante! <br />
                            Preencha todos os dados.
                        </p>
                        {/* type="submit" === eniva o formulário */}
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>

        </div>
    )
}

export default TeacherForm