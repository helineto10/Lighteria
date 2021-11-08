import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Botao = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoContainer: {
    backgroundColor: '#00adef',
    padding: 20,
    borderRadius: 6,
  },
  botaoTexto: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});

export default Botao;