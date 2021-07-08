import React from 'react'
import { StyleSheet, View } from 'react-native'

import NewText from '../components/NewText'
import UserImage from '../components/UserImage'

export default function Profile() {
    return (
        <View>
            <View style={styles.profileInfo}>
                <UserImage disabled style={{ margin: 10 }} />
                <View style={styles.profileName}>
                    <NewText content="Anna Alvarado" dark bold h3 />
                </View>
                <View style={styles.profileBio}>
                    <NewText content={`Guildhall School of Music & Drama`} light h4 />
                </View>
                <NewText content="London, UK" light h4 />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileInfo: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#b0c6e1",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    profileName: {
        marginTop: 10,
        marginBottom: 5,
    },
    profileBio: {
        marginTop: 5,
        marginBottom: 5,
    },
})
