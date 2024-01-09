import React from 'react';
import Slider from 'react-slick';
import SkillCard from './SkillCard';
import skills from '../data/skills';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from './Title';



function Skills (){
   const settings = {
      dots: false,
      infinite: true,
      autoplay:true,
      TimeRanges: 3000,
   
      slidesToShow: 8.3,  
      slidesToScroll: 3,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
      ],
   };
  


   return (
      <section className="p-8">
      <Title>Skills</Title>
         <div className="container mx-auto">
           
            <Slider {...settings} className="mb-4">
               {skills.map((skill, index) => (
                  <SkillCard key={index} imageUrl={skill.imageUrl} skillName={skill.name} />
               ))}
            </Slider>
         </div>
      </section>
   );
};

export default Skills;
