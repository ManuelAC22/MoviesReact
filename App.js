import React, {Component} from 'react';
import { Text, View} from 'react-native';
import Home from './src/screens/Containers/home';
import Header from './src/sections/Componentes/header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header/>
        <Text>Buscador</Text>
        <Text>Categoria</Text>
        <Text>Listas de Peliculas</Text>
        <Text>Footer</Text>
      </Home>
    );
  }
}