import React from 'react'
import { Link } from 'react-router-dom'
const TopFeatures = ({ data }) => {


    return (
        <>
            <span className='text-white text-2xl font-semibold my-12 underline'>Top Features</span>

            <div className='flex md:gap-60 mb-12 flex-col md:flex-row'>
                <div className='w-1/2 mt-3'>

                    {data && data?.features?.map((item) => {
                        return (
                            <Link key={item.id} className='text-green-400 font-semibold py-1 block hover:text-green-500' target='_blank' to={`https://duckduckgo.com/?q=${item.text}&t=newext&atb=v368-1&iax=images&ia=images`} >
                                <span className='mr-2 '>👉 </span> {item.text}

                                {/* <span><TfiHandPointRight color='white' className='inline-block mr-2' /> 👉</span> {item.text} */}

                            </Link>
                        )
                    })}
                </div>

            </div>

        </>
    )
}


export default TopFeatures;