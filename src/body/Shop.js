import React, { useState } from 'react'
import ProductMenu from '../components/ProductMenu';
import { menuProduct } from '../data/Menu';

const Shop = ({category}) => {
    const [data, setdata] = useState(menuProduct);
  return (
    <div className='grid grid-cols-3 gap-7'>
        {
            data && category ==="all" && data.map((item,index)=>{
                return <ProductMenu data={item}/>
            })
        }
        {
            data && data.filter(x => x.category === category).map((item,index)=>{
                return <ProductMenu data={item}/>
            })
        }
    </div>
  )
}

export default Shop