import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/theme';

export default function ValueCard({ label, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>R$ {value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 8,
    padding: 14,
    margin: 6,
    alignItems: 'center',
  },
  value: { fontSize: 18, fontWeight: '700', color: colors.text },
  label: { fontSize: 14, color: colors.subText, marginTop: 4 },
});
