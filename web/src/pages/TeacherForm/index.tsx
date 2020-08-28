import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'

function TeacherForm() {
    const initialValues = {
        name: '',
        avatar: '',
        whatsapp: '',
        bio: '',
        subject: '',
        cost: ''
    }

    const scheduleInfo = {
        week_day: 0,
        from: '',
        to: ''
    }

    const history = useHistory()

    const { values, handleChange } = useForm(initialValues)
    const [scheduleItems, setScheduleItems] = useState([scheduleInfo])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            scheduleInfo
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {

        const newArray = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return {
                    ...scheduleItem,
                    [field]: value
                }
            }

            return scheduleItem
        })

        setScheduleItems(newArray)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        let validate = true
        Object.keys(values).map(key => {
            if(!values[key]){
                validate = false
            }
        })

        if(!validate) {
            return alert('Insira todos os campos')
        }

        api.post('/classes', {
            ...values,
            schedule: scheduleItems
        })
        .then(() => history.push('/'))
        .catch(err => {
            console.error(err)
            alert('Ocorreu um erro ao criar o usuário. Por favor, tente novamente')
        })
    }

    function phoneMask(value: string) {

        if(!value) return
        value=value.replace(/D/g,"");             //remove tudo o que não é dígito
        value=value.replace(/^(d{2})(d)/g,"($1) $2"); //Coloca parênteses em valueolta dos dois primeiros dígitos
        value=value.replace(/(d)(d{4})$/,"$1-$2");

        return value
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title='Que incrível que você quer dar aulas.'
                description='O primeiro passo é preencher esse formulário de inscrição'
            />

            <main>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name='name' value={values.name} onChange={handleChange} label='Nome completo' />
                        <Input name='avatar' value={values.avatar} onChange={handleChange} label='Avatar' />
                        <Input name='whatsapp' value={phoneMask(values.whatsapp)} pattern='/abc/' onChange={handleChange} label='Whatsapp' />
                        <TextArea name='bio' value={values.bio} onChange={handleChange} label='Biografia' />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name='subject'
                            label='Matéria'
                            value={values.subject}
                            onChange={handleChange}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação física', label: 'Educação física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' }
                            ]}
                        />
                        <Input name='cost' value={values.cost} onChange={handleChange} label='Custo da sua hora por aula' />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button onClick={addNewScheduleItem} type='button'>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={index} className="schedule-item">
                                    <Select
                                        name='week_day'
                                        label='Dia da semana'
                                        value={scheduleItem.week_day}
                                        onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sabádo' }
                                        ]}
                                    />

                                    <Input
                                        name='from'
                                        value={scheduleItem.from}
                                        onChange={event => setScheduleItemValue(index, 'from', event.target.value)}
                                        label='Das' type='time'
                                    />
                                    <Input
                                        name='to'
                                        value={scheduleItem.to}
                                        onChange={event => setScheduleItemValue(index, 'to', event.target.value)}
                                        label='Até'
                                        type='time'
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type='submit'>
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm