import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchBar from '../components/SearchBar';
import Chats from '../components/Chats';

export default function Conversation({ navigation, toggle }) {
    return (
        <View>
            <SearchBar />
            <Chats toggle={toggle} />
        </View>
    )
}

const styles = StyleSheet.create({})