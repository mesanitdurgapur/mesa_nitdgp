import React from 'react'
import Gallerycard from '../components/gallerycard'

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
const images = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));

export default function gallery() {
  const image=[
   
    {img:"pic5.jpeg",caption:"Farewell 2024"},
    {img:"pic2.jpeg",caption:"inviting for Farewell"},
    
    {img:"pic3.jpeg",caption:"MECH-O-MANIA event"},
    //{img:"pic4.jpg",caption:"hjherghgerkgkerkg"},
    {img:"pic6.jpg",caption:"Alumni Talk Series "},
    {img:"pic1.jpeg",caption:"Departmental farewell 2024"},
   {img:"pic7.jpeg",caption:"Freshers 2024"},
  ]
  return (
    <div className='container-fluid'>
        <div>
            <h1>Gallery</h1>
        </div>
     <div className="container">
     <div className="row justify-content-center my-3 gy-3">
     {image.map((pic,index)=>(
                <Gallerycard 
                key={index}
                imgSrc={images[pic.img]}
                imgCaption={pic.caption}
                />
              ))}
        
     </div>
     </div>
      
    </div>
  )
}
