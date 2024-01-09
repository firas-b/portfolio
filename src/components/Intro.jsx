import React from 'react';
import yourPhoto from '/assets/photo.jpg'; // Import your photo
import '../styles/profpicanim.css'
function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <div className="flex items-center mb-4">
            <img id='profileimg'
               src={yourPhoto}
               alt="Your Name"
               className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full "
            />
            <h1 className="text-4xl md:text-7xl dark:text-white ml-4 font-bold">Firas Boukhchim</h1>
         </div>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineering student</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            Welcome to my portfolio! I am a driven and creative software engineering student with a passion
            for crafting elegant and efficient solutions. Throughout my academic journey, I have honed my skills
            in programming languages such as Java, Python, and Php, and I have a keen interest in software development
            methodologies. My portfolio showcases a collection of projects that reflect my dedication to innovation and
            problem-solving. I am excited to share my journey, experiences, and the projects that highlight my ability
            to bring ideas to life through code. Explore my work, and feel free to reach out—I am always open to new
            opportunities and collaborations!
         </p>
      </div> 
   );
}

export default Intro;
