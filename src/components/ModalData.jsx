import React from 'react'
// Initialization for ES Users


const ModalData = ({ setShowModal }) => {
    return (
        <>
            <section className='flex flex-col items-center justify-center top-[50%] left-0 w-screen duration-1000 min-h-full absolute transition-transform '>

                <form onSubmit={(e) => { e.preventDefault() }} className='flex flex-col bg-pink-300 p-10 rounded-2xl'>
                    <div className='relative mb-3'>

                    </div>
                    <div className="buttons flex items-center justify-between gap-2">

                        <button onClick={() => { setShowModal(false) }} className='bg-red-600 px-3 py-2 rounded-md hover:bg-red-700 mt-10 text-xl text-white'>Close</button>


                        <button className='bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-700 mt-10 text-xl text-white'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default ModalData;