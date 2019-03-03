import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import Home from './src/screens/Containers/home';
import Header from './src/sections/Componentes/header';
import SuggestionList from './src/videos/Containers/suggestion-list';
import CategoryList from './src/videos/Containers/category-list';
import API from './util/api'

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList:[],
  }

  async componentDidMount() {
    const movies = await API.getSuggestions(20);
    const category = await API.getListMovies();
    this.setState({
      suggestionList: movies,
      categoryList:category,
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <CategoryList list={this.state.categoryList}/>
        
        <SuggestionList list={this.state.suggestionList} />
        <Text>Footer</Text>
      </Home>
    );
  }
}