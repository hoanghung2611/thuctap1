import React from 'react'
function SubMenu({data}) {
    return(
        <li>
            <button className='float-left w-[300px] pb-4 click'>
                <span className='absolute left-40  w-4 h-4 border-2 border-solid border-gray-800 rounded bg-white after:mr-4 onclick'></span>
                <p className='leading-[1] ml-9 float-left'>{data}</p>
            </button>
         </li>
    )
}
export default SubMenu