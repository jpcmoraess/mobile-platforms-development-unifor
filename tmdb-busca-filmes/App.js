import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import BuscarFilmes from './BuscarFilmes';

export default function App() {
  return (
    <SafeAreaView style={appStyles.safe}>
      <StatusBar barStyle="dark-content" />
      <BuscarFilmes />
    </SafeAreaView>
  );
}

const appStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});