import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootTabs from './RootTabs';
import BookingForm from '@/screens/BookingForm';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={RootTabs} />
      <Stack.Screen name="BookingForm" component={BookingForm} />
    </Stack.Navigator>
  );
}
