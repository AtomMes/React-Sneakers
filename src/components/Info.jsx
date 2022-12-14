import React from 'react'
import AppContext from '../context'

export default function Info({title, image, description}) {

    const {setCartOpened} = React.useContext(AppContext)

    return (
        <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
            <img className='mb-20' width={120}  src={`/img/${image}`} alt='empty cart' />
            <h2>{title}</h2>
            <p className='opacity-6'>{description}</p>
            <button className='greenButton' onClick={() => setCartOpened(false)} >
                <img src='/img/arrow.svg' alt='arrow' />
                Go back
            </button>
        </div>
    )
}
