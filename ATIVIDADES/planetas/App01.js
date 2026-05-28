import { StyleSheet, Text, View, Image, ScrollView, Modal, Button, StatusBar } from 'react-native';
import React, { useState } from 'react';

const planetas = [
  {
    nome: 'Mercúrio',
    imagem: require('./assets/imgs/mercurio.png'),
    distancia: '57,9 milhões de km do Sol',
    diametro: '4.879 km',
    curiosidade: 'É o menor planeta do sistema solar e o mais próximo do Sol.',
  },
  {
    nome: 'Vênus',
    imagem: require('./assets/imgs/venus.png'),
    distancia: '108,2 milhões de km do Sol',
    diametro: '12.104 km',
    curiosidade: 'É o planeta mais quente, com temperaturas de até 465°C.',
  },
  {
    nome: 'Terra',
    imagem: require('./assets/imgs/terra.png'),
    distancia: '149,6 milhões de km do Sol',
    diametro: '12.742 km',
    curiosidade: 'Único planeta conhecido com vida e com água líquida na superfície.',
  },
  {
    nome: 'Marte',
    imagem: require('./assets/imgs/marte.png'),
    distancia: '227,9 milhões de km do Sol',
    diametro: '6.779 km',
    curiosidade: 'Tem o maior vulcão do sistema solar, o Monte Olimpo.',
  },
  {
    nome: 'Júpiter',
    imagem: require('./assets/imgs/jupiter.png'),
    distancia: '778,5 milhões de km do Sol',
    diametro: '139.820 km',
    curiosidade: 'É o maior planeta do sistema solar e tem pelo menos 95 luas.',
  },
  {
    nome: 'Saturno',
    imagem: require('./assets/imgs/saturno.png'),
    distancia: '1,43 bilhões de km do Sol',
    diametro: '116.460 km',
    curiosidade: 'Seus famosos anéis são compostos de gelo e rocha.',
  },
  {
    nome: 'Urano',
    imagem: require('./assets/imgs/urano.png'),
    distancia: '2,87 bilhões de km do Sol',
    diametro: '50.724 km',
    curiosidade: 'Gira de lado, com o eixo inclinado em 98 graus.',
  },
  {
    nome: 'Netuno',
    imagem: require('./assets/imgs/netuno.png'),
    distancia: '4,50 bilhões de km do Sol',
    diametro: '49.244 km',
    curiosidade: 'Tem os ventos mais rápidos do sistema solar, chegando a 2.100 km/h.',
  },
];

export default function App() {
  const [visivel, setVisivel] = useState(false);
  const [planeta, setPlaneta] = useState(0);

  const abrir = (numero) => {
    setPlaneta(numero);
    setVisivel(true);
  }

  const voltar = () => {
    setVisivel(false);
  }

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
        <Button title="Ver detalhes" onPress={() => abrir(0)} />
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img}
         source={require('./assets/imgs/venus.png')}
        />
        <Text style={styles.nome}>Vênus</Text>
        <Button title="Ver detalhes" onPress={() => abrir(1)} />
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img} 
        source={require('./assets/imgs/terra.png')}
        />
        <Text style={styles.nome}>Terra</Text>
        <Button title="Ver detalhes" onPress={() => abrir(2)} />
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img} 
         source={require('./assets/imgs/marte.png')}
        />
        <Text style={styles.nome}>Marte</Text>
        <Button title="Ver detalhes" onPress={() => abrir(3)} />
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img} 
         source={require('./assets/imgs/jupiter.png')}
        />
        <Text style={styles.nome}>Júpiter</Text>
        <Button title="Ver detalhes" onPress={() => abrir(4)} />
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img}
         source={require('./assets/imgs/saturno.png')}
          />
        <Text style={styles.nome}>Saturno</Text>
        <Button title="Ver detalhes" onPress={() => abrir(5)} />
      </View>

      <View style={styles.planeta}>
        <Image style={styles.img} source={require('./assets/imgs/urano.png')} />
        <Text style={styles.nome}>Urano</Text>
        

      <View style={styles.planeta}>
        <Image style={styles.img} source={require('./assets/imgs/netuno.png')} />
        <Text style={styles.nome}>Netuno</Text>
      </View>

      <Modal visible={visivel} animationType="fade">
        <View style={styles.modalContainer}>
          <Text style={styles.modalNome}>{planetas[planetaSelecionado].nome}</Text>
          <Text style={styles.modalMsg}>{planetas[planetaSelecionado].distancia}</Text>
          <Text style={styles.modalMsg}>{planetas[planetaSelecionado].diametro}</Text>
          <Text style={styles.modalMsg}>{planetas[planetaSelecionado].curiosidade}</Text>
          <Image style={styles.modalImg}
           source={planetas[planeta].imagem}
          />
          <Button title="Voltar" onPress={() => voltar()} />
        </View>
        <StatusBar style="auto" />
      </Modal>

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

  modalContainer: {
    flex: 1,
    backgroundColor: '#0a0a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  modalNome: {
    fontSize: 26,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 12,
  },

  modalMsg: {
    fontSize: 14,
    color: '#ccccff',
    marginBottom: 6,
    textAlign: 'center',
  },

  modalImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    marginTop: 10,
  },
});
