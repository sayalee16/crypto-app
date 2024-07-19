import React, {
	useState,
	useEffect
} from 'react';


function useFetchNews(url) {
	const [news, setNews] = useState(null);
	const [isLoadingnews, setIsLoadingnews] = useState(false);
	const [nerror, setnError] = useState(null);
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '362bb1d082msh3be7d9bc709ac21p14bd97jsnd51d2bf44906',
			'x-rapidapi-host': 'crypto-news16.p.rapidapi.com'
		}
	};
	useEffect(() => {
		const fetchNews = async () => {
			setIsLoadingnews(true);
			try {
				const response = await fetch(url, options);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const result = await response.json();
				setNews(result);
			} catch (error) {
				setnError(error);
			} finally {
				setIsLoadingnews(false);
			}
		};

		fetchNews();
		return () => {
		};
	}, [url]);

	return { news, isLoadingnews, nerror };
}
export default useFetchNews;