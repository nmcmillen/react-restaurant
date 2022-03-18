import React from 'react';
import './Location.css';
import map from './images/Map-Placeholder-Restaurant.PNG';

export default function Location () {
    return (
        <footer className="page-footer font-small" id="footer">
            <div className="container-fluid ">
                <div className="row" id="row-edit">
                    <div className="col-md-6 mt-3 pl-3 justify-content-center" id="location">
                        <h5 className="text-uppercase">Location & Hours</h5>
                        <p>
                            Monday-Thursday: 11:00am-9:00pm<br />
                            Friday-Saturday: 11:00am-11:00pm<br />
                            Sunday: 11:00am-9:00pm
                        </p>
                        <h5 className="text-uppercase">Find Us</h5>
                        <p>
                            348 Main St.<br />
                            Lexington, KY 40503 <br />
                            123-456-7890 <br />
                        </p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0 d-flex justify-content-center text-center"/>

                    <div className="col-md-6">
                    <img src={map}
                    className='img-fluid'
                    alt=''
                    style={{ maxWidth: '24rem' }}
                    />
                    </div>
                </div>
            </div>
    </footer>
    )
}