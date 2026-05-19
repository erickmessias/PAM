import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function App() {

  return (
    <ScrollView style={styles.fundo}>

      <View style={styles.titulo}>
        <Text style={styles.tituloTexto}>SISTEMA SOLAR</Text>
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img} 
        source={require('./assets/imgs/mercurio.png')} 
        />
        <Text style={styles.nome}>Mercúrio</Text>
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img}
         source={require('./assets/imgs/venus.png')}
          />
        <Text style={styles.nome}>Vênus</Text>
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img}
         source={require('./assets/imgs/terra.png')}
          />
        <Text style={styles.nome}>Terra</Text>
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img}
         source={require('./assets/imgs/marte.png')}
          />
        <Text style={styles.nome}>Marte</Text>
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img}
         source={require('./assets/imgs/jupiter.png')}
          />
        <Text style={styles.nome}>Júpiter</Text>
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img}
         source={require('./assets/imgs/saturno.png')}
          />
        <Text style={styles.nome}>Saturno</Text>
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img} 
        source={require('./assets/imgs/urano.png')} 
        />
        <Text style={styles.nome}>Urano</Text>
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img} 
        source={require('./assets/imgs/netuno.png')}
         />
        <Text style={styles.nome}>Netuno</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#0a0a1a',
  },

  titulo: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#1a1a3e',
    marginBottom: 10,
  },

  tituloTexto: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 4,
  },

  planeta: {
    alignItems: 'center',
    marginVertical: 15,
  },

  img: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },

  nome: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 8,
    letterSpacing: 2,
  },
});