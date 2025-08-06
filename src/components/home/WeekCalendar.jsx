import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '@/theme';
import { format, addDays, startOfWeek } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Feather } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 7;

export default function WeekCalendar({ selectedDate, onSelectDate }) {
  const today = new Date().toISOString().slice(0, 10);
  const [baseDate, setBaseDate] = useState(new Date(selectedDate));
  const start = startOfWeek(baseDate, { weekStartsOn: 1 });
  const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

  const changeWeek = (direction) => {
    setBaseDate(addDays(baseDate, direction * 7));
  };

  return (
    <View style={styles.wrapper}>
      {/* Navegação */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeWeek(-1)}>
          <Feather name="chevron-left" size={20} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.month}>{format(baseDate, 'MMMM yyyy', { locale: ptBR })}</Text>
        <TouchableOpacity onPress={() => changeWeek(1)}>
          <Feather name="chevron-right" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Dias da semana */}
      <View style={styles.container}>
        {days.map((day) => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const isSelected = dateStr === selectedDate;
          const isToday = dateStr === today;

          return (
            <TouchableOpacity
              key={dateStr}
              style={[styles.day, isSelected && styles.daySelected, !isSelected && isToday && styles.dayToday]}
              onPress={() => onSelectDate(dateStr)}
            >
              <Text style={[styles.weekDay, (isSelected || isToday) && styles.weekDaySelected]}>{format(day, 'EEEEE', { locale: ptBR }).toUpperCase()}</Text>
              <Text style={[styles.date, (isSelected || isToday) && styles.dateSelected]}>{format(day, 'd')}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 12,
    paddingBottom: 8,
    backgroundColor: colors.bg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  month: { fontWeight: '600', color: colors.text },
  container: {
    flexDirection: 'row',
  },
  day: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
  },
  daySelected: { backgroundColor: colors.primary },
  dayToday: { backgroundColor: '#BBDEFB' },
  weekDay: { fontSize: 12, color: colors.subText },
  weekDaySelected: { color: colors.bg, fontWeight: '700' },
  date: { fontSize: 16, fontWeight: '600', color: colors.text },
  dateSelected: { color: colors.bg },
});
