import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { colors } from '@/theme';
import data from '@/data/appointments';
import AppointmentCard from '@/components/home/AppointmentCard';
import AddButton from '@/components/home/AddButton';
import WeekCalendar from '@/components/home/WeekCalendar';
import AppointmentDetailsModal from '@/components/home/AppointmentDetailsModal';

export default function Home({ navigation }) {
  const today = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const list = data[selectedDate] || [];

  const openModal = (item) => {
    setSelectedAppointment(item);
    setModalVisible(true);
  };

  const handleEdit = () => {
    setModalVisible(false);
    navigation.navigate('BookingForm', { appt: selectedAppointment });
  };

  const handleDelete = () => {
    // Lógica de exclusão futura
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <WeekCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />

      {list.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTxt}>Nenhum agendamento para este dia.</Text>
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => <AppointmentCard item={item} onPress={() => openModal(item)} />}
          contentContainerStyle={{ padding: 16 }}
        />
      )}

      <AddButton onPress={() => navigation.navigate('BookingForm')} />

      <AppointmentDetailsModal
        visible={modalVisible}
        item={selectedAppointment}
        onClose={() => setModalVisible(false)}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyTxt: { color: colors.subText, fontSize: 16 },
});
