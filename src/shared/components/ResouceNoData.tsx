import React from 'react';
import { Text, View } from 'react-native';

type ResouceNoDataProps = {
  noDataMessage?: string;
};

export const ResouceNoData: React.FC<ResouceNoDataProps> = ({
  noDataMessage,
}) => {

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <Text>{noDataMessage}</Text>
    </View>
  );

};
