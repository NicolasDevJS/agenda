// src/screens/Home/index.jsx
import React, { useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EstablishmentCard from '@/components/home/EstablishmentCard';
import FilterChip from '@/components/home/FilterChip';
import EstablishmentDetailsModal from '@/components/home/EstablishmentDetailsModal';
import data from '@/data/establishments';
import { colors } from '@/theme';

const SERVICES = ['Todos', 'Cabeleireiro', 'Manicure', 'Barbearia'];

export default function Home() {
  const navigation = useNavigation();

  const [filter, setFilter] = useState('Todos');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  /* ---------- lista filtrada ---------- */
  const list = useMemo(() => {
    let base = filter === 'Todos' ? data : data.filter((i) => i.type === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      base = base.filter((i) => i.name.toLowerCase().includes(q));
    }
    return [...base].sort((a, b) => a.distance - b.distance);
  }, [filter, search]);

  /* ---------- handlers ---------- */
  const openModal = (item) => {
    setSelected(item);
    setModalVisible(true);
  };

  const handleAgendar = (est) => {
    setModalVisible(false);
    navigation.navigate('BookingForm', { est });
  };

  /* ---------- cabeçalho da lista ---------- */
  const ListHeader = () => (
    <View>
      {/* busca */}
      <TextInput placeholder="Buscar estabelecimentos..." placeholderTextColor={colors.subText} value={search} onChangeText={setSearch} style={styles.search} />

      {/* chips roláveis */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsRow}>
        {SERVICES.map((s) => (
          <FilterChip key={s} label={s} active={filter === s} onPress={() => setFilter(s)} />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EstablishmentCard item={item} onPress={openModal} />}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      <EstablishmentDetailsModal visible={modalVisible} item={selected} onClose={() => setModalVisible(false)} onAction={handleAgendar} />
    </SafeAreaView>
  );
}

/* ---------- estilos ---------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, paddingHorizontal: 16 },
  search: {
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
    color: colors.text,
  },
  chipsRow: { paddingVertical: 12 },
});
