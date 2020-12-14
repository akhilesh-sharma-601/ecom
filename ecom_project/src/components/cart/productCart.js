import React, { Component } from "react"
import Img from "gatsby-image"
import Heading from "../resuable/Heading"

const getcategory = items => {
  let holdItems = items.map(items => {
    return items.node.category
  })
  let holdCatogaries = new Set(holdItems)
  let categories = Array.from(holdCatogaries)
  categories = ["all", ...categories]
  return categories
}

export default class productCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.myproducts.edges,
      myproducts: props.myproducts.edges,
      mycategories: getcategory(props.myproducts.edges),
    }
  }
  catyClicked = category => {
    let keepit =[...this.state.myproducts]
    
    if (category === "all"){
      this.setState(()=>{
        return {myproducts : keepit}
      })
    }
    else{
        let holdme=keepit.filter(({node})=>node.category===
        category)
     this.setState(()=>{
       return {myproducts:holdme}
     })
      }
    
  }

  render() {
    //console.log(this.state.myproducts)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="All Products" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info m-3 px-3"
                    key={index}
                    onClick={() => {
                      this.catyClicked()
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
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
