import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';


const ResultList = ({ title, results, navigation }) => {
    
    if(!results.length) {
        return null;
    }

    return (
            <View>
                <Text style={styles.titleStyle}>{title}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={(result) => result.id }
                    renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Images', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                        );
                    }}
                />
            </View>
    );
};

const styles= StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
    viewStyle: {
        marginLeft: 10
    }
});


export default withNavigation(ResultList);