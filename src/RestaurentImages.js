import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from './api/yelp';


const RestaurentImages = ({ navigation }) => {
    const [ results, setResults ] = useState(null);
    const id = navigation.getParam('id');

const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
};

useEffect(() => {
    getResult (id);
}, []);

if(!results) {
    return null;
}

    return (
            <View>
                <Text>{results.name}</Text>
                <FlatList
                    data={results.photos}
                    keyExtractor={(photo) => photo }
                    renderItem={({ item }) => {
                        return <Image style={styles.imageStyle} source={{ uri: item }} />
                    }}
                />
            </View>
    );
};

const styles= StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        marginBottom: 5
    }
});


export default RestaurentImages;
