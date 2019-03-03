import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Home from './src/screens/Containers/home';
import Header from './src/sections/Componentes/header';
import SuggestionList from './src/videos/Containers/suggestion-list';

type Props = {};
export default class App extends Component<Props> {
  state={
    suggestionList:[],

  }
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador </Text>
        <Text>Categoria</Text>
        <SuggestionList list={this.state.suggestionList} />
        <Text>Footer</Text>
      </Home>
    );
  }
}