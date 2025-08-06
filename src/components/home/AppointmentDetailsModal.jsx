import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { colors } from '@/theme';
import { Feather } from '@expo/vector-icons';

export default function AppointmentDetailsModal({ visible, item, onClose, onEdit, onDelete }) {
  if (!item) return null;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Detalhes do Agendamento</Text>

          {/* Informações */}
          <View style={styles.infoRow}>
            <Feather name="user" size={18} color={colors.primary} style={styles.icon} />
            <Text style={styles.label}>Cliente:</Text>
            <Text style={styles.value}>{item.client}</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="scissors" size={18} color={colors.primary} style={styles.icon} />
            <Text style={styles.label}>Serviço:</Text>
            <Text style={styles.value}>{item.service}</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="clock" size={18} color={colors.primary} style={styles.icon} />
            <Text style={styles.label}>Horário:</Text>
            <Text style={styles.value}>
              {item.time} ({item.duration})
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="user-check" size={18} color={colors.primary} style={styles.icon} />
            <Text style={styles.label}>Funcionário:</Text>
            <Text style={styles.value}>{item.employee}</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="dollar-sign" size={18} color={colors.primary} style={styles.icon} />
            <Text style={styles.label}>Valor:</Text>
            <Text style={styles.value}>R$ {item.price.toFixed(2)}</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="info" size={18} color={colors.primary} style={styles.icon} />
            <Text style={styles.label}>Status:</Text>
            <Text style={styles.value}>{item.status}</Text>
          </View>

          {item.notes ? (
            <View style={styles.notesBox}>
              <Text style={styles.label}>Observações:</Text>
              <Text style={styles.value}>{item.notes}</Text>
            </View>
          ) : null}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button, styles.editBtn]} onPress={onEdit}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.deleteBtn]} onPress={onDelete}>
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.closeBtn]} onPress={onClose}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' },
  modal: { width: '90%', backgroundColor: colors.bg, borderRadius: 10, padding: 20 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 16, color: colors.text, textAlign: 'center' },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  icon: { marginRight: 6 },
  label: { fontWeight: '700', color: colors.subText, marginRight: 4 },
  value: { fontSize: 16, color: colors.text, flexShrink: 1 },
  notesBox: { marginTop: 14 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
  button: { flex: 1, paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginHorizontal: 4 },
  editBtn: { backgroundColor: '#fdd835' },
  deleteBtn: { backgroundColor: '#e53935' },
  closeBtn: { backgroundColor: colors.chipBg },
  buttonText: { color: colors.bg, fontWeight: '700' },
  closeText: { color: colors.text, fontWeight: '700' },
});
