// src/screens/Agenda/index.jsx
import React, { useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@/theme';
import data from '@/data/appointments';
import AppointmentCard from '@/components/agenda/AppointmentCard';
import EstablishmentDetailsModal from '@/components/home/EstablishmentDetailsModal';

export default function AgendaScreen() {
  const navigation = useNavigation();
  const today = new Date().toISOString().slice(0, 10);

  const [selectedDate, setSelectedDate] = useState(today);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  /* datas marcadas */
  const marked = useMemo(() => {
    const m = {};
    Object.keys(data).forEach((d) => {
      m[d] = {
        customStyles: {
          container: { backgroundColor: colors.primary, borderRadius: 4 },
          text: { color: colors.bg },
        },
      };
    });
    m[selectedDate] = {
      ...(m[selectedDate] || {}),
      selected: true,
      selectedColor: colors.primary,
      selectedTextColor: colors.bg,
    };
    return m;
  }, [selectedDate]);

  const list = data[selectedDate] || [];

  /* abre modal */
  const openModal = (itm) => {
    setSelectedItem({
      ...itm,
      name: itm.est,
      distance: '--',
      address: '—',
    });
    setModalVisible(true);
  };

  /* editar agenda → BookingForm */
  const handleEdit = (appt) => {
    setModalVisible(false);
    navigation.navigate('BookingForm', {
      est: { name: appt.est },
      appt,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Calendar
        monthFormat="MMMM yyyy"
        hideExtraDays
        markingType="custom"
        markedDates={marked}
        onDayPress={(d) => setSelectedDate(d.dateString)}
        theme={{
          todayTextColor: colors.primary,
          arrowColor: colors.primary,
          monthTextColor: colors.text,
          dayTextColor: colors.text,
        }}
      />

      {list.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTxt}>Sem agendamentos nessa data.</Text>
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => <AppointmentCard item={item} onPress={() => openModal(item)} />}
          contentContainerStyle={{ padding: 16 }}
        />
      )}

      <EstablishmentDetailsModal
        visible={modalVisible}
        item={selectedItem}
        onClose={() => setModalVisible(false)}
        actionLabel="Editar agenda"
        onAction={handleEdit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyTxt: { color: colors.subText },
});
