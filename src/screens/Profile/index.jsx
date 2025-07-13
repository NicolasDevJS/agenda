// src/screens/Profile/index.jsx
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/theme';

export default function Profile() {
  /* mock do usuário – troque depois por contexto ou API */
  const [user, setUser] = useState({
    name: 'Nicolas Costa',
    email: 'nicolas@email.com',
    cpf: '000.000.000-00',
    whats: '(11) 9 9999-9999',
  });
  const [edited, setEdited] = useState(user);

  /* salva alterações (placeholder) */
  const save = () => {
    setUser(edited);
    Alert.alert('Perfil', 'Dados salvos com sucesso!');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Meu perfil</Text>

        {/* campos */}
        {['name', 'email', 'cpf', 'whats'].map((field, i) => (
          <React.Fragment key={field}>
            <Text style={styles.label}>{field === 'name' ? 'Nome' : field === 'email' ? 'E-mail' : field === 'cpf' ? 'CPF' : 'WhatsApp'}</Text>
            <TextInput
              style={styles.input}
              value={edited[field]}
              onChangeText={(t) => setEdited({ ...edited, [field]: t })}
              keyboardType={field === 'email' ? 'email-address' : field !== 'name' ? 'numeric' : 'default'}
            />
          </React.Fragment>
        ))}

        {/* salvar */}
        <TouchableOpacity style={styles.btn} onPress={save}>
          <Text style={styles.btnTxt}>Salvar</Text>
        </TouchableOpacity>

        {/* histórico de serviços */}
        <TouchableOpacity style={[styles.btn, { backgroundColor: colors.chipBg, marginTop: 14 }]} onPress={() => Alert.alert('Histórico', 'Em breve 😉')}>
          <Text style={[styles.btnTxt, { color: colors.text }]}>Histórico de serviços</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* botão flutuante ajuda */}
      <TouchableOpacity style={styles.fab} onPress={() => Alert.alert('Ajuda', 'Como podemos ajudar?')}>
        <Feather name="help-circle" size={28} color={colors.bg} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

/* estilos */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { paddingHorizontal: 24, paddingBottom: 40 },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    color: colors.text,
  },
  label: { marginTop: 18, color: colors.subText, fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 8,
    padding: 12,
    marginTop: 6,
    color: colors.text,
  },
  btn: {
    marginTop: 26,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnTxt: { color: colors.bg, fontWeight: '600' },

  /* floating action button */
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    backgroundColor: colors.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});
