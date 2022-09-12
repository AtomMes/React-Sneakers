import React from 'react'
import Card from "../components/Card/Card";
import AppContext from '../context';


export default function Home({searchValue, onChangeSearchInput, items, onAddToFavorite, onAddToCart, isLoading }) {




    const renderItems = () => {
        const filterItems = items && items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        return (
            (isLoading ? [...Array(8)] : filterItems)
                .map((item) =>
                    <Card
                        loading={isLoading}
                        onFavorite={onAddToFavorite}
                        onPlus={(obj) => onAddToCart(obj)}
                        {...item}
                    />)
        )
    }


    return (
        <div className="Content p-40" >
            <div className="d-flex align-center mb-40 justify-between" >
                <h1>{searchValue ? `Searching ${searchValue}` : 'All sneakers'}</h1>
                <div className="search-block d-flex" >
                    <img src='/img/search.svg' alt='Search' />
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
                </div>
            </div>
            <div className="d-flex flex-wrap ">
                {renderItems()}
            </div>
        </div>
    )
}
