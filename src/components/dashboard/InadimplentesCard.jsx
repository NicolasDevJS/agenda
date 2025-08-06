import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/theme';

export default function InadimplentesCard({ clientes }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Inadimplentes</Text>
      {clientes.length === 0 ? (
        <Text style={styles.empty}>Nenhum cliente</Text>
      ) : (
        clientes.map((c) => (
          <Text key={c.id} style={styles.cliente}>
            {c.name} - R$ {c.valor}
          </Text>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 8,
    padding: 14,
    margin: 6,
  },
  title: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: 8 },
  empty: { color: colors.subText, fontSize: 14 },
  cliente: { fontSize: 14, color: colors.text, marginVertical: 2 },
});
