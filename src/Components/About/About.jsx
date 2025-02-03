import React from 'react';
import Profile_icon from '../../assets/profile1.jpg';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
    return (
        <div
            id="About"
            className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 md:mb-4 md:mt-28"
        >
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About me</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row justify-center items-center md:items-center">
                    <img
                        className="rounded-lg mt-5 md:h-80"
                        src={Profile_icon}
                        alt="profile icon"
                    />
                    <ul>
                        <div className="flex gap-3 py-4 md:ml-20 mt-8 md:mt-0">
                            <IoArrowForward size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Full-Stack Developer
                                </h1>
                                <p
                                    className="text-sm md:text-md leading-tight mt-1"
                                    style={{ textAlign: 'justify' }} // Inline style for justification
                                >
                                    I'm Reshmi Harikumar Lathakumari, a full-stack
                                    developer with over four years of experience
                                    building innovative, scalable, and user-friendly
                                    web applications. My expertise includes Python, C#, Angular,
                                    and Django, along with a strong foundation
                                    in HTML, CSS, JavaScript, and modern frameworks like
                                    React.js and TypeScript.
                                    <br />
                                    <br />
                                    I have a passion for creating dynamic, responsive,
                                    and efficient software solutions. My favorite
                                    technologies to work with include Python, C#, Angular,
                                    Docker, and Kubernetes, but I’m always eager to
                                    explore new tools and frameworks. Currently, I’m
                                    expanding my skills by delving deeper into
                                    cloud-native architectures and microservices.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
