import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-eva-icons';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Home from './screens/Home';
import Conversation from './screens/Conversation';
import Profile from './screens/Profile';
import UserModal from './components/UserModal';

SplashScreen.preventAutoHideAsync();

const AppStack = createStackNavigator();

const HomeScreen = ({ navigation, onLayout }) => (
  <Screen>
    <Home navigation={navigation} onLayout={onLayout} />
  </Screen>
)

const ConversationScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Screen>
      <UserModal visible={modalVisible} toggle={toggleModal} />
      <Conversation navigation={navigation} toggle={toggleModal} />
    </Screen>
  )
}

const ProfileScreen = ({ navigation }) => (
  <Screen>
    <Profile navigation={navigation} />
  </Screen>
)

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ecf2fb',
          },
          headerTintColor: '#303035',
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity>
              <Icon
                name='more-vertical-outline'
                fill='#303035'
                height={30}
                width={30}
              />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            marginRight: 20
          },
          headerLeft: (props) => (
            <TouchableOpacity {...props}>
              <Icon
                name='arrow-back-outline'
                fill='#303035'
                height={30}
                width={30}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 20
          },
        }}
      >
        <AppStack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {(props) => <HomeScreen {...props} onLayout={onLayoutRootView} />}
        </AppStack.Screen>
        <AppStack.Screen
          name="Conversation"
          component={ConversationScreen}
        />
        <AppStack.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );

}

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function Screen({ children }) {
  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {children}
      </SafeAreaView>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf2fb',
  },
});
