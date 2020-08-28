import React, { FormEvent, useState } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'
import useForm from '../../hooks/useForm'
import api from '../../services/api'

function TeacherList() {
    const [teachers, setTeachers] = useState([])

    const listValues = {
        subject: '',
        week_day: '',
        time: '',
    }
    const { values, handleChange } = useForm(listValues)

    function searchTeachers(e: FormEvent) {
        e.preventDefault()

        api.get('/classes', {
            params: { ...values }
        })
        .then(response => setTeachers(response.data))
        .catch(err => {
            console.error(err)
            alert('Ocorreu um erro ao buscar os professores. Por favor, tente novamente')
        })
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title='Estes são os proffys disponíveis'>
                <form onSubmit={searchTeachers} id="search-teachers">
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
                    <Select
                        name='week_day'
                        label='Dia da semana'
                        value={values.week_day}
                        onChange={handleChange}
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
                        type='time' 
                        name='time' 
                        label='Hora'
                        value={values.time}
                        onChange={handleChange}
                    />

                    <button type='submit'>
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher:Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    )
}

export default TeacherList