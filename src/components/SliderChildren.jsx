import React from 'react'
function SliderChildren({data}) {
    return(
     
    <div className=' h-[750px] bg-cover w-full mb-12 flex' style={{backgroundImage: `url(${data.image})`}}>
    <div className='grid grid-cols-2 mx-20 py-72 h-full static' >
        <div className='col-span-1'></div>
        <div className='col-span-1 text-white'>
            <h3 className=' before:h-[2.5px] before:bg-green-500 responsive-padding before:absolute before:block before:mt-[19px] before:ml-[17px] xl:text-2xl text-xl xl:leading-[1.6] leading-[2]'>{data.title}</h3>
            <h1 className='text-left mb-8 xl:text-6xl text-[40px]'>{data.text}</h1>
            <div className='w-60 text-lg h-16 bg-[#669933] rounded hover:text-[#000]'>
                <a className='my-auto leading-[3.3]' href='https://vinmec.com/vi/tin-tuc/thong-tin-suc-khoe/dinh-duong/ca-chua-co-tac-dung-gi-hat-ca-chua-co-tot-khong/'>{data.submit}</a>
            </div>
        </div>
    </div>
    </div>
    )
}
export default SliderChildren