import React, { Component } from "react"
import Img from "gatsby-image"
import Heading from "../resuable/Heading"

export default class productCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myproducts: props.myproducts.edges,
    }
  }

  render() {
    //console.log(this.state.myproducts)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="All Products" />
          <div className="row">
            {this.state.myproducts.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-5 d-flex mx-auto bg-lighten-1 item"
                >
                  <Img fixed={node.image.fixed} className="myimg" />
                  <div className="flex-grow-1 px-3 itembody">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0 text-success text-capitalize">
                        {node.title}
                      </h6>
                    </div>
                    <p className="text-muted text-capitalize ">
                      <small>{node.description}</small>
                    </p>
                    <h6 className="mb-0 text-success mb-2">
                      Price : ${node.price}
                    </h6>
                    <button
                      className="btn btn-warning text-capitalize snipcart-add-item"
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://ecomexpress.in"
                      data-item-image={node.image.fixed.src}
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
