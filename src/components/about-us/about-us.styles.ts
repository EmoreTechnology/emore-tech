import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	height: 800px;
	width: 100%;

	> .content {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;