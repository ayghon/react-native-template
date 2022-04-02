import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export function DetailsScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.screens}>
      <Text>Details Screen</Text>
      <Button title="Go Home" onPress={() => navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screens: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
