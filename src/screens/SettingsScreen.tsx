import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ball } from '../ui/animated/Ball';
import { Text, View } from 'react-native-ui-lib';

export function SettingsScreen() {
  return (
    <View flex centerH centerV>
      <Text>Settings</Text>
      <GestureHandlerRootView>
        <Ball />
      </GestureHandlerRootView>
    </View>
  );
}
