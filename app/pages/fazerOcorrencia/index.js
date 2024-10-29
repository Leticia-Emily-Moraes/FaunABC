import React, { useState } from 'react';
import { View, TextInput,  Text, StyleSheet } from 'react-native';
import { Container } from './style';
import { Input } from '../../components/inputText/style';
import {Text16} from "../fazerOcorrencia/style"
import { Button } from "../../components";

function CriarAlerta ({ navigation }) {
const [titulo, setTitulo] = useState('');
const [subtitulo, setSubtitulo] = useState('');

const enviarAlerta = () => {
    if (titulo && subtitulo) {
    navigation.navigate('Alertas', { titulo, subtitulo });
    } else {
    alert('Por favor, preencha todos os campos!');
    }
};


return (
    <Container>
        <Text16>Título do Alerta:</Text16>
            <Input
			placeholder="Digite o caso"
            value={titulo}
            onChangeText={setTitulo}
            />
            <Text16>Subtítulo do Alerta:</Text16>
    <Input
			placeholder="Digite o subtítulo"
            value={subtitulo}
            onChangeText={setSubtitulo}
    />
    <Button title="Enviar Alerta" onPress={enviarAlerta} />
    <Button title="Ver alertas" onPress={() => navigation.navigate("Alertas")} />
    </Container>
);
};


export default CriarAlerta;

//Código reserva
/*
import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const CriarAlerta = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [tituloValido, setTituloValido] = useState(true);
  const [subtituloValido, setSubtituloValido] = useState(true);

  const validarCampos = () => {
    const isTituloValido = titulo.trim().length > 0;
    const isSubtituloValido = subtitulo.trim().length > 0;
    setTituloValido(isTituloValido);
    setSubtituloValido(isSubtituloValido);
    return isTituloValido && isSubtituloValido;
  };

  const enviarAlerta = () => {
    if (validarCampos()) {
      navigation.navigate('Alertas', { titulo, subtitulo });
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título do Alerta:</Text>
      <TextInput
        style={[styles.input, !tituloValido && styles.inputError]}
        placeholder="Digite o título"
        value={titulo}
        onChangeText={setTitulo}
      />
      {!tituloValido && <Text style={styles.errorMessage}>Este campo é obrigatório</Text>}
      
      <Text style={styles.label}>Subtítulo do Alerta:</Text>
      <TextInput
        style={[styles.input, !subtituloValido && styles.inputError]}
        placeholder="Digite o subtítulo"
        value={subtitulo}
        onChangeText={setSubtitulo}
      />
      {!subtituloValido && <Text style={styles.errorMessage}>Este campo é obrigatório</Text>}
      
      <TouchableOpacity style={styles.button} onPress={enviarAlerta}>
        <Text style={styles.buttonText}>Enviar Alerta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Alertas")}>
        <Text style={styles.buttonText}>Ver alertas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CriarAlerta;*/