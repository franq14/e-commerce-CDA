import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";
import style from "../CardDetail/CardDetail.module.css";

const DetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const URL = "https://fake-products-eric.herokuapp.com/api/products/detail";

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res), setLoading(false))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className={style.detailContainer}>
          <CardDetail item={item} />
        </div>
      )}
    </>
  );
};

export default DetailContainer;
