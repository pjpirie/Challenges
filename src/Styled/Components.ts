import styled from "@emotion/styled";

export const AppContainer = styled.main`
	padding: 2rem;
	width: 100vw;
	height: 100vh;
`;

export const AppHeader = styled.header`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Paragraph = styled.p`
	color: red;
`;

export const Button = styled.button`
	padding: 0.5rem 1rem;
	color: #1f1f1f;
	background-color: #f1f1f1;
	border: 1px solid #e1e1e1;
	box-shadow: 0.1rem 0.3rem 1rem rgba(0, 0, 0, 0.15);
	border-radius: 0.5rem;
	margin: 1rem 0;
	&:hover {
		background-color: #e1e1e1;
		cursor: pointer;
	}
`;

export const UserAvatar = styled.img`
	// width: 100%;
	// height: 100%;
`;
