import React from 'react'
import Card from '../components/Card/Card'
import axios from 'axios'
import AppContext from '../context'


export default function Orders({ onFavorite }) {
    const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
    const [isLoading, setIsLoading] = React.useState(true)

    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        try {
            (async () => {
                const { data } = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            })()
        } catch (err) {
            alert(err)
        }
    }, [])

    return (
        <div className="Content p-40" >
            <div className="d-flex align-center mb-40 justify-between" >
                <h1>My orders</h1>
            </div>
            <div className="d-flex flex-wrap ">
                {
                    (isLoading ? [...Array(8)] : orders).map((item) =>
                        <Card
                            loading={isLoading}
                            onFavorite={onAddToFavorite}
                            {...item} />)
                }
            </div>
        </div>
    )
}
