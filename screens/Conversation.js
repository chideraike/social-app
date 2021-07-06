import React from 'react'
import { StyleSheet, View, Animated } from 'react-native'
import { Icon } from 'react-native-eva-icons';

import SearchBar from '../components/SearchBar';

export default function Conversation({ navigation }) {
    return (
        <View>
            <SearchBar />
        </View>
    )
}

const styles = StyleSheet.create({})