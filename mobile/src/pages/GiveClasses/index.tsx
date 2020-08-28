import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import giveClassesBackgroundImg from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native'

function GiveClasses() {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode='contain' 
                style={styles.content} 
                source={giveClassesBackgroundImg}
            >
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text> 
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text> 
            </ImageBackground>

            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Tudo bem
                </Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses