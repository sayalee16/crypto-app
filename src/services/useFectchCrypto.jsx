import React, {
	useState,
	useEffect
} from 'react';


function useFetchCrypto(url) {
	const [crypto, setCrypto] = useState(null);
	const [isLoadingcoin, setIsLoadingcoin] = useState(false);
	const [cerror, setcError] = useState(null);
	const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '362bb1d082msh3be7d9bc709ac21p14bd97jsnd51d2bf44906',
            'x-rapidapi-host': 'cryptocurrency-market.p.rapidapi.com'
        }
    };
	useEffect(() => {
		const fetchCoins = async () => {
			setIsLoadingcoin(true);
			try {
				const response = await fetch(url, options);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const result = await response.json();
				setCrypto(result);
			} catch (error) {
				setcError(error);
			} finally {
				setIsLoadingcoin(false);
			}
		};

		fetchCoins();
		return () => {
		};
	}, [url]);

	return { crypto, isLoadingcoin, cerror };
}
export default useFetchCrypto;