import React from 'react';
import { ActivityIndicator, View } from 'react-native';



export const ResouceLoading: React.FC = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color={'#000'} size='large' />
    </View>
  );

};
