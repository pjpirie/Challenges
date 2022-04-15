import { useEffect, useState } from "react";
import "./global.css";
import {
	AppContainer,
	AppHeader,
	Button,
	UserAvatar,
} from "./Styled/Components";
import { fetchData, fetchNewUserData } from "./API/fetchUserData";

interface UserName {
	first: string;
	last: string;
	title: string;
}

interface UserPicture {
	thumbnail: string;
	medium: string;
	large: string;
}
interface UserData {
	name: UserName;
	picture: UserPicture;
}

function App() {
	const [count, setCount] = useState(0);
	const [apiData, setApiData] = useState<any>([]);
	const [fetchPageNumber, setFetchPageNumber] = useState(1);

	const getFullUsername = (userData: UserData) => {
		const {
			name: { first, last },
		} = userData;
		return `${first} ${last}`;
	};

	useEffect(() => {
		fetchData().then((data) => setApiData(data));
	}, []);

	return (
		<AppContainer>
			<AppHeader>
				<p>{count}</p>
				<Button type="button" onClick={() => setCount(count + 1)}>
					Increment
				</Button>
				{apiData.map((userData: UserData, index: number) => {
					return (
						<div key={`Avatar_${index}`} className="userData__avatar">
							<UserAvatar src={userData.picture.large} />
							<p>{getFullUsername(userData)}</p>
						</div>
					);
				})}
				<Button
					type="button"
					onClick={async () => {
						setApiData(await fetchNewUserData(fetchPageNumber, apiData));
						setFetchPageNumber(fetchPageNumber + 1);
					}}
				>
					Load more...
				</Button>
			</AppHeader>
		</AppContainer>
	);
}

export default App;
