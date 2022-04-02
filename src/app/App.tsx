import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

function HomeScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.screens}>
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
    <View style={styles.screens}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigate('Home')} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screens}>
      <Text>Settings</Text>
      <GestureHandlerRootView>
        <Ball />
      </GestureHandlerRootView>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function Ball() {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'blue',
    };
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      'worklet';
      isPressed.value = true;
    })
    .onChange((e) => {
      'worklet';
      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      };
    })
    .onFinalize(() => {
      'worklet';
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.ball, animatedStyles]} />
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  screens: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default App;
