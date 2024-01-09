import React from 'react';

const SkillCard = ({ imageUrl, skillName }) => {
   return (
      <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden h-24 w-24 p-1">
         <img
            src={imageUrl}
            alt={skillName}
            className="w-full h-full md:h-22 object-cover cursor-pointer mx-auto"
         />
         <div className="text-center mt-2">
            <h3 className="text-sm md:text-base dark:text-white font-semibold">{skillName}</h3>
         </div>
      </div>
   );
};

export default SkillCard;
