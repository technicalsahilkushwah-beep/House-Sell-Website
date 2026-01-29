import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import HorizontalLine from './HorizontalLine'

const Home2 = () => {

    const users = [
        {
            image: "https://www.mphousing.in/Upload/14503428092025145034Advertise_page-0001%20-%20Copy.jpg",
            title: "खजूरी हाउसिंग योजना 77 एच आई जी डुप्लेक्स ई टाइप हाउस"
        },

        {
            image: "https://www.mphousing.in/Upload/14245919082023142459WhatsApp%20Image%202023-07-17%20at%2020.04.27.jpeg",
            title: "Lakush Hight Building"
        },

        {
            image: "https://www.mphousing.in/Upload/14304619082023143046cam04.jpg",
            title: "Suramya Parishar Building"
        },

        {
            image: "https://www.mphousing.in/Upload/12535525082023125355Photo.jpg",
            title: "Bansagar Colony Beohari Dishit"
        },

        {
            image: "https://www.mphousing.in/Upload/16153324082023161533GauravNagarPhoto.jpg",
            title: "Gurav Nagar Colony"
        }
    ]

    return (
        <main className='flex flex-col justify-center items-center gap-7 py-20'>

            <HorizontalLine name='Bookings Open' />

            <p className='text-sm text-gray-600 sm:text-base md:text-lg lg:font-medium'>DISRICTWISE LISTINGS</p>

            <div className='flex gap-1'>
                <a className='city-btn'>Bhopal</a>
                <a className='city-btn'>Delhi</a>
                <a className='city-btn'>Indore</a>
                <a className='city-btn'>Noida</a>
                <a className='city-btn'>Shivpuri</a>
                <a className='city-btn'>Jammu</a>
            </div>

            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-3 lg:gap-11'>
                {users.map((users) => {
                    return <Card image={users.image} title={users.title} />
                })}
            </div>

            <HorizontalLine name={"WhatsNew"} />

            {/* Cards Section */}

            <section className="w-full flex justify-center px-4 sm:px-6 lg:px-20 py-8 bg-gray-50">
                <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <Card2 />
                    <Card2 />
                    <Card2 />
                </div>
            </section>
            
        </main>
    )
}

export default Home2