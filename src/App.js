import React from "react";
import { Routes, Route } from 'react-router-dom'
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import AppContext from "./context";
import Orders from "./pages/Orders";






function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    try {
      async function fetchData() {
        setIsLoading(true)
        const cartResponse = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/cart')
        const favoritesResponse = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/favorites')
        const itemsResponse = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/items')

        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)

      }
      fetchData()
    } catch (err) {
      alert(err)
    }
  }, [])

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id))
    try {
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
        axios.delete(`https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/cart/${findItem.id}`)
      } else {
        setCartItems((prev) => [...prev, obj])
        const { data } = await axios.post(`https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/cart`, obj)
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          } else {
            return item
          }
        }
        )
        )
      }
    } catch (error) {
      alert(error)
    }
  }

  const onRemoveItem = async (id) => {
    try {
      axios.delete(`https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/cart/${id}`)
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (err) {
      alert(err)
    }
  }


  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(fav => Number(fav.id) === Number(obj.id))) {
        axios.delete(`https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/favorites', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert(error)
    }

  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }




  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems, cartItems, onAddToCart }}>
      <div className="wrapper clear ">
        <Drawer onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveItem} opened={cartOpened} />
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path="/" element={
            <Home cartItems={cartItems}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              items={items}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              favorites={favorites}
              isLoading={isLoading}
            />}
          />
          <Route path='/favorites' element={<Favorites onFavorite={onAddToFavorite} />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
