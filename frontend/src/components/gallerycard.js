import React from 'react'


export default function gallerycard({imgSrc, imgCaption }) {

  return (
    <div className='col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center'>
      <figure className="figure">
        <img src={imgSrc} className="figure-img img-fluid rounded" alt="..." width={300} />
        <figcaption className="figure-caption">{imgCaption}</figcaption>
      </figure>
    </div>
  )
}
