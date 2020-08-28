import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import { Feather } from '@expo/vector-icons'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

    const [subjec, setSubject] = useState('')
    const [time, setTime] = useState('')
    const [week_day, setWeekDay] = useState('')

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    function handleFiltersSubmit() {
        console.log(
            subjec,
            time,
            week_day
        )
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title='Proffys disponíveis' 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name='filter' size={20} color='#FFF'/>
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && 
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput onChangeText={text => setSubject(text)} placeholderTextColor='#c1bccc' style={styles.input} placeholder='Qual a matéria ?' />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput onChangeText={text => setWeekDay(text)} placeholderTextColor='#c1bccc' style={styles.input} placeholder='QUal o dia ?'/>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput onChangeText={text => setTime(text)} placeholderTextColor='#c1bccc' style={styles.input} placeholder='QUal horário ?'/>
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>

                    </View>
                }
            </PageHeader>

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList