import React from 'react';
import Button from './Button';
import { Text, View } from 'react-native';

type ResouceErrorProps = {
  error: string;
  onRetry?: () => Promise<void>;
};

export const ResouceError: React.FC<ResouceErrorProps> = ({
  error,
  onRetry,

}) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <Text>{error}</Text>
      {onRetry && (
        <Button
          onPress={onRetry}
          title='Retry'
        />
      )}
    </View>
  );

};
