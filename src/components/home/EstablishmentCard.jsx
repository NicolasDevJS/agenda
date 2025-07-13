import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/theme';

export default function EstablishmentCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress?.(item)} style={styles.touch}>
      <View style={styles.card}>
        <Feather name="map-pin" size={24} color={colors.primary} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.type}>{item.type}</Text>
        </View>
        <Text style={styles.distance}>{item.distance} km</Text>
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
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: '600', color: colors.text },
  type: { color: colors.subText },
  distance: { color: colors.primary },
});
