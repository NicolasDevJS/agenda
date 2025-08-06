import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import EmployeeCard from '@/components/employees/EmployeeCard';
import { colors } from '@/theme';

export default function Employees({ navigation }) {
  const [employees, setEmployees] = useState([
    { id: '1', name: 'Carlos', role: 'Cabeleireiro' },
    { id: '2', name: 'Ana', role: 'Manicure' },
  ]);

  const handleAdd = () => {};

  const handleEdit = (employee) => {};

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Feather name="plus" size={18} color={colors.primary} />
        <Text style={styles.addText}>Adicionar funcionário</Text>
      </TouchableOpacity>

      {employees.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Nenhum funcionário cadastrado.</Text>
        </View>
      ) : (
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EmployeeCard employee={item} onPress={() => handleEdit(item)} />}
          contentContainerStyle={{ paddingVertical: 16 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, paddingHorizontal: 16 },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
    marginBottom: 16,
  },
  addText: { marginLeft: 8, color: colors.primary, fontWeight: '600' },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: colors.subText },
});
