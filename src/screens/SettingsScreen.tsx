import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ball } from '../ui/animated/Ball';

export function SettingsScreen() {
  return (
    <View style={styles.screens}>
      <Text>Settings</Text>
      <GestureHandlerRootView>
        <Ball />
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  screens: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
