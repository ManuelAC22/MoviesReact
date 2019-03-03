import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay data" />
    ItemSeparator = () => <Separator />

    render() {
        return (
            <Layout title="Categoria">
                <FlatList
                    horizontal keyExtractor={this.keyExtractor}
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