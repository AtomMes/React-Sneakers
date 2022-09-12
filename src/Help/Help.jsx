const a = () => {
  <img width={40} height={40} src='/images/logo.png' />//karanq miangamic width u height u vrodzi tenc css styler tanq -_-,  src skzbum inqy misht publikica sksum
}







const b = () => {//karanq propserov funkcia uxarkenq
  let Show = () => {
    console.log('message')
  }//funkcian setxcecinq


  <C Show={Show} />//funkcian uxarkecinq



  const C = (props) => {
    <button onClick={props.Show} />//asumenq onClick-i jamanak kanchi propseric ekac Show funkcian
  }
}

fetch('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/items').then((res) => {//axios-i nman zapros enq anum, 
  return res.json()//heo et responsin json() funkcian talis enq vor inqy json ynduni toli karda, (teche esiminchera gali liqy)
}).then((json) => {//heto et jsony vercnum enq
  setItems(json)//veragrum useState-ov stexcac itemnerin(setItem enq anum)
})







//!! Poisk

items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))//asumenq itemsnery filtri ara , bercru itemi name-n u vory searchValue include chi anum filtr ara(hani),,, ete toLowerCase-n chgrenq u poisk tanq A bayc menq chunenanq A unenanq a chi gtni, dra hamar sax poqratar enq sarqum, map-i vra vabshe chi azfum
  .map//u ste sovorakan maping











//! async await useEffectum, erb vor mi komponenty mekic shuta render arvum bayc mez hakarakna petq

React.useEffect(() => {
  axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/items').then(res => {
    setItems(res.data)
  })
  axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/cart').then(res => {
    setCartItems(res.data)
  })
  axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/favorites').then(res => {
    setFavorites(res.data)
  })
}, [])//senc er u menq cheinq karum karavarenq vory voric ush/shut render arvi, 

React.useEffect(() => {
  async function fetchData() {
    const cartResponse = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/cart')//ste arden aranc res yndunelu u tenc baneri kody krchatac zapros enq anum
    const favoritesResponse = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/favorites')
    const itemsResponse = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/items')
    //verevy const-eri hertakanutyuny karevor chi, karevory heto cunkcianery inch hertakanutyunov enq kanchelu


    setCartItems(cartResponse.data)//stecel hertakanutyunov kanchum enq, skzbum es
    setFavorites(favoritesResponse.data)//heto es
    setItems(itemsResponse.data)//hetoel es
  }
  fetchData()//hetoel er yndhanur funkcian kanchum enq

    //* kam 
    (async () => {
      const cartResponse = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/cart')
      const favoritesResponse = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/favorites')
      const itemsResponse = await axios.get('https://62ee76fbc1ef25f3da894cc6.mockapi.io/sneakers/items')

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    })()//inqn iran kanchox funkcia
}







  //! Reac skeleton
  //skzbum qashum enq bibliatekan,, npm install react-content-loader,
  //heto https://skeletonreact.com/ saytum sarqum enq loadery,

  //import ContentLoader from "react-content-loader" //*import enq anum u et sautic ekac jsx/html - y dnum ejum

  const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
)



//
const x = [...Array(8)]//8 hat array a stexcum undefined arjeqov

})


//! useContext
//nra hamara vor ete nerqevum danninera petq verevic izur liqy propserov chpoxancenq ayl 1 fayli mej sarqen danninery u sax ytexan qashen inch uzen

const AppContext = React.createContext({})//stexcum enq context (state), appcontexty prosty popoxakana, karar liner helloworld orinak, stexcvelua eki ammmmenaverevum(importneric het eli)
//export enq anum vor karenanq urish tex ogtagorcenq (chem gre ashibkaya tali)


const cx = () => {
  const items = true
  const pages = true
  const numbers = true

  return (//en componentnery voronq vor uzum enq imanan et state-i masin petqa yndgrkven es tegi mej
    <AppContext.Provider value={{ items, numbers, pages }}>{/*items, u tenc banery prosto ejum sarqac funkcianer kam popoxakanner en(kame ejum sarqac che propserov tekuz ekac)  */}
      <App />
    </AppContext.Provider>
  )
}//tvecinq apin itemnery..

//yani app faylna
import { AppContext } from './AppContext'//import enq anum(champen havay em grel normal import anel)
const App = () => {
  const popoxakan = React.useContext(AppContext)
  popoxakan.item//yndexan tvac itemnerna orinaki hamar
}



//?

added = { items.some(obj => Number(obj.id) === Number(item.id)) }//find-y veradardznuma kam undefined kam true, is some-n veradzardznuma kam true kam false,







//?

let price = cartItems.reduce((sum, obj) => obj.price + sum, 0)//cartItemsov fruma, let sum a arel, u et cart itemsi hetov saxi obj.price-n gumaruma sum-n, skzbum sum-i arjeqy 0a(vor grel em zro)


//! mi qani masivner irara miacnum



data.map((obj) => obj.items).flat()//data-n uni masivner voronq unen masivner, asumenq obj vekal meji itemsnerov, 1 masivy koruma kpnum, hetoel flatov a kpcnum
data.reduce((prev, obj) => [...prev, ...obj.items],[])//nuynna anum, 




