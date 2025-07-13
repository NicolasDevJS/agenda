// src/components/home/EstablishmentDetailsModal.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import Modal from 'react-native-modal';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/theme';

export default function EstablishmentDetailsModal({ visible, item, onClose, actionLabel = 'Agendar', onAction }) {
  if (!item) return null;

  const openMaps = () => {
    const query = encodeURIComponent(item.address || item.name);
    const url = Platform.select({
      ios: `maps:0,0?q=${query}`,
      android: `geo:0,0?q=${query}`,
    });
    Linking.openURL(url);
  };

  return (
    <Modal isVisible={visible} onBackdropPress={onClose}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <Feather name="x" size={24} color={colors.subText} />
        </TouchableOpacity>

        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.info}>Distância: {item.distance} km</Text>
        <Text style={styles.info}>Endereço: {item.address || 'Não informado'}</Text>
        <Text style={styles.info}>Telefone: (11) 1234-5678</Text>

        <TouchableOpacity style={styles.mapBtn} onPress={openMaps}>
          <Feather name="map" size={18} color={colors.primary} />
          <Text style={styles.mapTxt}>Ver no mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => onAction?.(item)}>
          <Text style={styles.btnTxt}>{actionLabel}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: colors.bg, borderRadius: 16, padding: 24 },
  closeIcon: { position: 'absolute', top: 10, right: 10 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 4, color: colors.text },
  type: { color: colors.subText, marginBottom: 12 },
  info: { marginBottom: 6, color: colors.text },
  mapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    marginTop: 16,
  },
  mapTxt: { marginLeft: 6, color: colors.primary, fontWeight: '600' },
  btn: {
    marginTop: 12,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnTxt: { color: colors.bg, fontWeight: '600' },
});
