import React from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    // Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default NewText = ({ h1, h2, h3, h4, h5, p, bold, light, dark, content }) => {
    let [fontsLoaded] = useFonts({
        // Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Text
                style={[
                    { fontFamily: 'Poppins_500Medium,' },
                    h1 && { fontSize: 48 },
                    h2 && { fontSize: 32 },
                    h3 && { fontSize: 20 },
                    h4 && { fontSize: 18 },
                    h5 && { fontSize: 16 },
                    p && { fontSize: 12 },
                    bold && { fontFamily: 'Poppins_700Bold' },
                    light && { color: '#b0c6e1'},
                    dark && { color: '#303035'},
                ]}
            >
                {content}
            </Text>
        );
    }
};

