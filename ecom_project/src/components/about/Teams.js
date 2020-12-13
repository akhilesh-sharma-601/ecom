import React from "react"

export default function teams() {
  return (
    <section>
         <h1 className="capitalized text-center ">Our Team</h1>
      <div className="row mb-5">
         
        <div className="col-10 sm-10 mx-auto">
          <div className="card-group mb-10 ">
            <div className="card bg-dark mx-2">
              <img
                className="card-img-top teampic"
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-white text-center">Maria</h5>
                <p className="card-text text-white">
                  i am a ui / ux designer , having 2 yrs xperience.
                </p>
              </div>
            </div>
            <div className="card bg-dark mx-2">
              <img
                className="card-img-top teampic"
                src="https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-white text-center">Kiara</h5>
                <p className="card-text text-white text-capitalize">
                  i am react developer , crafting new technologies as per need.
                </p>
              </div>
            </div>
            <div className="card bg-dark mx-2">
              <img
                className="card-img-top teampic"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-white text-center">Andre</h5>
                <p className="card-text text-white">
                  i am cart designer , can design any cart in any lang .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
