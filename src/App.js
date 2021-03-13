import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>LIGHTERIA</Text>
        <View style={styles.containerSacola}>
          <Image
            style={styles.imagem}
            source={require('./assets/images/icone-sacola.png')}
          ></Image>
        </View>
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.separador}/>
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4'
  },
  titulo: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28
  },
  containerSacola: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 18
  },
  imagem: {
    height: 30,
    width: 30
  },
  containerDescricao: {
    paddingHorizontal: 24,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA'
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46
  },
  textoDescricao: {
    padding: 34,
    backgroundColor: '#F4F0F4',
    fontSize:16, 
    fontFamily: 'OpenSans-Regular',
    color: '#A1A5AA'
  }
})

export default App;