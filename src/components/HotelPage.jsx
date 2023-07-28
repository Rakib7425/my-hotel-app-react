import React, { useEffect, useState } from 'react'
// import { IoStar } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

const HotelPage = () => {
    const { hotel } = useParams();
    const [data, setData] = useState([]);
    const slugUrl = `https://hotels-api-4ltr.onrender.com/api/hotels/${hotel}`;

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(slugUrl);
            const result = await res.json();
            console.log(result);
            // setData([result])
            setData(result)
        }
        getData();

        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h1 className="text-white text-2xl font-semibold mt-12">Hotel {hotel}</h1>
            {/* {data && data.map((item) => {
                return (
                    <h2 className='text-purple-500 text-xl'>{item.address}</h2>
                    
                    )
                })
            } */}


            <h2 className='text-purple-500 text-xl'>{data.address}</h2>


            {/* Rating Section */}

            {/* <div className='flex items-center justify-start'>

                <span className='text-purple-500 text-xl font-semibold'><IoStar size={30} color='pink' className='inline-block ' /> {data?.rating} / 5.0</span>
            </div> */}

            <div className='flex gap-4 flex-wrap justify-between mt-6'>

                {data && data?.images?.map((item) => {
                    return (
                        <div key={item.id} className='md:max-w-[400px] w-full hover:scale-150 duration-700 '>
                            <img src={item?.img.includes('w=720') ? item.img : `https://a0.muscache.com/im/pictures/miso/Hosting-36986800/original/957dfda9-e4ab-45fd-918e-f51af0451757.jpeg?im_w=720`} alt={'No @imag%e@- Found'} className='' />
                        </div>
                    )
                })}
            </div>
            <div className='my-6'>

                <span className='text-2xl font-semibold text-white'>About The Place</span>
                <h2 className='font-semibold text-white'>{data.aboutThePlace}</h2>
            </div>
        </div>
    )
}

export default HotelPage