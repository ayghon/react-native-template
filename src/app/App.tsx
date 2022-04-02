import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';

function HomeScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigate('Details')} />
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function DetailsScreen() {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigate('Home')} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator> */}
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      {/* <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
