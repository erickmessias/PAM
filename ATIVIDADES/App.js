import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [jogador, setJogador] = useState(0)
  const [maquina, setMaquina] = useState(0)
  

 
  const [imagens, setImagens] = useState([
    require('./assets/imgs/jogador.png'),
    require('./assets/imgs/pedra.png'),  
    require('./assets/imgs/papel.png'),  
    require('./assets/imgs/tesoura.png')  
  ])


  const [jogadorImg, setJogadorImg] = useState(0)
  const [maquinaImg, setMaquinaImg] = useState(0)

  const pedra = () => {
    setJogadorImg(1)
    const valorMaquina = Math.floor(Math.random() * 3) + 1
    setMaquinaImg(valorMaquina)

    if (valorMaquina == 3) {
      setJogador(jogador + 1)
    } else if (valorMaquina == 2) {
      setMaquina(maquina + 1)
    }
  }

  const papel = () => {
    setJogadorImg(2)
    const valorMaquina = Math.floor(Math.random() * 3) + 1
      setMaquinaImg(valorMaquina)

    if (valorMaquina == 1) {
      setJogador(jogador + 1)
    } else if (valorMaquina == 3) {
      setMaquina(maquina + 1)
    }
  }

  const tesoura = () => {
    setJogadorImg(3)
    const valorMaquina = Math.floor(Math.random() * 3) + 1
    setMaquinaImg( valorMaquina)

    if (valorMaquina == 2) {
      setJogador(jogador + 1)
    } else if (valorMaquina == 1) {
      setMaquina(maquina + 1)
    }
  }

 const botao =() => {
   setJogador(0)
   setJogadorImg(0)
   setMaquina(0)
   setMaquinaImg(0)
}
   
  return (
    <>

      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.jokempo}>JOKENPO</Text>
        </View>

        <View style={styles.placar}>
          <Text style={styles.jogador}>Jogador 01</Text>
          <Text style={styles.numeros}>{jogador}-{maquina}</Text>
          <Text style={styles.jogador}>jogador 02</Text>
        </View>

        <View style={styles.jogo}>
          <Image style={styles.ponto}
            source={imagens[jogadorImg]}
          />
          <Image style={styles.versus}
            source={require('./assets/imgs/versus.png')}
          />
          <Image style={styles.ponto}
            source={imagens[maquinaImg]}
          />
        </View>

        <View style={styles.botao}>
          <Pressable style={styles.botao} onPress={() => botao()}>
            <Text style={styles.textButton}>NOVA PARTIDA</Text>
          </Pressable>
    
        </View>

        <View style={styles.opcoes}>
      <Pressable onPress={() => pedra()}>
         <Image
       style={{ width: 80, height: 80 }}
        source={require('./assets/imgs/pedra.png')}
            />
      </Pressable>

     <Pressable onPress={() => tesoura()}>
     <Image
       style={{ width: 80, height: 80 }}
              source={require('./assets/imgs/tesoura.png')}
            />
          </Pressable>

      <Pressable onPress={() => papel()}>
       <Image
              style={{ width: 80, height: 80 }}
              source={require('./assets/imgs/papel.png')}
       />
      </Pressable>
   </View>

  </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },

  titulo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 10,
    backgroundColor: '#FF8C42',
  },

  jokempo: {
    fontSize: 36,
    fontWeight: '900',
    color: '#ffffff',
  },

  placar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FF8C42',
    borderRadius: 15,
    marginBottom: 30,
  },

  jogador: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },

  numeros: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },

  jogo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },

  ponto: {
    width: 120,
    height: 120,
  },

  versus: {
    width: 100,
    height: 100,
  },

  botao: {
    width: '70%',
    marginTop: 10,
    marginBottom: 12,
    borderRadius: 25,
    color:'rgb(255, 255, 255)',
    backgroundColor: "#FF8C42",
    display: 'flex',
    alignItems: 'center'
  },

  textButton:{
    color:'rgb(255, 255, 255)',
    fontWeight: '800',
  },

  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 30,
  },
});
