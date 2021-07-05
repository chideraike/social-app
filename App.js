import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  // Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Home from './screens/Home';
import Conversation from './screens/Conversation';

const AppStack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <Screen>
    <Home navigation={navigation} />
  </Screen>
)

const ConversationScreen = () => (
  <Screen>
    <Conversation />
  </Screen>
)

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Home">
        <AppStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Conversation"
          component={ConversationScreen}
        // options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

function Screen({ children }) {
  let [fontsLoaded] = useFonts({
    // Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {children}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf2fb',
  },
});
