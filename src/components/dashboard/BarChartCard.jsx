import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { colors } from '@/theme';

export default function BarChartCard({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Evolução Semanal</Text>
      <BarChart
        data={{
          labels: data.labels,
          datasets: [{ data: data.values }],
        }}
        width={Dimensions.get('window').width - 60}
        height={180}
        chartConfig={{
          backgroundColor: colors.bg,
          backgroundGradientFrom: colors.bg,
          backgroundGradientTo: colors.bg,
          decimalPlaces: 0,
          color: () => colors.primary,
        }}
        style={{ marginTop: 10 }}
        showValuesOnTopOfBars
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
