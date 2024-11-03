// import React from "react";
// import p from "../assets/events/eid.png";
// import './eventcard.css';

// export default function EventCard() {
//   const showToast = () => {
//     const toastEl = document.getElementById("liveToast");
//     const toast = new window.bootstrap.Toast(toastEl, {
//       autohide: false, // Disable auto-hide so the toast stays on screen
//     });
//     toast.show();
//   };

//   return (
//     <>
//       {/* Card Layout */}
//       <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
//         <div className="card">
//           <img src={p} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">Event name</h5>
//             <p className="card-text">
//               <strong>Timings: </strong>10.00 am , 01/09/2024 <br />
//               <strong>Venue:</strong> Lg22
//             </p>
//             <a  onClick={showToast} className="btn btn-primary">
//               More info
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Toast */}
//       <div
//         className="toast-container position-fixed top-50 start-50 translate-middle"
        
//       >
//         <div
//           id="liveToast"
//           className="toast"
//           role="alert"
//           aria-live="assertive"
//           aria-atomic="true"
          
//         >
//           <div className="toast-header" style={{ backgroundColor: "#fff" }}>
//             <strong className="me-auto">Event name</strong>
//             <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//           </div>
//           <div className="toast-body" style={{ textAlign: "center", padding: "30px" }}>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nobis aut. Sunt alias adipisci velit doloribus rem aut aspernatur, labore architecto cum fugit tempora? Culpa animi qui neque ullam aliquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nam nemo tempore dolores dicta quas dignissimos? Obcaecati libero excepturi sapiente dicta deleniti voluptatibus quidem cum. Libero commodi ad pariatur esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dolor qui tempore, repellendus quasi impedit? Vitae accusamus magni sit eos dignissimos nobis architecto et tempore. Et debitis modi harum neque!
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";
import './eventcard.css';

export default function EventCard({ eventName, eventTime, eventVenue, imageSrc, toastContent }) {
  // const showToast = () => {
  //   const toastEl = document.getElementById("liveToast");
  //   const toast = new window.bootstrap.Toast(toastEl, {
  //     autohide: false, // Disable auto-hide so the toast stays on screen
  //   });
  //   toast.show();
  // };
  const showToast = () => {
    const toastEl = document.getElementById(`toast-${eventName}`);
    const toast = new window.bootstrap.Toast(toastEl, {
      autohide: false,
    });
    toast.show();
  };
  

  return (
    <>
      {/* Card Layout */}
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <div className="card">
          <img src={imageSrc} className="card-img-top" alt={eventName} height={259}/>
          <div className="card-body">
            <h5 className="card-title">{eventName}</h5>
            <p className="card-text">
              <strong>Timings: </strong>{eventTime} <br />
              <strong>Venue: </strong>{eventVenue}
            </p>
            <button onClick={showToast} className="btn btn-primary">
              More info
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div className="toast-container position-fixed top-50 start-50 translate-middle">
      <div id={`toast-${eventName}`} className="toast" role="alert" aria-live="assertive" aria-atomic="true">

          <div className="toast-header" style={{ backgroundColor: "#fff" }}>
            <strong className="me-auto">{eventName}</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="toast-body"
            style={{ textAlign: "center", padding: "30px" }}
          >
            {toastContent}
          </div>
        </div>
      </div>
    </>
  );
}

