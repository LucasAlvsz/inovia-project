import * as S from "./styles"

const Card = ({ name, brand, mainImageUrl, value }) => {
	return (
		<S.Container>
			<img src={mainImageUrl} />
			<S.Description>
				<span>
					<S.Title>{name}</S.Title>
					<S.Info>{brand}</S.Info>
				</span>
				<S.Price>R$ {value}</S.Price>
			</S.Description>
		</S.Container>
	)
}

export default Card
