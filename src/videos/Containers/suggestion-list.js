import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';

import Layout from '../Componentes/suggestion-list-layout';
import Empty from '../Componentes/empty';
import Separator from '../Componentes/vertical-separator';
import Suggestion from '../Componentes/suggestion';

class SuggestionList extends Component {
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias para mi"/>
    itemSeparator = () => <Separator />
    renderItem = ({ item }) => {
        return (
            <Suggestion {...item} />
        )
    }

    render() {
        return (
            <Layout title="Recomendado para ti">
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    itemSeparatorComponent ={this.itemSeparator}
                    ListEmptyComponent={this.renderEmpty}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }

}

export default SuggestionList;