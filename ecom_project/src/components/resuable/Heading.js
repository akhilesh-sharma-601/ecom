import React from "react"

export default function Heading({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-4">
        <h3 className="display-3">{title}</h3>
      </div>
    </div>
  )
}
