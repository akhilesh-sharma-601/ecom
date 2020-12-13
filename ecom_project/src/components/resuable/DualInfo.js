import React from "react"
import Heading from "./Heading"
import Myimg from "../../images/mpic2.png"
export default function DualInfo({ heading }) {
  return (
    <section className="bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row d-flex mrow">
          <div className="col-6 sm-10  ">
            <p className="lead text-white my-1 text-capitalize ">
              At Ecom Express, it is our core values that guide all aspects of
              our business and the way we conduct ourselves. We strive to do the
              right thing, in the right way at all times. Here’s what being a
              Ecom is all about.</p>
              <p className="lead text-white my-3 text-capitalize">
                &#9830; complete customer satisfaction.
              </p>
              <p className="lead text-white my-2 text-capitalize">
                &#9830; 24 * 7 support to assist you.
              </p>
              <p className="lead text-white my-2 text-capitalize">
                &#9830; 100 % genuine products.
              </p>
              <p className="lead text-white my-2 text-capitalize">
                &#9830; easy and fast payment methods
              </p>
              <p className="lead text-white my-2 text-capitalize">
                &#9830; reliable and fast refund
              </p>
           
          </div>
          <div className="col-6 sm-10 mcol mb-2 d-flex">
            <div className="card bg-dark">
              <img
                className="card-img-top mypic bg-dark mx-auto"
                src={Myimg}
                alt="Card image cap"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
