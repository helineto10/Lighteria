import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Botao from '../../../../Components/botao'
import {formataValor} from '../../../../Utils/utils';
import {useNavigation} from '@react-navigation/native'

const DescricaoItem = ({
  imagem,
  estudio,
  itemDesc,
  itemName,
  titulo,
  preco,
  id,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
          <View>
            <Text style={styles.textoSuperior}>{estudio}</Text>
            <Text style={styles.textoMedio}>{itemName}</Text>
            <Text style={styles.textoInferior}>{titulo}</Text>
          </View>
          <Image source={imagem} style={styles.imagem}/>
          </View>
          <View>
          <Text style={styles.textoDescricao}>{itemDesc}</Text>
          </View>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{formataValor(preco)}</Text>
            <Botao titulo={'COMPRAR'} onPress={() => navigation.push('Checkout')}/>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60
  },
  itemPosicao: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4
  },
  textoPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagem: {
    width: 30,
    height: 72
  },
  textoSuperior: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    marginBottom: 4
  },
  textoMedio: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    marginBottom: 4
  },
  textoInferior: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginBottom: 12,
    color: '#CACACA'
  },
  textoDescricao: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginTop: 12,
    color: '#ACAAAB'
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16
  },
  moeda: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    marginTop: 10,
    color: '#000000'
  }
});

export default DescricaoItem;