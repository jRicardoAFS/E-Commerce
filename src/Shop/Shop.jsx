import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResults = 'Showing 01 - 12 of 139 Results'
import Data from "../products.json"
import ProductCards from './ProductCards'

const Shop = () => {

    const [gridList, setGridList] = useState(true)
    const [products, setProducts] = useState(Data)
    return (
        <div>
            <PageHeader title='Our Shop Page' curPage='Shop' />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-warp justify-content-between">
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                                        <a className="grid" onClick={() => { setGridList(!gridList) }}>
                                            <i className="icofont-ghost"></i>
                                        </a>
                                        <a className="list" onClick={() => { setGridList(!gridList) }}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>

                                    </div>
                                </div>

                                <div>
                                    <ProductCards gridList={gridList}products={products}/>
                                </div>


                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            direita
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop