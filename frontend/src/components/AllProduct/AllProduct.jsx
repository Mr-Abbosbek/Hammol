import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../UI/Pagination/Pagination";
import { setProducts } from "../../redux/actions/actionsType";
import GetServiceApi from "../../API/useApi";
import SelectUi from "../UI/select/Select";
import SearchUi from "../UI/Input/Input";
import Products from "./Products";
import SelectCategory from "../UI/SelectCategory/SelectCategory";

function AllProduct() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [pageCount, setPageCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(6);
  const [offset] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (category === "All") {
        GetServiceApi.getAllPosts(limit, offset, search, "").then((res) => {
          dispatch(setProducts(res.data.products));
          setTotal(res.data.count);
          setPageCount(Math.ceil(total / limit));
        });
      } else {
        GetServiceApi.getAllPosts(limit, offset, search, category).then(
          (res) => {
            dispatch(setProducts(res.data.products));
            setTotal(res.data.count);
            setPageCount(Math.ceil(total / limit));
          }
        );
      }
    } catch (error) {
      dispatch(setProducts([]));
    }
  }, [limit, total, offset, search, category, dispatch]);

  const allProducts = useSelector((state) => state.allProducts.products);

  const handlePageClick = async (e, value) => {
    let currentPage = value;
    let limitDef, offsetDef;
    // if (search.length) {
    //   // limitDef = total;
    //   // offsetDef = parseInt(allProducts[0].id) - 1;
    //   if (total <= limit) {
    //     limitDef = parseInt(allProducts[total].id)
    //     offsetDef = parseInt(allProducts[0].id) - 1;
    //   } else {
    //      offsetDef = parseInt(allProducts[limit * currentPage - limit-1].id) - 1;
    //      limitDef = parseInt(allProducts[limit-1].id);
    //   }
    //   await GetServiceApi.getAllPosts(limitDef, offsetDef).then((res) => {
    //     dispatch(setProducts(res.data.products));
    //   });
    // } else {
      limitDef = limit * currentPage;
      offsetDef = limitDef - limit;
      await GetServiceApi.getAllPosts(limitDef, offsetDef).then((res) => {
        dispatch(setProducts(res.data.products));
      });
    // }
  };

  return (
    <section className="py-5">
      <div className="container py-5 px-0">
        <div className="row py-5">
          <div className="col-6 px-4">
            <SearchUi search={search} setSearch={setSearch} />
          </div>
          <div className="col-6 d-flex justify-content-end">
            <SelectCategory category={category} setCategory={setCategory} />
          </div>
        </div>
        <div className={`row flex-wrap d-flex ${allProducts.length < 3 ? "justify-content-center" : "justify-content-left"}`}>
          <Products allProducts={allProducts} />
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
            <div className="mx-4">
              <SelectUi setLimit={setLimit} limit={limit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllProduct;
