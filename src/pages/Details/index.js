import React, { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import { setAddToCart } from '../../redux/Cart/actions'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useParams } from "react-router"
import ShopName from "../../components/ShopName";
import SearchBox from "../../components/SearchBox";
import TopBarMenu from "../../components/TopBarMenu";
import BackButton from "../../components/BackButton"
import ShareButton from "../../components/ShareButton"
import SearchButton from "../../components/SearchButton"
import { GET, rootPath } from "../../services"
import { checkToken } from "../../services/token"

const Product = () => {

    const initialItem = {
        product_id: 1,
        qty: 1,
        size: 'S',
        color: 'White',
    }

    const [detailsProduct, setDetailsProduct] = useState({})
    const [photosProduct, setPhotosProduct] = useState([])

    const [slide, setSlide] = useState(0)
    const [item, setItem] = useState(initialItem)
    const handleCart = (selector, value) => setItem({...item, [selector]: value})

    let dispatch = useDispatch()
    const { id } = useParams()

    const getProduct = async () => {

        let token  = await checkToken()
        let product = await GET(`/products/id/${id}`, token.localToken, "").then((val) => {
            return val.data
        })
        
        setDetailsProduct(product)
        setPhotosProduct(product.photos)

        return product
        
    }

    useEffect(() => {

        getProduct()
        
    },[])


    return (
        <React.Fragment>
            {/* Navbar */}
            <nav className="sticky z-10 lg:z-0 lg:static top-0 bg-black w-screen">
                <div className="container mx-auto grid grid-cols-7 lg:grid-cols-5 gap-1 py-6">
                    <BackButton />
                    <ShopName className="grid col-start-3 col-end-6 lg:col-start-1 lg:col-end-2 lg:content-center text-xl text-white uppercase " />
                    <ShareButton />
                    <SearchButton />
                    <SearchBox />
                    <TopBarMenu />
                </div>
            </nav>
            {/* end Navbar */}
            <div className="container mx-auto mt-3 lg:my-8">

                {/* Product */}
                <div className="grid gap-y-5 lg:grid-cols-2 lg:gap-14 lg:items-center">

                    
                    {/* Product Image */}
                    <div className="grid gap-1 justify-self-center lg:grid-cols-4">
                        <div className="grid grid-cols-3 lg:gap-1 lg:grid-cols-1">
                            {
                                photosProduct.map((val, index) => {
                                    return (

                                        <div onClick={() => setSlide(index)} className="h-110 w-110 lg:h-150 lg:w-150  overflow-hidden">
                                            <img alt={`${val.photo}`} src={`${rootPath}/product-galleries/image/${val.photo}`}/>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div className="grid h-330 w-330 lg:h-450 lg:w-450 row-start-1 place-items-center lg:col-start-2">
                            <Carousel selectedItem={slide} showStatus={false} showThumbs={false} showArrows={false} showIndicators={false} axis="vertical">
                                {
                                    photosProduct.map((val) => {
                                        return (

                                            <div className="h-330 w-330 lg:h-450 lg:w-450 overflow-hidden">
                                                <img alt={`${val.photo}`} src={`${rootPath}/product-galleries/image/${val.photo}`} />
                                            </div>

                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>

                    {/* Order Button */}
                    <div className="grid gap-2 lg:grid-rows-1 mx-10 lg:mx-0">
                        <h3 className="text-gray-700 uppercase text-xl lg:text-6xl">{detailsProduct.name}</h3>
                        <div className="flex items-end gap-x-2">
                            <span className="text-gray-700 text-sm lg:text-lg">Rp. {detailsProduct.price},-</span>
                            <span className="text-gray-500 text-xs line-through">Rp. {detailsProduct.price + (detailsProduct.price*(20/100))},-</span>
                        </div>
                        <div>
                            <label className="text-gray-700 text-sm lg:text-lg">Jumlah:</label>
                            <div className="flex rouded">
                                <div className="flex  gap-x-2 justify-items-center ">
                                    <button onClick={() => setItem(item.qty < 2 ? {...item, qty: 1} : {...item, qty: item.qty - 1})} className="btn-decrement text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                    </button>
                                    <span className="text-gray-700 text-xl">{item.qty}</span>
                                    <button onClick={() => setItem({...item, qty: item.qty + 1})} className="btn-increment text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 text-sm lg:text-lg">Size:</label>
                            <select className="w-24 p-2 rounded focus:outline-none shadow-md" onChange={(e) => handleCart('size', e.target.value)}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 text-sm lg:text-lg" htmlFor="count">Warna:</label>
                            <div className="flex gap-x-1 justify-items-center">
                                <button onClick={(e) => handleCart('color', e.target.value)} value="Navy" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-blue-900" />
                                <button onClick={(e) => handleCart('color', e.target.value)} value="White" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-white" />
                                <button onClick={(e) => handleCart('color', e.target.value)} value="Black" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-black" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:w-56 gap-y-2 mt-3 lg:mt-10">
                            <div className="grid grid-cols-5 justify-items-center gap-x-1">
                                <button className="col-start-1 col-end-5 w-full rounded shadow-md bg-black text-white text-xs focus:outline-none">Tambah Ke Wishlist</button>
                                <button className="flex justify-center w-full rounded shadow text-gray-600 border hover:bg-gray-200 focus:outline-none">
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div>
                                <button onClick={() => dispatch(setAddToCart(item))} className="w-full py-3 rounded shadow-md bg-black text-white focus:outline-none">Beli Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Details Product */}
            <div className="container my-8">
                <div className="w-screen" style={{borderBottom: '1px solid #eaeaea'}}>
                    <div className="flex ml-4 cursor-pointer space-x-3">
                        <div className="container mx-auto flex">
                            <div className="ml-8">
                                <button className="p-2 focus:outline-none focus:bg-gray-400">Deskripsi</button>
                            </div>
                            {/* <div className="ml-8">
                                <button className="p-2 focus:outline-none focus:bg-gray-400">Ketentuan</button>
                            </div>
                            <div className="ml-8">
                                <button className="p-2 focus:outline-none focus:bg-gray-400">ulasan</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h3 className="m-3 lg:m-6">{detailsProduct.description}</h3>
            </div>

        </React.Fragment>
    )

}

export default Product