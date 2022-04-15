export const fetchData = async (pageNumber: number = 1) => {
	const res = await fetch(`https://randomuser.me/api?page=${pageNumber}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((data) => data.json())
		.then((data) => data.results)
		.catch((err) => console.log(err));

	return res;
};

export const fetchNewUserData = async (
	currentPageNumber: number,
	currentApiData: any[],
) => {
	const currentData: any[] = currentApiData;
	const newData = await fetchData(currentPageNumber + 1).then(
		(data) => data[0],
	);
	currentData.push(newData);
	return currentData;
};
