import React, { useState } from 'react'
import productData from '../products.json'
import { Link } from 'react-router-dom';

const title = (
    <h2>Search Your One From <span>Thousand</span> of Products</h2>
)
const description = "Temos a maior coleção de produtos"
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1,5 Million de Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    }, {
        iconName: "icofont-globe",
        texto: "Buy Anything Online",
    },
];
const Banner = () => {
    const [searchInput, setSearchInput] = useState("")
    const [filterProduct, setFilterProduct] = useState(productData)

    const handleSearch = e => {
        const searchTerm = e.target.value
        setSearchInput(searchTerm)

        const filtered = productData.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setFilterProduct(filtered)
    }
    return (
        <div className='banner-section style-4'>
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form action="">
                        <input
                            type="text"
                            name='search'
                            id="search"
                            placeholder='Search your product'
                            value={searchInput}
                            onChange={handleSearch}
                        />
                        <button type='submit'>
                            <i className='icofont-search'></i>
                        </button>
                    </form>
                    <p>{description}</p>
                    <ul className="lab-ul">
                        {searchInput && filterProduct.map((product, i) => <li key={i}>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </li>
                        )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner