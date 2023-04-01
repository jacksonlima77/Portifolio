import React, {useState} from 'react';
import {View, Text, StyleSheet, AppRegistry, FlatList} from 'react-native';
import Header from './src/Header';
import List from './src/List';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Jackson Lima',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 10,
    },

    {
      id: '2',
      nome: 'Matheus',
      descricao: 'isso sim é ser raiz!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },

    {
      id: '3',
      nome: 'Augusto',
      descricao: 'Bora trabalhar!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: true,
      likers: 5,
    },

    {
      id: '4',
      nome: 'Gustavo Henrique',
      descricao: 'Isso sim é TI',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: true,
      likers: 35,
    },

  ])

  return (
    <View style={StyleSheet.container}>
    <Header/>

    <FlatList
    showsVerticalScrollIndicator={false}
    keyExtractor={ (item) => item.id }
    data={feed}
    renderItem={ ({item}) => <List data={item} /> }
    />


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})
