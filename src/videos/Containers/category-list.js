import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Empty from '../Componentes/empty';
import Separator from '../../sections/Componentes/horizontal-separator';
import Category from '../Componentes/category';
import Layout from '../Componentes/category-list-layout';

class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay data" />
    ItemSeparator = () => <Separator />
    renderItem = ({item}) => {
        return (
            <Category {...item}/>
        )
    }

    render() {
        return (
            <Layout title="Categoria">
                <FlatList
                    horizontal 
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.ItemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }

}

export default CategoryList;