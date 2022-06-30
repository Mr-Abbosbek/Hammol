import React from "react";
import { Link } from "react-router-dom";

function Products({ allProducts }) {
  return allProducts.map((product) => (
    <div
      className="col-xl-4 col d-flex justify-content-center mb-5"
      key={product.id}
    >
      <div className="card border-0" style={{ width: "22rem", height: "26rem" }}>
        <img
          className="card-img-top"
          src={product.thumbnail}
          alt=""
          height="50%"
        />
        <div className="card-body text-center" style={{ height: "50%" }}>
          <h5 className="card-title fw-bold">{product.id})<span className="fw-bold text-uppercase">Title: </span>{product.title}</h5>
          <p className="card-text"><span className="fw-bold">Description:</span> {product.description.slice(0, 45)} ...</p>
          <Link to={`/item/${product.id}`} className="btn btn-outline-primary w-75">
            <p className="card-text">Batafsil</p>
          </Link>
        </div>
      </div>
    </div>
  ));
}

export default Products;
