import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/theme';

export default function AppointmentCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress?.(item)} style={styles.touch}>
      <View style={styles.card}>
        <Feather name="clock" size={20} color={colors.primary} />
        <View style={styles.info}>
          <Text style={styles.est}>{item.est}</Text>
          <Text style={styles.type}>{item.type}</Text>
        </View>
        <Text style={styles.date}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touch: { marginBottom: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bg,
    padding: 16,
    borderRadius: 12,
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
  },
  info: { flex: 1, marginLeft: 12 },
  est: { fontSize: 16, fontWeight: '600', color: colors.text },
  type: { color: colors.subText },
  date: { color: colors.primary },
});
