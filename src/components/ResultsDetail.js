import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const ResultsDetail = ({ result }) => {
    return (
            <View style={styles.viewStyle}>
                <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
                <Text style={styles.textStyle}>{result.name}</Text>
                <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
            </View>
    );
};

const styles= StyleSheet.create({
    imageStyle: {
        height: 150,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    textStyle: {
        fontWeight: 'bold'
    },
    viewStyle: {
        marginLeft: 10,
        marginBottom: 10
    }
});


export default ResultsDetail;