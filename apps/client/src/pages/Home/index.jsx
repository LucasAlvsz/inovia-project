import { toast } from "react-toastify"
import { useEffect, useState, useContext } from "react"

import { ordersApi } from "../../services"
import { AuthContext } from "../../providers/AuthProvider"

import Card from "../../components/Card"
import Loading from "../../components/Loading"
import HomeLayout from "../../layouts/HomeLayout"

import * as S from "./styles"

const Home = () => {
	const { token } = useContext(AuthContext)
	const [isLoading, setIsLoading] = useState(false)
	const [orders, setOrders] = useState([])

	useEffect(() => {
		setIsLoading(true)
		ordersApi
			.getOrders(token)
			.then(({ data }) => {
				console.log(data)
				setOrders(data[0])
			})
			.catch(err => {
				console.log(err)
				toast.error("Erro ao buscar carros, tente novamente mais tarde")
			})
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<HomeLayout>
			<S.Main>
				<S.ShowcaseContainer>
					{isLoading ? (
						<S.LoadingContainer>
							<Loading />
						</S.LoadingContainer>
					) : (
						orders?.products?.map(
							({
								id,
								name,
								pictureUrl: mainImageURL,
								price: value,
								brand,
							}) => (
								<Card
									key={id}
									name={name}
									mainImageUrl={mainImageURL}
									value={value}
									brand={brand}
								/>
							)
						)
					)}
				</S.ShowcaseContainer>
			</S.Main>
		</HomeLayout>
	)
}
export default Home
