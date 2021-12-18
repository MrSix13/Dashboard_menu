import React from 'react'
import './product.css'
import {Link} from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import {productData} from '../../dummyData';

function Product() {
    return (
        <div className='product'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to="/newproduct">
                    <button>Create</button>
                </Link>
            </div>
            <div className='productTop'>
               <div className='productTopLeft'>
                    <Chart dataKey="Sales" title="Sales Performance" data={productData}/>
               </div>
               <div className='productTopRight'>
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Product
