import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

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
                <View style={styles.profileStats}>
                    <Stat
                        name="Photos"
                        number={456}
                    />
                    <Stat
                        name="Followers"
                        number={602}
                    />
                    <Stat
                        name="Follows"
                        number={290}
                    />
                </View>
            </View>
            <ProfilePosts />
        </View>
    )
}

const Stat = ({ name, number }) => {
    return (
        <View style={styles.stat}>
            <NewText content={name} light h4 />
            <NewText content={number} dark bold h3 />
        </View>
    )
}

const ProfilePosts = () => {
    return (
        <View style={styles.profilePosts}>
            <View style={styles.profilePostSection1}>
                <TouchableOpacity style={styles.profilePost1}></TouchableOpacity>
            </View>
            <View style={styles.profilePostSection2}>
                <TouchableOpacity style={styles.profilePost2}></TouchableOpacity>
                <TouchableOpacity style={styles.profilePost3}></TouchableOpacity>
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
    profileStats: {
        flexDirection: 'row',
        marginTop: 10,
    },
    stat: {
        alignItems: 'center',
        margin: 20,
    },
    profilePosts: {
        margin: 15,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profilePostSection1: {
        flex: 1,
        margin: 5,
    },
    profilePostSection2: {
        flex: 1,
        margin: 5,
        justifyContent: 'space-between',
    },
    profilePost1: {
        backgroundColor: '#c64b50',
        height: 310,
        borderRadius: 20,
    },
    profilePost2: {
        backgroundColor: '#c64b50',
        height: 150,
        borderRadius: 20,
        marginBottom: 5,
    },
    profilePost3: {
        backgroundColor: '#c64b50',
        height: 150,
        borderRadius: 20,
        marginTop: 5,
    },
})
