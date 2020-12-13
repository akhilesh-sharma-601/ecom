import React from "react"

export default function teams() {
  return (
    <section>
         <h1 className="capitalized text-center text-warning">Our Team</h1>
      <div className="row ">
         
        <div className="col-10 sm-10 mx-auto">
          <div className="card-group mb-10 ">
            <div className="card bg-dark">
              <img
                className="card-img-top teampic"
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-white">Name 1</h5>
                <p className="card-text text-white">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="card bg-dark">
              <img
                className="card-img-top teampic"
                src="https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-white">name 2</h5>
                <p className="card-text text-white">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
            <div className="card bg-dark">
              <img
                className="card-img-top teampic"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-white">name 3</h5>
                <p className="card-text text-white">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
