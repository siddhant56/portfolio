import React,{useEffect,useState} from 'react';
import sanityClient from '../client';

export default function Project() {
    const [projectData,setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
        .then(
            (data) => {
                setProjectData(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome To My Projects Page</h2>
                <section className="grid gap-8 lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
                {
                    projectData && projectData.map((project,index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16 ui-container">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-lg">
                        <h4>
                        <strong className="font-bold">Finished on</strong>:{" "}
                        {new Date(project.date).toLocaleDateString()}
                        </h4>
                        <h4>
                        <strong className="font-bold">Company</strong>:{" "}
                        {project.place}
                        </h4>
                        <h4>
                            <strong className="font-bold">Type</strong>:{" "}
                            {project.projectType}
                        </h4>
                        <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                        <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-red-500 font-bold hover:underline hover:text-red-400"
                        >
                        View The Project{" "}
                        <span role="img" aria-label="right pointer">→</span>
                        </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}
