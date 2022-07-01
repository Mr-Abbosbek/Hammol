import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GetServiceApi from "../../API/useApi";
import { setSelectedProduct, removeSelectedProduct } from "../../redux/actions/actionsType";
import Loader from "react-spinners/BarLoader";

function Single() {
  const singleProduct = useSelector((state) => state.selectedProduct);

  const url = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (url && url.length !== 0) {
      GetServiceApi.getSingleProduct(url.id).then((res) => {
        dispatch(setSelectedProduct(res.data));
      });
    }
    return () => dispatch(removeSelectedProduct());
  }, [dispatch, url.id, url]);

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = singleProduct;
  
  let [loading] = useState(true);
  let [color] = useState("#36D7B7");

  return Object.keys(singleProduct).length === 0 ? (
    <div className="w-100" style={{ paddingTop: "70px" }}>
      <Loader width={"100%"} color={color} loading={loading} />
    </div>
  ) : (
    <div style={{ paddingTop: "150px" }}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-5 col-md-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators active_indic">
                {images &&
                  images.map((image, index) => {
                    console.log(index);
                    return (
                      <button
                        style={{backgroundImage: `url(${image})`}}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={ index === 0 ? "active indicator" : "indicator " }
                        aria-current={ index === 0 ? "true" : "" }
                        aria-label={`Slide ${index}`}
                        key={index}
                      ></button>
                    );
                  })}
              </div>
              <div className="carousel-inner">
                {images &&
                  images.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          index === 0 ? "carousel-item active" : "carousel-item"
                        }
                      >
                        <img src={image} className="d-block w-100" height={"400px"} alt="..." />
                      </div>
                    );
                  })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        <div className="singleB_text col-xl-6 col-md-12 mt-lg-0 pt-lg-0 mt-md-5 pt-md-5 mt-sm-5 pt-sm-5 mt-5 pt-5">
          <h1 className="text-capitalize pt-lg-0 mt-lg-0 pt-md-5 mt-md-5 pt-sm-5 mt-sm-5 mt-5 pt-5 pb-3 fw-bold"><u>brand:</u> {brand}</h1>
          <h1 className="text-capitalize py-3 fw-bold"><u>title:</u> {title}</h1>
          <h4 className="text-capitalize py-3 fw-bold"><u>category:</u> {category}</h4>
          <h4 className="text-capitalize py-3 fw-bold"><u>category:</u> {category}</h4>
          <h5 className="text-capitalize py-3 fw-bold"><u>description:</u> {description}</h5>
          <h6 className="text-capitalize py-3 fw-bold"><u>discount Percentage:</u> {discountPercentage}</h6>
          <h6 className="text-capitalize py-3 fw-bold"><u>price:</u> {price}</h6>
          <h6 className="text-capitalize py-3 fw-bold"><u>rating:</u> {rating}</h6>
          <h6 className="text-capitalize py-3 fw-bold"><u>stock:</u> {stock}</h6>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
