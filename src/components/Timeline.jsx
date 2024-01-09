import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full ">{/* max-h-80 overflow-y-auto scrollbar-thin */}
       <style>
          {`
            .scrollbar-thin::-webkit-scrollbar {
              width: 6px; /* Set the width of the scrollbar */
            }
           

            .scrollbar-thin::-webkit-scrollbar-thumb {
              background-color: #4A5568; /* Set the color of the scrollbar thumb */
              border-radius: 3px; /* Set the border radius of the scrollbar thumb */
            }
          `} 
         
        </style> 
        <Title>Timeline</Title>
        {timeline.map((item) => (
          <TimelineItem
            key={item.year}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
