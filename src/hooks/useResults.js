import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [ results, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const searchApi = async (defaultTerm) => {
        try {
            const response = await yelp.get('/search', {
                    params: {
                        limit: 50,
                        term: defaultTerm,
                        location: 'san jose'
                    }
                });
                setResults(response.data.businesses);
            } catch (err) {
                setErrorMessage('Something went wrong');
            }
        };

        // Call searchApi when component is first rendered.
        // BAD CODE 
        // searchApi ('pasta);

        useEffect (() => {
            searchApi('grill');
        }, []);

        return [ searchApi ,results, errorMessage ];
        
};