import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-eva-icons';

import NewText from '../components/NewText'
import UserImage from '../components/UserImage'
import NewModal from './NewModal'

export default function UserModal({ visible, toggle }) {
    return (
        <NewModal
            visible={visible}
            toggleModal={toggle}
        >
            <View style={styles.modalHeader}>
                <UserImage disabled />
                <View style={styles.actionContainer}>
                    <ActionButton secondary style={{ marginRight: 10 }}>
                        <Icon
                            name='message-square-outline'
                            fill='#c64b50'
                            height={30}
                            width={30}
                        />
                    </ActionButton>
                    <ActionButton primary style={{ marginLeft: 10 }}>
                        <Icon
                            name='person-add-outline'
                            fill='#fff'
                            height={30}
                            width={30}
                        />
                    </ActionButton>
                </View>
            </View>
            <View style={styles.modalBody}>
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
            <View style={styles.modalFooter}></View>
        </NewModal>
    )
}

const ActionButton = ({ children, primary, secondary, style }) => (
    <TouchableOpacity style={[
        style,
        styles.actionButton,
        primary && {
            backgroundColor: '#c64b50',
            shadowColor: "#c64b50",
        },
        secondary && {
            backgroundColor: '#fff',
            shadowColor: "#b0c6e1",
        },
    ]}>
        {children}
    </TouchableOpacity>
)

const Stat = ({ name, number }) => {
    return (
        <View style={styles.stat}>
            <NewText content={name} light h4 />
            <NewText content={number} dark bold h3 />
        </View>
    )
}

const styles = StyleSheet.create({
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 35,
    },
    actionContainer: {
        flexDirection: 'row',
    },
    actionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    modalBody: {},
    profileName: {
        marginTop: 25,
        marginBottom: 5,
    },
    profileBio: {
        marginTop: 5,
        marginBottom: 5,
    },
    profileStats: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    stat: {},
    modalFooter: {},
})
