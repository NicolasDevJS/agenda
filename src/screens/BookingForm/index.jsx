// src/screens/BookingForm/index.jsx
import React, { useState, useMemo } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MaskedTextInput } from 'react-native-mask-text';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@/theme';

const HOURS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
const FALLBACK_SERVICES = ['Corte', 'Escova', 'Unhas', 'Barba'];

export default function BookingForm({ route }) {
  const navigation = useNavigation();
  const est = route.params?.est;
  const editing = route.params?.appt ?? null;
  const [name, setName] = useState(editing?.name || '');
  const [cpf, setCpf] = useState(editing?.cpf || '');
  const [whats, setWhats] = useState(editing?.whats || '');
  const today = new Date().toISOString().slice(0, 10);
  const [service, setService] = useState(editing?.type || (est?.services || FALLBACK_SERVICES)[0]);
  const [date, setDate] = useState(editing?.date || today);
  const [time, setTime] = useState(editing?.time || '');
  const [errors, setErrors] = useState({});

  /* ---------- lógica de horas ---------- */
  const availableHours = useMemo(() => {
    if (date !== today) return HOURS;
    const limit = Date.now() + 30 * 60 * 1000;
    return HOURS.filter((h) => {
      const [hh, mm] = h.split(':').map(Number);
      const t = new Date();
      t.setHours(hh, mm, 0, 0);
      return t.getTime() > limit;
    });
  }, [date]);

  /* ---------- validação ---------- */
  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = true;
    if (!cpf.trim()) e.cpf = true;
    if (whats.replace(/\D/g, '').length < 11) e.whats = true;
    if (!service) e.service = true;
    if (!time) e.time = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    // TODO enviar
    navigation.goBack();
  };

  const services = est?.services || FALLBACK_SERVICES;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>{editing ? 'Editar agendamento' : 'Novo agendamento'}</Text>
        <Text style={styles.est}>{est?.name || editing?.est}</Text>

        <Text style={styles.label}>Nome*</Text>
        <TextInput
          style={[styles.input, errors.name && styles.error]}
          value={name}
          onChangeText={(t) => {
            setName(t);
            setErrors({ ...errors, name: false });
          }}
          placeholder="Digite seu nome"
        />

        <Text style={styles.label}>CPF*</Text>
        <TextInput
          style={[styles.input, errors.cpf && styles.error]}
          value={cpf}
          onChangeText={(t) => {
            setCpf(t);
            setErrors({ ...errors, cpf: false });
          }}
          placeholder="000.000.000-00"
          keyboardType="numeric"
        />

        <Text style={styles.label}>WhatsApp*</Text>
        <MaskedTextInput
          mask="(99) 9 9999-9999"
          value={whats}
          onChangeText={(t) => {
            setWhats(t);
            setErrors({ ...errors, whats: false });
          }}
          style={[styles.input, errors.whats && styles.error]}
          keyboardType="numeric"
          placeholder="(11) 9 9999-9999"
        />

        <Text style={styles.label}>Serviço*</Text>
        <View style={styles.tagsRow}>
          {services.map((s) => (
            <TouchableOpacity
              key={s}
              style={[styles.tag, service === s && styles.tagActive]}
              onPress={() => {
                setService(s);
                setErrors({ ...errors, service: false });
              }}
            >
              <Text style={[styles.tagTxt, service === s && styles.tagTxtActive]}>{s}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Data*</Text>
        <Calendar
          minDate={today}
          onDayPress={(d) => setDate(d.dateString)}
          markedDates={{ [date]: { selected: true, selectedColor: colors.primary } }}
          theme={{
            arrowColor: colors.primary,
            textDisabledColor: '#c0c0c0',
          }}
        />

        <Text style={[styles.label, { marginTop: 14 }]}>Horário*</Text>
        {availableHours.length === 0 ? (
          <Text style={styles.noHours}>Sem horários disponíveis</Text>
        ) : (
          <FlatList
            data={availableHours}
            horizontal
            keyExtractor={(h) => h}
            contentContainerStyle={{ paddingVertical: 8 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.hour, item === time && styles.hourActive]}
                onPress={() => {
                  setTime(item);
                  setErrors({ ...errors, time: false });
                }}
              >
                <Text style={[styles.hourTxt, item === time && styles.hourTxtActive]}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        <TouchableOpacity style={styles.btn} onPress={submit}>
          <Text style={styles.btnTxt}>{editing ? 'Salvar alterações' : 'Confirmar'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------- estilos ---------- */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { paddingHorizontal: 24, paddingBottom: 40 },
  back: { alignSelf: 'flex-start', marginTop: 8 },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 4,
    textAlign: 'center',
    color: colors.text,
  },
  est: {
    textAlign: 'center',
    fontWeight: '600',
    color: colors.subText,
    marginTop: 6,
  },
  label: { marginTop: 18, color: colors.subText, fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 8,
    padding: 12,
    marginTop: 6,
    color: colors.text,
  },
  error: { borderColor: '#e53935' },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  tag: {
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  tagActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  tagTxt: { color: colors.text },
  tagTxtActive: { color: colors.bg },
  hour: {
    borderWidth: 1,
    borderColor: colors.chipBg,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
  },
  hourActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  hourTxt: { color: colors.text },
  hourTxtActive: { color: colors.bg },
  noHours: { color: colors.subText, marginTop: 6 },
  btn: {
    marginTop: 28,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnTxt: { color: colors.bg, fontWeight: '600' },
});
