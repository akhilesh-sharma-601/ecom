import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"
export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4 text-capitalize">
              ecom Express was founded in December 2020 by Akhilesh Sharma. The
              company initially focused on online sales of wide range of items
              with country-wide shipping. Following its launch, Ecom Express
              slowly grew in prominence; from 2020, it is receiving 100 orders
              per day.{" "}
            </p>

            <p className="lead text-white my-3 text-capitalize">
              We are planning to launch tsome new services at Ecom Express such
              as : Book selling , toys , home appliances , groceries an many
              more.
            </p>
            <p className="lead text-white my-3 text-capitalize">
              {" "}
              we are 24*7 available to support you , so you can get what you
              want.
            </p>

            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
