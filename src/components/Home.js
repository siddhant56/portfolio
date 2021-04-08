import React from 'react'
import image from '../joshua-woroniecki-3mXIZP6_6zY-unsplash.jpg';
export default function Home() {
    return (
       <main>
        <img
        src={image}
        alt="Night Sky"
        className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-60 md:pt-60 sm:pt-60 px-8 custom">
            <h1 className="text-3xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Aloha I'm Siddhant.</h1>
        </section>
       </main>
    )
}
