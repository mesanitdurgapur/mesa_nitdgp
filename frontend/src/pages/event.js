import React from 'react'
import Eventcard from '../components/eventcard'

// Dynamically importing all images from a specific folder
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return null;
  });
  return images;
};

// Importing all images from the "team" folder
const images = importAll(require.context('../assets/events', false, /\.(png|jpe?g|svg)$/));

export default function event() {
  const Events=[
    {eventName:"FRESHERS 2024",venue:"SAC auditorium",time:"04:30 PM, 25/10/2024 ",image:"freshers24.jpeg",
    content:" Hey There, New Stars!As you begin this exciting new chapter, Kick it off with a bang! and Join us for a spectacular Freshers Night celebrations! Come meet your peers, faculty, and senior students, and enjoy a variety of activities including games, performances, and a treat. It's a fantastic opportunity to make new friends and start building your network. So, we at MESA are eagerly preparing for your arrival and are committed to make this day an exceptional start to your journey."
    },
    {eventName:"MATLAB WORKSHOP",venue:"Mechanical Engineering Seminar hall",time:"04:00 PM, 31/08/2024 & 03:00 PM, 01/09/2024 ",image:"matlab.jpeg",
    content:"The magic of Learning happens when theory meets practice. So, are you ready to shape your future with cutting-edge MATLAB skills? We,at MESA,Are thrilled to announce an upcoming MATLAB workshop designed to empower you with the skills to harness the full potential of MATLAB for your knowledge in numerical computing and programming.We are honored to have  Ponannda Durga Prasad to lead this workshop. This will be a two-day workshop open for all 2nd and 3rd year students, with a requirements of a fully charged laptop and basic knowledge of programming languages."
    },
    {eventName:"FAREWELL 2020-BATCH",venue:"NAB 403",time:"06:00 PM, 08/05/2024 ",image:"farewell2020.jpeg",
    content:"Description about farewell 2020 batch."
    },
    {eventName:"MECH-O-MANIA",venue:"Mechanical Engineering Seminar hall",time:"06:30 PM, 25/01/2024",image:"quiz.png",
    content:"A quiz competition is like a puzzle; the more you solve, the better you become.' Farhanitrate ' and ' Prerajulisation '- Ring any bells?? Yepp you just got it right! It's Rancho's way through the lane of engineering. It's about learning and making oneself aware about how things work!  Waiting for a platform for it? Wait no more, we, at team MESA , bring you  to MECH-O-MANIA , a complete engineering related quiz.It helps you compete with peers of the same potential as you and expand your horizons of engineering."}
  ];
  return (
    <>
    <div className="event-sec" style={{backgroundColor: "#F5F5F5"}}>
        <div>
        <h1>Events</h1>
        </div>
        <div className="container">
            <div className="row  justify-content-center my-4 gy-4">
              {Events.map((event,index)=>(
                <Eventcard 
                key={index}
                eventName={event.eventName}
                eventTime={event.time}
                eventVenue={event.venue}
                toastContent={event.content}
                imageSrc={images[event.image]}
                />
              ))}
            </div>
        </div>
    </div>
    </>
  )
}
