import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import ValueCard from '@/components/dashboard/ValueCard';
import BarChartCard from '@/components/dashboard/BarChartCard';
import PieChartCard from '@/components/dashboard/PieChartCard';
import InadimplentesCard from '@/components/dashboard/InadimplentesCard';
import { colors } from '@/theme';

export default function Dashboard() {
  const valores = { dia: 500, semana: 3400, mes: 7800 };
  const barData = { labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'], values: [200, 450, 300, 500, 600, 400] };
  const pieData = [
    { name: 'Lucas', value: 3000, color: '#1e88e5', legendFontColor: colors.text },
    { name: 'Mariana', value: 2500, color: '#43a047', legendFontColor: colors.text },
    { name: 'João', value: 2300, color: '#fdd835', legendFontColor: colors.text },
  ];
  const inadimplentes = [
    { id: 1, name: 'Carlos Silva', valor: 150 },
    { id: 2, name: 'Ana Paula', valor: 200 },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: 12 }}>
        <View style={styles.row}>
          <ValueCard label="Dia" value={valores.dia} />
          <ValueCard label="Mês" value={valores.mes} />
        </View>
        <View style={styles.row}>
          <ValueCard label="Semana" value={valores.semana} />
        </View>
        <PieChartCard data={pieData} />
        <BarChartCard data={barData} />
        <InadimplentesCard clientes={inadimplentes} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
});
