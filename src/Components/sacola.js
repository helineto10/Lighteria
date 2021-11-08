import React, { useContext } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import DataContext from '../provider'

export const Sacola = () => {
  const navigation = useNavigation();
  const { itensCheckout } = useContext(DataContext);
  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.containerSacola}>
        <Image
          source={require('../assets/images/icone-sacola.png')}
          style={styles.imagem}
        />
        {itensCheckout.length > 0 ? (
          <View style={styles.containerQuantidade}>
            <Text style={styles.textoQuantidade}>
              {itensCheckout.reduce(
                (acumulado, atual) => acumulado + atual.quantidade, 0
              )}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 18
  },
  imagem: {
    height: 30,
    width: 30
  },
  containerQuantidade: {
    borderRadius: 100,
    backgroundColor: 'red',
    marginTop: -22,
    marginLeft: 11
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontFamily: 'OpenSans-SemiBold',
    color: '#fff'
  }
})