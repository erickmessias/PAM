import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native';

export default function App() {
  return (
    <>

    <View style={styles.container}>
    <View style={styles.titulo}>
      <Text style={styles.jokempo}>JOKEMPO</Text>
    </View>
    
    <View style={styles.placar}>
      <Text style={styles.jogador}>Jogador 01</Text>
      <Text style={styles.numeros}>0-0</Text>
      <Text style={styles.jogador}>jogador 02</Text>
    </View>

    <View style={styles.jogo}>
      <Image style={styles.ponto}
       source={require('./assets/imgs/jogador.png')}

      />
      <Image style={styles.versus}
      source={require('./assets/imgs/versus.png')}

      />
      <Image style={styles.ponto}
       source={require('./assets/imgs/jogador.png')}


      />
    </View>

    <View style={styles.botao}>
      <Button
      title="Nova partida"
      color="#FF8C42"
      />
   </View>
   
   <View style={styles.opcoes}>
   <Image 
      style={{ width: 80, height: 80 }}
      source={require('./assets/imgs/pedra.png')}
      />

   <Image 
      style={{ width: 80, height: 80}}
      source={require('./assets/imgs/tesoura.png')}
       />
    <Image 
      style={{ width: 80, height: 80 }}
      source={require('./assets/imgs/papel.png')}
      
    />
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
    backgroundColor:'#FF8C42',
  },

  jokempo: {
    fontSize: 36,
    fontWeight: '900',
    color: '#333',
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
    marginBottom: 30,
    borderRadius:25,
  },

  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom:30,
  },



});