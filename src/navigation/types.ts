import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Events: undefined; // no params
  EventDetails: { id: string }; // Profile expects an object with id
};

export type EventDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EventDetails'
>;
