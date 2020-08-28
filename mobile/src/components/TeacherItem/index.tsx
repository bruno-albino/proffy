import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlieIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars3.githubusercontent.com/u/52510650?s=460&u=05681a2ebc440a66847d3d3a137c858f7322443a&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Bruno Albino</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                ioojgiodjiosdjfodfijgdoifjdoisd
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlieIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    )
}

export default TeacherItem