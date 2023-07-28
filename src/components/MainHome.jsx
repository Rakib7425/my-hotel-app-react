import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

const MainHome = () => {
    const [data, setData] = useState([]);

    const url = `https://hotels-api-4ltr.onrender.com/api/hotels`

    // const slugUrl = `https://hotels-api-4ltr.onrender.com/api/hotels/${7Bslug}`

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(url);
            const result = await res.json();
            console.log(result);
            setData(result)
        }
        getData();

        // eslint-disable-next-line
    }, [])

    return (
        <>
            <h1 className='text-3xl font-semibold text-white my-4'>Select Your Hotel & Book your stay 😍</h1>
            <div className='flex flex-wrap gap-4 justify-between'>
                {data &&
                    data.map((item) => {
                        return (
                            <Link key={item?.id} className='bg-purple-600 rounded-md hover:scale-105 duration-200' to={`/hotels/${item?.slug}`}>

                                <Card hotelName={item?.name} img={item?.thumbnail ? item?.thumbnail : `https://a0.muscache.com/im/pictures/miso/Hosting-729597790487190657/original/d96f67a7-39f3-46ab-a341-e3b57b2b1c2f.jpeg?im_w=720`} slug={item?.slug} />
                            </Link>
                        )
                    })}
            </div>
        </>
    )
}

export default MainHome;