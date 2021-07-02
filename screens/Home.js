import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import NewText from '../components/NewText';
import SearchBar from '../components/SearchBar';
import Stories from '../components/Stories';
import UserImage from '../components/UserImage';
import Posts from '../components/Posts';

function Home() {
    return (
        <DismissKeyboard>
            <View>
                <UserInfo />
                <SearchBar />
                <Stories />
                <Posts />
            </View>
        </DismissKeyboard>
    )
}

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const UserInfo = () => (
    <View style={styles.userInfoContainer}>
        <View>
            <NewText content="Hello," h3 light />
            <NewText content="Alvarado!" bold h2 dark />
        </View>
        <UserImage />
    </View>
);

export default Home;

const styles = StyleSheet.create({
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },
});