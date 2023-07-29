import React from 'react'

const AboutThePlace = ({ data }) => {
    return (
        <>
            <span className='text-2xl font-semibold text-white underline'>About The Place</span>
            <h2 className='font-semibold text-white mt-2'>{data.aboutThePlace}</h2>
        </>
    )
}

export default AboutThePlace