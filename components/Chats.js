import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import * as Haptics from 'expo-haptics';

import NewText from '../components/NewText';

export default function Chats() {
    return (
        <View>
            <Chat
                title="Beverly Jones"
                message="You know you're in love when"
            />
            <Chat
                title="Crystal Flores"
                message="Hey you! What's up!"
            />
            <Chat
                title="Brittany Hart"
                message="When i'm good, I'm very good"
            />
            <Chat
                title="Deborah Flores"
                message="Hey you! What's up!"
            />
            <Chat
                title="Harley Quinn"
                message="I am a dancer. I know you're"
            />
        </View>
    )
}

const Chat = ({ title, message }) => {
    const onPressChat = () => {
        console.log('Pressed chat')
    }

    const onLongPressChat = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        console.log('Long pressed chat')
    }

    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#fff' : '#ecf2fb'
                }
            ]}
            onPress={onPressChat}
            onLongPress={onLongPressChat}
            delayLongPress="300"
        >
            <View style={styles.chat}>
                <View style={styles.chatImage}></View>
                <View style={styles.chatDescription}>
                    <NewText content={title} dark h3 />
                    <NewText content={message} light h4 />
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    chat: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    chatImage: {
        height: 70,
        width: 70,
        backgroundColor: '#c64b50',
        borderRadius: 40,
    },
    chatDescription: {
        marginLeft: 20
    },
})
