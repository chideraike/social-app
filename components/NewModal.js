import React from 'react'
import { StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal'

export default function NewModal({ visible, toggleModal, children }) {
    return (
        <Modal
            isVisible={visible}
            swipeDirection="down"
            hideModalContentWhileAnimating={true}
            onSwipeComplete={() => toggleModal()}
            onBackdropPress={() => toggleModal()}
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalBar} />
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#ecf2fb',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    modalBar: {
        height: 5,
        width: 60,
        borderRadius: 5,
        backgroundColor: '#303035',
        alignSelf: 'center',
    },
})
