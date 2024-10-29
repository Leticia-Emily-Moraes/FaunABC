import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Alertas = ({ route }) => {
const [alertas, setAlertas] = useState([]);

useEffect(() => {
    if (route.params) {
    const { titulo, subtitulo } = route.params;
    setAlertas(prevAlertas => [...prevAlertas, { titulo, subtitulo }]);
    }
}, [route.params]);

return (
    <View style={styles.container}>
    <Text style={styles.title}>Lista de Alertas</Text>
    <FlatList
        data={alertas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
        <View style={styles.alertContainer}>
            <Text style={styles.alertTitle}>{item.titulo}</Text>
            <Text>{item.subtitulo}</Text>
        </View>
        )}
    />
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  alertContainer: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Alertas;
