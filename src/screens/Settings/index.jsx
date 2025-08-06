import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import SettingsItem from '@/components/settings/SettingsItem';
import { colors } from '@/theme';
import { useAuth } from '@/contexts/AuthContext';

export default function Settings() {
  const { logout } = useAuth(); // pegamos a função logout do contexto

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 80 }}>
        <SettingsItem label="Dados do salão" onPress={() => {}} />
        <SettingsItem label="Permissões" onPress={() => {}} />
        <SettingsItem label="Integrações" onPress={() => {}} />
        <SettingsItem label="Idioma" value="Português" onPress={() => {}} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: colors.chipBg,
    backgroundColor: colors.bg,
  },
  logoutBtn: {
    backgroundColor: '#e53935',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: { color: colors.bg, fontSize: 16, fontWeight: '700' },
});
