/*
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-key': '362bb1d082msh3be7d9bc709ac21p14bd97jsnd51d2bf44906',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({query: () => createRequest('/coins')})
    })
});

export const {
    useGetCryptoQuery,
} = cryptoApi;

//
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '362bb1d082msh3be7d9bc709ac21p14bd97jsnd51d2bf44906',
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
	}
};
 function useFetch (url) {
   
   
  const [data, setData] = useState(null);
  

   useEffect(() => {
    
    fetch(url, options)
      .then((res) => res.json())
      .then(({data}) => setData(data));
  }, [url]);
  
  return [data];
};

export default useFetch;
*/
/*
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchInfoActions } from "../store/fetchInfoSlice";
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '362bb1d082msh3be7d9bc709ac21p14bd97jsnd51d2bf44906',
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
	}
};
 function useFetch (url) {
   const fetchInfo =  useSelector(store => store.fetchInfo);
   console.log(fetchInfo);
   
   
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

   useEffect(() => {
    if(fetchInfo.fetchDone) return;
    const controller = new AbortController();

    dispatch(fetchInfoActions.markFetchingStarted);
    fetch(url, options)
      .then((res) => res.json())
      .then(({data}) => {
        dispatch(fetchInfoActions.markFetchDone);
        dispatch(fetchInfoActions.markFetchingFinished);
        setData(data);
    });

    return() => {
        controller.abort();
      }
  }, [url]);
  
  return [data];
};

export default useFetch;
*/
import React, {
	useState,
	useEffect
} from 'react';


function useFetch(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const options = {
		method: 'GET',
		headers: {
		  'x-rapidapi-key': '362bb1d082msh3be7d9bc709ac21p14bd97jsnd51d2bf44906',
		  'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
		}
	  };
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url, options);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const result = await response.json();
				setData(result);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
		return () => {
		};
	}, [url]);

	return { data, isLoading, error };
}
export default useFetch;