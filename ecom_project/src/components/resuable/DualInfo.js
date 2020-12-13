import React from "react"
import Heading from "./Heading"
import Myimg from '../../images/mpic2.png'
export default function DualInfo({ heading }) {
  return (
    <section className="bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row d-flex mrow">
          <div className="col-8 mx-auto d-flex">
            <p className="lead text-white my-5 ">
At Ecom Express, it is our core values that guide all aspects of our business and the way we conduct ourselves. We strive to do the right thing, in the right way at all times. Here’s what being a Ecom is all about.

            </p>
          </div>
          <div className="col-4 mb-5 mcol d-flex">
            <div className="card bg-dark">
              <img
                className="card-img-top mypic bg-dark mx-auto"
                src={Myimg}
                alt="Card image cap"
                style={{"width":"100%" ,"height":"100%"}}
              />

         
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
