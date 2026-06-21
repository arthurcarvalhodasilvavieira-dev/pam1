import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [paragrafoClicado, setParagrafoClicado] = useState(null);


  const handleParagraphClick = (index) => {
    setParagrafoClicado(index);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.caixaTitulo}>
        <Text style={styles.titulo}>
          A História do CR7
        </Text>
      </View>
      <TouchableOpacity 
        style={[
          styles.paragrafoCaixa,
          paragrafoClicado === 0 && styles.paragrafoCaixaClicado
        ]}
        onPress={() => handleParagraphClick(0)}
        activeOpacity={0.9}
      >


        <Text style={styles.paragrafo}>
          Cristiano Ronaldo dos Santos Aveiro, conhecido como Cristiano Ronaldo, 
          nasceu em 5 de fevereiro de 1985, em Funchal, Madeira, Portugal. 
          Considerado um dos maiores jogadores de futebol da história, Ronaldo 
          começou sua carreira profissional no Sporting Clube de Portugal antes 
          de se transferir para o Manchester United em 2003, onde ganhou 
          reconhecimento internacional.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.paragrafoCaixa,
          paragrafoClicado === 1 && styles.paragrafoCaixaClicado
        ]}
        onPress={() => handleParagraphClick(1)}
        activeOpacity={0.9}
      >


        <Text style={styles.paragrafo}>
          Em 2009, Ronaldo fez uma transferência histórica para o Real Madrid, 
          onde se tornou o jogador mais pago do mundo na época. Durante seus 
          nove anos no clube espanhol, ele conquistou 15 títulos, incluindo 
          quatro Champions League, e marcou 450 gols em 438 partidas. 
          Ronaldo também se tornou o maior artilheiro da história da Champions 
          League com 140 gols.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.paragrafoCaixa,
          paragrafoClicado === 2 && styles.paragrafoCaixaClicado
        ]}
        onPress={() => handleParagraphClick(2)}
        activeOpacity={0.9}
      >


        <Text style={styles.paragrafo}>
          Após deixar o Real Madrid, Ronaldo jogou pela Juventus de 2018 a 2021, 
          onde conquistou dois títulos da Serie A e se tornou o maior artilheiro 
          estrangeiro do clube. Em 2021, retornou ao Manchester United, e em 
          2023 assinou com o Al-Nassr da Arábia Saudita, continuando sua 
          trajetória de sucesso em diferentes países.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.paragrafoCaixa,
          paragrafoClicado === 3 && styles.paragrafoCaixaClicado
        ]}
        onPress={() => handleParagraphClick(3)}
        activeOpacity={0.9}
      >


        <Text style={styles.paragrafo}>
          Na seleção portuguesa, Ronaldo é o maior artilheiro da história com 
          mais de 130 gols em 200 partidas. Ele liderou Portugal na conquista 
          da Eurocopa de 2016 e da Liga das Nações de 2019. Ronaldo participou 
          de cinco Copas do Mundo e cinco Eurocopas, sendo o único jogador a 
          fazer isso.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.paragrafoCaixa,
          paragrafoClicado === 4 && styles.paragrafoCaixaClicado
        ]}
        onPress={() => handleParagraphClick(4)}
        activeOpacity={0.9}
      >


        <Text style={styles.paragrafo}>
          Ronaldo conquistou cinco bolas de ouro como melhor jogador do mundo, 
          sendo o primeiro jogador a ganhar o prêmio cinco vezes. Ele também 
          ganhou 34 troféus individuais, incluindo o recorde de maior número 
          de vezes premiado como o melhor jogador da UEFA. Sua disciplina 
          física e profissionalismo são considerados excepcionais no futebol.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.paragrafoCaixa,
          paragrafoClicado === 5 && styles.paragrafoCaixaClicado
        ]}
        onPress={() => handleParagraphClick(5)}
        activeOpacity={0.9}
      >


        <Text style={styles.paragrafo}>
          Além dos feitos esportivos, Ronaldo é conhecido por sua generosidade. 
          Ele doou milhões para causas humanitárias, incluindo atuais projetos 
          de ajuda a crianças, hospitais e organizações de caridade. Ronaldo 
          também é um dos jogadores mais seguidos do mundo nas redes sociais, 
          com mais de 600 milhões de seguidores no Instagram.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.paragrafoCaixa,
          paragrafoClicado === 6 && styles.paragrafoCaixaClicado
        ]}
        onPress={() => handleParagraphClick(6)}
        activeOpacity={0.9}
      >


        <Text style={styles.paragrafo}>
          Seu nick "CR7" tornou-se uma marca global, usada em produtos 
          licenciados, hotéis e até em uma linha de moda. Ronaldo é 
          considerado um ícone do esporte devido à sua longevidade, 
          consistência e capacidade de se adaptar a diferentes estilos de 
          jogo e competições.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.paragrafoCaixa,
          paragrafoClicado === 7 && styles.paragrafoCaixaClicado
        ]}
        onPress={() => handleParagraphClick(7)}
        activeOpacity={0.9}
      >


        <Text style={styles.paragrafo}>
          Hoje, aos 41 anos, Cristiano Ronaldo continua jogando e marcando gols, 
          demonstrando que sua paixão pelo futebol permanece inabalável. Sua 
          história Inspira milhões de jovens ao redor do mundo, mostrando que 
          com dedicação, trabalho duro e determinação, qualquer pessoa pode 
          alcançar os maiores sonhos, independentemente de suas origens.
        </Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#000000',
  },


  caixaTitulo: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#ff003c',
    shadowColor: '#ff003c',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
  },


  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff003c',
    textShadowColor: 'rgba(255,255,255,0.3)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },


  paragrafoCaixa: {
    backgroundColor: '#006748',
    padding: 15,
    borderRadius: 10,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#004d35', 
    elevation: 3,
  },


  paragrafoCaixaClicado: {
    borderColor: '#ff003c',
    shadowColor: '#ff003c',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 8,
  },


  paragrafo: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'justify',
    color: '#ffffff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
});