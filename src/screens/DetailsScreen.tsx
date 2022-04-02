import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, View, Button } from 'react-native-ui-lib';

export function DetailsScreen() {
  const { navigate } = useNavigation();
  return (
    <View flex centerH centerV>
      <Text>Details Screen</Text>
      <Button label="Go Home" onPress={() => navigate('Home')} />
    </View>
  );
}
