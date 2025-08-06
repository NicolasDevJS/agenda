import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { colors } from '@/theme';

export default function PieChartCard({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Receita por Funcionário</Text>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 60}
        height={180}
        chartConfig={{
          color: () => colors.primary,
        }}
        accessor="value"
        backgroundColor="transparent"
        paddingLeft="10"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 8,
    padding: 14,
    marginHorizontal: 6,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: '700', color: colors.text },
});
