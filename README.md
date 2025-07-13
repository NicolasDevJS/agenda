<!-- Banner / Logo (opcional) -->
<p align="center">
  <img src="docs/banner.png" width="600" alt="Agenda App">
</p>

<h1 align="center">Agenda App</h1>

<p align="center">
  App React Native + Expo para agendamentos de serviços (salões, barbearias, manicures…).<br/>
  100 % frontend — estado local <i>(pode acoplar API depois)</i>.
</p>

<p align="center">
  <!-- Badges -->
  <a href="https://www.npmjs.com/package/expo"><img alt="Expo" src="https://img.shields.io/badge/built%20with-Expo-blue.svg?style=flat"></a>
  <img alt="Platform" src="https://img.shields.io/badge/platform-iOS%20%26%20Android-green">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-lightgrey">
</p>

---

## ✨ Features

- **Home** – busca + filtros roláveis, cards por distância  
- **Agenda** – calendário mensal com marcações, edição de agendamentos  
- **Booking Form** – chips de serviços, data/hora, validação (Nome / CPF / WhatsApp)  
- **Perfil** – editar dados, histórico (placeholder) e FAB de ajuda  
- **Tema global** com `theme.js` (troque 1 cor → app inteiro muda)  
- Navegação: **Bottom Tabs** + **Native Stack** (React Navigation v6)  
- UI 100 % **StyleSheet** e Ícones **Feather**  

---

## 📦 Tech Stack

| Camada            | Libs |
|-------------------|------|
| **Core**          | `react-native` • `expo` |
| **Navigation**    | `@react-navigation/native` • `native-stack` • `bottom-tabs` |
| **Calendário**    | `react-native-calendars` |
| **Máscara Input** | `react-native-mask-text` |
| **Modal**         | `react-native-modal` |
| **Ícones**        | `@expo/vector-icons/Feather` |

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/<seu-user>/agenda.git
cd agenda
npm install       # ou yarn
