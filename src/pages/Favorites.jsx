import React from 'react'
import AppContext from '../context'
import Card from '../components/Card/Card'


export default function Favorites({ onFavorite }) {
    const state = React.useContext(AppContext)
    return (
        <div className="Content p-40" >

            {state.favorites.length
                ?
                <React.Fragment>
                    <div className="d-flex align-center mb-40 justify-between" >
                        <h1>My favorites</h1>
                    </div>
                    <div className="d-flex flex-wrap ">
                        {
                            state.favorites
                                .map((item) =>
                                    <Card
                                        favorite={true}
                                        onFavorite={onFavorite}
                                        {...item}
                                    />)
                        }
                    </div>
                </React.Fragment>
                :
                <div>
                    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                        <img className='mb-20' width={120} height={120} src='/img/empty-cart.jpg' alt='empty cart' />
                        <h2>You don't have favorite Sneakers</h2>
                    </div>
                </div>
            }

        </div>
    )
}
