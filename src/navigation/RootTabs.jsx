import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '@/screens/Home';
import Agenda from '@/screens/Agenda';
import Profile from '@/screens/Profile';
import { colors } from '@/theme';

const Tab = createBottomTabNavigator();

export default function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (p) => <Feather name="home" {...p} />,
        }}
      />

      <Tab.Screen
        name="Agenda"
        component={Agenda}
        options={{
          tabBarIcon: (p) => <Feather name="calendar" {...p} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (p) => <Feather name="user" {...p} />,
        }}
      />
    </Tab.Navigator>
  );
}
