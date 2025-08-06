import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/theme';

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Feather name="plus" size={28} color={colors.bg} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
