import React from "react";
import "./Location.css";
import map from "./images/Map-Placeholder-Restaurant.PNG";

export default function Location() {
  return (
    <footer className="page-footer font-small" id="footer">
      <div className="container-fluid ">
        <div className="row" id="row-edit">
          <div
            className="col-md-6 mt-3 pl-3 justify-content-center"
            id="location"
          >
            <h5 className="text-uppercase">Location & Hours</h5>
            <p>
              Monday-Thursday: 11:00am-9:00pm
              <br />
              Friday-Saturday: 11:00am-11:00pm
              <br />
              Sunday: 11:00am-9:00pm
            </p>
            <h5 className="text-uppercase">Find Us</h5>
            <p>
              348 Main St.
              <br />
              Lexington, KY 40503 <br />
              123-456-7890 <br />
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0 d-flex justify-content-center text-center" />

          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.21141541528!2d-84.496765469774!3d38.04215992432027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1660595099828!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}


// <div className="col-md-6">
//   <img src={map} className="img-fluid" alt="" style={{ maxWidth: "24rem" }} />
// </div>;