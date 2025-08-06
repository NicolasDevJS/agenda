import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/theme';

export default function SettingsItem({ label, value, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        {value && <Text style={styles.value}>{value}</Text>}
      </View>
      <Feather name="chevron-right" size={20} color={colors.subText} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
  },
  label: { fontSize: 16, color: colors.text },
  value: { fontSize: 14, color: colors.subText, marginTop: 4 },
});
