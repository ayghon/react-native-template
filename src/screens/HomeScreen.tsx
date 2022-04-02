import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, View, Button } from 'react-native-ui-lib';

export function HomeScreen() {
  const { navigate } = useNavigation();
  return (
    <View flex centerH centerV>
      <Text>Home Screen</Text>
      <Button label="Go to Details" onPress={() => navigate('Details')} />
    </View>
  );
}
