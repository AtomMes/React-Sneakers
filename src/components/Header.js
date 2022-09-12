import React from 'react'
import { NavLink } from "react-router-dom";
import { useCart } from './hooks/useCart';

export default function Header({ onClickCart }) {

    const {totalPrice} = useCart()

    return (
        <header className="d-flex justify-between align-center p-40">
            <NavLink to=''>
                <div className="d-flex align-center" >
                    <img width={40} height={40} src='/img/logo.png' alt='logo' />
                    <div>
                        <h3>REACT SNEAKER</h3>
                        <p className="opacity-5">Best sneakers</p>
                    </div>
                </div>
            </NavLink>
            <ul className="d-flex" >
                <li className="mr-30 cu-p" >
                    <img width={20} height={20} src='/img/cart.png' alt='cart' onClick={onClickCart} />
                    <span>{totalPrice}$</span>
                </li>
                <li className="mr-30 cu-p" >
                    <NavLink to='/favorites'>
                        <img width={20} height={20} src='/img/heart.png' alt='heart' />
                    </NavLink>
                </li>
                <li>
                <NavLink to='/orders'>
                    <img width={20} height={20} src='/img/user.png' alt='user' />
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}
