import React from 'react'

const Experience = () => {
    return (
        <>
            <h2 className=" text-white text-2xl md:text-4xl font-bold text-center md:mt-20 mt-4">Experience</h2>
            <div id='Experience' className='flex flex-col justify-center items-center gap-6 md:gap-2 mt-4 md:mt-0 m-8'>

                <div className='text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-4 md:mb-4 md:mt-28 mt-4 md:mx-6'>
                    <div className='flex gap-3 py-4 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl'>Software Engineer</h1>
                        <p className='text-sm md:text-md leading-tight text-slate-400'>
                            NeST Digital | Aug 2022 - Aug 2023
                        </p>
                        <p className='text-sm md:text-md leading-tight text-yellow-300'>
                        &#9733; Contributed to the UAEIPP System, enabling 24/7 instant payment services for users and licensed financial institutions.
                        </p>
                        <p>
                            Worked on designing, coding, and testing software components for the National Payment System Strategy (NPSS). Developed and maintained a microservices architecture using .NET Core, integrating MS SQL and MongoDB to ensure data integrity and performance. Participated in Agile development processes, ensuring smooth collaboration and timely delivery of key features.
                        </p>
                    </div>
                </div>

                <div className='text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-4 md:mb-4 md:mx-6'>
                    <div className='flex gap-3 py-4 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl'>Python Developer</h1>
                        <p className='text-sm md:text-md leading-tight text-slate-400'>
                            Singularis Software Technologies | Jul 2019 - Aug 2022
                        </p>
                        <p>
                            Developed cloud-native services with Python, focusing on optimizing system performance. Collaborated with front-end teams to build responsive web designs using Angular and Vue.js. Also, worked on troubleshooting and analyzing software performance to identify areas for improvement. Contributed to documentation and user manuals for software systems.
                        </p>
                    </div>
                </div>

                <div className='text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-4 md:mb-4 md:mx-6'>
                    <div className='flex gap-3 py-4 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl'>Post Graduate Diploma Certificate in Web Development</h1>
                        <p className='text-sm md:text-md leading-tight text-slate-400'>
                            Humber College | 2024 - 2025
                        </p>
                        <p>
                            Pursuing my graduate certificate in Web Development with a focus on building full-stack web applications. Currently excelling in my coursework with a strong GPA and applying modern web technologies in my personal and academic projects.
                        </p>
                    </div>
                </div>

                <div className='text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-4 md:mb-4 md:mx-6'>
                    <div className='flex gap-3 py-4 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl'>Post Graduate Diploma Certificate in Cloud Computing</h1>
                        <p className='text-sm md:text-md leading-tight text-slate-400'>
                            Humber College | 2023 - 2024
                        </p>
                        <p className='text-sm md:text-md leading-tight text-yellow-300'>
                        &#9733; Dean’s List for outstanding academic performance.
                        </p>
                        <p>
                            Completed a graduate certificate in Cloud Computing, where I honed my skills in deploying cloud-based solutions and mastering services like AWS, GCP, and Azure. Consistently recognized for academic excellence.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Experience
