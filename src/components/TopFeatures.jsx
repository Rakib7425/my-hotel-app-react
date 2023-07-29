import React from 'react'
import { Link } from 'react-router-dom'
const TopFeatures = ({ data }) => {
    return (
        <>
            <span className='text-white text-2xl font-semibold mt-12 underline'>Top Features</span>

            <div className='flex md:gap-60 mb-12 flex-col md:flex-row'>
                <div className='w-1/2'>

                    {data && data?.features?.map((item) => {
                        return (
                            <Link key={item.id} className='text-green-500 font-semibold py-1 block' target='_blank' to={`https://duckduckgo.com/?q=${item.text}&t=newext&atb=v368-1&iax=images&ia=images`} >
                                <span className='mr-2 '> 👉</span> {item.text}

                                {/* <span><TfiHandPointRight color='white' className='inline-block mr-2' /> 👉</span> {item.text} */}

                            </Link>
                        )
                    })}
                </div>
                <div className=' flex w-full items-end justify-start right-0'>
                    <button className='bg-green-600 py-2 px-6 rounded-lg hover:bg-transparent text-white border-r-orange-300 border hover:text-green-400 duration-200 text-lg'>Book now</button>
                </div>
            </div>

        </>
    )
}

export default TopFeatures