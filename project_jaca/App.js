import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,    
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
     borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'#00000'
  },
  img:{
    width: 250,
    height:250,
    borderRadius: 30
  },  
  textoFrase:{
    fontSize:20,
    color:'#ff6e27',
    margin: 30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth:2,
    borderColor:'#331327',
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#331327'
  }  
})
class App extends Component{  
  constructor(props){
    super(props);
    this.state ={
      textoFrase:'',
      img: require('./src/jaca.jpg')
    }
    this.penaJaca = this.penaJaca.bind(this)
    this.frases = ["A vida é curta. Sorria enquanto ainda tem dentes.",
"Não leve a vida tão a sério, afinal, você não vai sair vivo dela mesmo.",
"Eu não tenho problema em falar com mim mesmo. Às vezes eu preciso de uma opinião de um especialista.",
"A dieta está indo tão bem que eu até tirei uma soneca da tarde para poder pensar em comida.",
"Se eu ganhasse um real toda vez que me esqueço das coisas... O que a gente tava falando mesmo?",
"A melhor parte de acordar é perceber que o café não acabou.",
"A vida não é um conto de fadas. Se você perder seu sapato à meia-noite, é melhor voltar e procurá-lo.",
"A fila do pão é a única que não tem pão. A fila do banco também, mas pelo menos tem banco.",
"Eu não sou preguiçoso. Estou em um estado de economia de energia.",
"Eu nunca peço desculpas. Lamento que você se sinta assim.",
"As dietas são difíceis porque você começa a ficar bonito(a) e aí vem o fim de semana.",
"Eu queria ser rico o bastante para comprar coisas inúteis.",
"Eu só erro quando penso.",
"Quem nunca comeu melado quando come, se lambuza todo.",
"O futuro pertence àqueles que acordam cedo. Por isso que eu estou dormindo.",
"Não me irrite. Tenho uma fila de sarcasmo esperando para ser usada.",
"Eu costumava ser indeciso. Agora não tenho tanta certeza.",
"Eu odeio quando estou esperando por alguém e então percebo que sou a pessoa que está atrasada.",
"Se o mundo acabar amanhã, por favor, me avise para eu cancelar minha academia.",
"A melhor coisa de acordar cedo é que ainda há tempo para dormir um pouco mais."]
  }

  penaJaca(){
    //gerando um numero aleatório levando como base a quantidade de frases dentro do array
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    //Atualizando o texto e a imagem no app
    this.setState({
      textoFrase:' " ' + this.frases[numeroAleatorio ] + ' " ',//concatenando as aspas com a frase escolhida
      img: require('./src/pe.jpg')// mudando a imagem
    })

  }

  render(){
    return(      
      <View style={styles.container}>
        <Image
          source = {this.state.img}
          style={styles.img}
        />      
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>{/*ao clicar no botão vai buscar o texto
        no array*/}
        {/*Ao pressionar o botão vai ser acionado a função penaJaca*/}
        <TouchableOpacity style={styles.botao} onPress={this.penaJaca}> 
          <View style={styles.btnArea}>{/*Área do botão*/}
            <Text style={styles.btnTexto}>PRESS IN THE JACA</Text>{/*Texto dentro do botão*/}
          </View>
        </TouchableOpacity>  
      </View>
    )
  }
}
export default App;


