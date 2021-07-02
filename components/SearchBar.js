import React from 'react'
import { StyleSheet, TextInput, View, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-eva-icons';
import {
    useFonts,
    Poppins_500Medium,
} from '@expo-google-fonts/poppins';

export default function SearchBar() {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    const iconRef = React.useRef();
    const onIconPress = () => {
        iconRef.current?.startAnimation();
    };

    return (
        <View style={styles.searchBarContainer}>
            <TouchableWithoutFeedback onPress={onIconPress}>
                <View style={styles.searchIcon}>
                    <Icon
                        name='search-outline'
                        fill='white'
                        height={30}
                        width={30}
                        ref={iconRef}
                        animation='zoom'
                    />
                </View>
            </TouchableWithoutFeedback>
            <TextInput
                style={styles.searchInput}
                onFocus={onIconPress}
                placeholder="Search friend"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        margin: 20,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        shadowColor: "#b0c6e1",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    searchIcon: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#c64b50',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#c64b50",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    searchInput: {
        fontFamily: 'Poppins_500Medium',
        color: '#303035',
        fontSize: 18,
        width: 250
    },
})
