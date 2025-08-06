import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from '@/navigation/MainStack'; // Tabs do Admin
import EmployeeTabs from '@/navigation/EmployeeTabs'; // Tabs do Funcionário
import Login from '@/screens/Login';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { StatusBar } from 'expo-status-bar';

function AppContent() {
  const { isLogged, role } = useAuth();

  if (!isLogged) return <Login />;
  return role === 'admin' ? <MainStack /> : <EmployeeTabs />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <AppContent />
      </NavigationContainer>
    </AuthProvider>
  );
}
