import React from 'react'
import ContentLoader from 'react-content-loader'
import AppContext from '../../context'


import s from './Card.module.scss'

const Card = ({  id, name, price, imageUrl, onPlus, onFavorite, favorite = false, loading = false }) => {

    const { isItemAdded } = React.useContext(AppContext)
    const [isFavorite, setIsFavorite] = React.useState(favorite)
    const obj = { id, parentId: id, name, price, imageUrl }


    const onClickPlus = () => {
        onPlus(obj)
    }


    const onClickFavorite = () => {
        onFavorite(obj)
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={s.card} >
            {loading
                ?
                <ContentLoader
                    speed={2}
                    width={150}
                    height={265}
                    viewBox="0 0 150 265"
                    backgroundColor='#f3f3f3'
                    foregroundColor='#ecebeb'
                >
                    <rect x='1' y='0' rx='10' ry='10' width='150' height='155' />
                    <rect x='0' y='167' rx='5' ry='5' width='150' height='15' />
                    <rect x='0' y='187' rx='5' ry='5' width='100' height='15' />
                    <rect x='1' y='234' rx='5' ry='5' width='80' height='25' />
                    <rect x='118' y='230' rx='10' ry='10' width='30' height='30' />
                </ContentLoader>
                :
                <React.Fragment>
                    <div className={s.favorite} onClick={onClickFavorite} >
                        <img src={isFavorite ? '/img/likedHeart.svg' : '/img/unLikedHeart.svg'} alt="Liked" />
                    </div>
                    <img width='100%' height={130} alt='Sneaker' src={imageUrl} />
                    <h5>{name}</h5>
                    <div className="d-flex justify-between" >
                        <div className="d-flex flex-column  ">
                            <span>Price</span>
                            <b>{price}$</b>
                        </div>
                        {
                            onPlus &&
                            <img className={s.plus} onClick={onClickPlus} width={32} height={32} src={isItemAdded(id) ? '/img/checked.svg' : '/img/plus.svg'} alt='Add' />
                        }
                    </div>
                </React.Fragment>
            }

        </div>
    )

}

export default Card