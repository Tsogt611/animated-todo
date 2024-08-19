import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Appcontainer from './src/componets/app-container';
import Main from './src/screens/main'

export default function App() {
  return (
    <Appcontainer>
    <Main></Main>
    </Appcontainer>
  );
}
