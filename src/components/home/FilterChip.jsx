// src/components/home/FilterChip.jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '@/theme';

export default function FilterChip({ label, active, onPress }) {
  return (
    <TouchableOpacity style={[styles.chip, active && styles.chipActive]} onPress={onPress} activeOpacity={0.8}>
      <Text style={[styles.txt, active && styles.txtActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 34,
    paddingHorizontal: 14,
    borderRadius: 17,
    backgroundColor: colors.chipBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  chipActive: { backgroundColor: colors.primary },
  txt: { color: colors.text, fontSize: 14 },
  txtActive: { color: colors.bg },
});
