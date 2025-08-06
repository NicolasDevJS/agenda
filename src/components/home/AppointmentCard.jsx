import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/theme';

export default function AppointmentCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.timeBox}>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.client}</Text>
        <Text style={styles.service}>{item.service}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 14,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: colors.bg,
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.chipBg,
  },
  timeBox: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  time: { fontSize: 16, fontWeight: '700', color: colors.primary },
  name: { fontSize: 16, fontWeight: '600', color: colors.text },
  service: { fontSize: 14, color: colors.subText },
});
