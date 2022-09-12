import React from 'react'
import axios from 'axios'

import Info from '../Info'
import { useCart } from '../hooks/useCart'

import s from './Drawer.module.scss'

export default function Drawer({ onClose, items = [], onRemove ,opened }) {

    const { cartItems, setCartItems, totalPrice} = useCart()
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderComplete, setIsOrderComplete] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post(`https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/orders`, { items: cartItems })
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([])
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/cart/` + item.id)
                await delay(1000);
            }
        } catch (err) {
            alert(err)
        }
        setIsLoading(false)
    }


    return (
        <div className={`${s.overlay} ${opened && s.overlayVisible }`} >
            <div className={s.drawer} >
                <h2 className="mb-30 d-flex justify-between" >Basket
                    <img className="removeBtn cu-p" src="/img/remove.svg" alt="X" onClick={onClose} />
                </h2>

                {items.length ?
                    (<React.Fragment>
                        <div className="items">
                            {
                                items.map((obj) => (
                                    <div key={obj.id} className="cartItem d-flex align-center " >
                                        <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imageUrl})` }} ></div>
                                        <div className="mr-20 " >
                                            <p className="mb-5" >{obj.name}</p>
                                            <b>{obj.price}$</b>
                                        </div>
                                        <img className="removeBtn" src="/img/remove.svg" alt="X" onClick={() => onRemove(obj.id)} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="cartTotalBlock" >
                            <ul >
                                <li>
                                    <span>Summary:</span>
                                    <div></div>
                                    <b>{totalPrice}$</b>
                                </li>
                                <li>
                                    <span>Tax 5%:</span>
                                    <div></div>
                                    <b>{totalPrice / 100 * 5}$</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton" >Checkout  <img src='/img/arrow.svg' alt='arrow' /> </button>
                        </div>
                    </React.Fragment>
                    )
                    :
                    (
                        <Info
                            title={isOrderComplete ? 'your order has been placed' : 'Cart is Empty'}
                            description={isOrderComplete ? `your order #${orderId} will soon be delivered by courier` : ' Add Sneaker to Buy'}
                            image={isOrderComplete ? 'complete-order.jpg' : 'empty-cart.jpg'}
                        />
                    )
                }
            </div>
        </div>
    )
}
