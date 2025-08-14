import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SVG Icons
import { CalendarIcon, HeartIcon, UserIcon } from 'react-native-heroicons/outline';

// Screens
import LoginScreen from '../features/auth/screens/LoginScreen';
import RegisterScreen from '../features/auth/screens/RegisterScreen';
import EventsListScreen from '../features/events/screens/EventsListScreen';
import EventDetailsScreen from '../features/events/screens/EventDetailsScreen';
import FavoritesListScreen from '../features/favorites/screens/FavoritesListScreen';
import ProfileScreen from '../features/profile/screens/ProfileScreen';

import { useThemeContext } from '../themes/ThemeContext';
import { useDirection } from '../i18n/DirectionProvider';

// Stack for Events
export type EventsStackParamList = {
  EventsList: undefined;
  EventDetails: { id: string };
  // TODO: Handle all screens 
};

const EventsStack = createNativeStackNavigator<EventsStackParamList>();

function EventsStackNavigator() {
  return (
    <EventsStack.Navigator
    >
      <EventsStack.Screen
        name="EventsList"
        component={EventsListScreen}
        options={{
          title: 'Events',
        }}

      />
      <EventsStack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ title: 'Event Details', headerShown: true }}
      />
    </EventsStack.Navigator>
  );
}

// Tabs
export type RootTabParamList = {
  EventsTab: undefined;
  FavoritesTab: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function MainTabs() {
  const { theme } = useThemeContext();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        tabBarIcon: ({ color, size }) => {
          const iconSize = size * 0.85;

          if (route.name === 'EventsTab') return <CalendarIcon color={color} size={iconSize} />;
          if (route.name === 'FavoritesTab') return <HeartIcon color={color} size={iconSize} />;
          if (route.name === 'ProfileTab') return <UserIcon color={color} size={iconSize} />;
          return null;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: '#B7B7B7',
      })}
    >
      <Tab.Screen
        name="EventsTab"
        component={EventsStackNavigator}
        options={{ title: 'Events', headerShown: false }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesListScreen}
        options={{ title: 'Favorites' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

// Auth Stack
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AppNavigator() {
  const { theme } = useThemeContext();
  const { isRTL } = useDirection();

  return (
    <NavigationContainer theme={theme} direction={isRTL ? 'rtl' : 'ltr'}>
      <AuthStack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
        <AuthStack.Screen name="Main" component={MainTabs} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
