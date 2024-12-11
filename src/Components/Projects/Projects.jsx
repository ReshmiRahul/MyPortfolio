import React from 'react'
import ProjectCard from './ProjectCard'
import Project1 from '../../assets/Project1.png'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project4 from '../../assets/Project4.png'
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.png'

// import Project7 from '../../assets/Project7.png'

const Projects = () => {
  return (
    <div id='Projects' className='md:p-24 px-2 text-white md:mt-8'>
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Projects</h1>

      <div className="py-12 px-8 flex flex-wrap gap-5 items-center justify-center">

        <ProjectCard title='SkyCheck' imgsrc={Project2} tec='HTML, CSS, JavaScript, OpenWeather API' desc="SkyCheck is a weather application that allows users to check real-time weather and forecasts for various locations worldwide. Built with React and OpenWeather API for data fetching!" git='https://github.com/ReshmiRahul/SkyCheck--Weather-Checking-Application.git' demo='' />

        <ProjectCard title='Library Explorer' imgsrc={Project3} tec='HTML, CSS, PHP, Laravel' desc='Library Explorer is a web app that allows students to explore books based on their courses. The app uses React for dynamic views and dummy authentication for login.' git='https://github.com/ReshmiRahul/HTTP5214/tree/main/Assignment1' demo='' />

        <ProjectCard title='Pet and Plate' imgsrc={Project4} tec='C#, ASP.NET Core, SQL Server' desc='Pet and Plate is a project where users can browse and adopt pets. It integrates with a plate management system to handle pet care tasks. Built using C#, ASP.NET Core, and SQL Server for backend management.' git='https://github.com/ReshmiRahul/Pet-Plate-Project.git' demo='' />

        <ProjectCard title='Movie Review Recommendation App' imgsrc={Project5} tec='Node.js, HTML, CSS, OpenAI' desc='This app uses OpenAI API to recommend movies based on user preferences and reviews. Built with Node.js for server-side logic, HTML and CSS for front-end styling.' git='https://github.com/ReshmiRahul/Movie-Review-and-Recommendation-App.git' demo='' />
        
        <ProjectCard title='Whac-a-Mole Game' imgsrc={Project1} tec='HTML, CSS, JavaScript' desc='A fun interactive Whac-a-Mole game built with HTML, CSS, and JavaScript. Players hit moles that pop up on the screen while avoiding other items. The game features a timer and score tracking.' git='https://github.com/ReshmiRahul/Whac-a-mole-Game-Project.git' demo='' />

        <ProjectCard title='TobogganHills Mobile App' imgsrc={Project6} tec='Flutter, Dart, MongoDB' desc='TobogganHills is a mobile application designed to help users discover and book tobogganing hill locations. Built using React Native and Firebase for data management.' git='https://github.com/ReshmiRahul/Toboggan-Hills-Mobile-Application.git' demo='' />
      </div>
    </div>
  )
}

export default Projects
