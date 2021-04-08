import React,{useState,useEffect} from 'react';
import sanityClient from "../client";
import pic from '../joshua-woroniecki-3mXIZP6_6zY-unsplash.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source){
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage":image.asset->url

        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);
    if (!author) {
        return <div>Loading !!</div>
    }
    return (
        <main>
        
            <img src={pic} alt="Sky" className="absolute object-cover w-full h-full " />
            
            <div className="p-10 lg:pt-39 container mx-auto relative">
                <section className="bg-purple-500 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded small-img w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h2 className="cursive text-6xl text-purple-100 mb-4 small">Hey There I am {" "}
                        <span className="text-purple-100">{author.name}</span>
                        </h2>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="r4dlfd4p" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
