import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export function HomeScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.screens}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigate('Details')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screens: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
