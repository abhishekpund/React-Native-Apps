import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
            <View style={styles.backgroundStyle}>
                <Feather style={styles.iconStyle} name='search'/>
                <TextInput
                    autoCapitalize ='none'
                    autoCorrect={false} 
                    style={styles.inputStyle}
                    placeholder = 'Search Bar'
                    value={term}
                    onChangeText={onTermChange}
                    onSubmitEditing={onTermSubmit}
                />
            </View>
    );
};

const styles= StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection:'row',
        marginTop: 5,
        marginBottom: 10 
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: { 
        alignSelf: 'center', 
        paddingHorizontal: 5,
        fontSize: 30 
    }
});


export default SearchBar;