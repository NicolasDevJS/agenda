// src/navigation/EmployeeTabs.jsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from '@/screens/Home';
import EmployeeSettings from '@/screens/EmployeeSettings';
import { colors } from '@/theme';

const Tab = createBottomTabNavigator();

export default function EmployeeTabs() {
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
          tabBarIcon: (p) => <Feather name="calendar" {...p} />,
        }}
      />

      <Tab.Screen
        name="EmployeeSettings"
        component={EmployeeSettings}
        options={{
          tabBarIcon: (p) => <Feather name="settings" {...p} />,
        }}
      />
    </Tab.Navigator>
  );
}
