import React from 'react';
import { StyleSheet, View } from 'react-native'
import Background from './components/background';
import DescricaoItem from './components/descricaoItem';

const DetalhesProduto = ({route}) => {
  const {imagem, estudio, itemDesc, itemName, titulo, preco, id} = route.params;
  return (
    <View style={styles.container}>
      <Background/>
      <DescricaoItem
        imagem={imagem}
        estudio={estudio}
        itemDesc={itemDesc}
        itemName={itemName}
        titulo={titulo}
        preco={preco}
        id={id}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default DetalhesProduto;