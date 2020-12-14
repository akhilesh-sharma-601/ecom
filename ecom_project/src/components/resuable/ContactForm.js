import React from "react"

export default function ContactForm() {
  return (
    <section classNameName="py-3">
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/f/xqkgywpw" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Your Name Here"
              className="form-control mb-2"
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Your Email Here"
              className="form-control mb-2"
            />
            <input
              type="number"
              name="Mobile"
              id="mobile"
              placeholder="Your Mobile Number Here"
              className="form-control mb-2"
            />
             <textarea
              type="description"
              name="description"
              id="description"
              placeholder="Your Message Here"
              className="form-control mb-2"
            />
            <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}
