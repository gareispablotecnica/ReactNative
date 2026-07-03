import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';

import Logo from './assets/Productos/a.jpg'

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>Producto1</Text>

        <Image
          source={Logo}
          style={styles.ImgProducto}
        ></Image>

        <TouchableOpacity
          style={styles.Boton}
          onPress={() => { alert('Prado Bañate') }}
        >
          <Text style={styles.subtitulo}>Agregar al Carrito</Text>
        </TouchableOpacity>
      </View>

       <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>Producto1</Text>

        <Image
          source={Logo}
          style={styles.ImgProducto}
        ></Image>

        <TouchableOpacity
          style={styles.Boton}
          onPress={() => { alert('Prado Bañate') }}
        >
          <Text style={styles.subtitulo}>Agregar al Carrito</Text>
        </TouchableOpacity>
      </View>

       <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>Producto1</Text>

        <Image
          source={Logo}
          style={styles.ImgProducto}
        ></Image>

        <TouchableOpacity
          style={styles.Boton}
          onPress={() => { alert('Prado Bañate') }}
        >
          <Text style={styles.subtitulo}>Agregar al Carrito</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:5,
  },
  ImgProducto: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  Titulo: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
    color: '#304080',
    fontWeight: 'bold',
  },
  Boton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#384090',
    width: 180,
    marginTop: 10,
  },
  subtitulo: {
    textAlign: 'center',
    color: '#fff',
  },
});
