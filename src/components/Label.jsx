
import React from 'react'
function Label({data})
{
    return(
        <li className='w-auto inline-block pr-6 '>
        <button className=' inline-block px-4 py-3  text-sm font-medium  rounded-full bg-gray-200  mt-4 hover:text-white hover:bg-[#f58634] hover:transition-all hover:duration-300 hover:ease-in-out'>{data}</button>
        </li>
    )
}

export default  Label