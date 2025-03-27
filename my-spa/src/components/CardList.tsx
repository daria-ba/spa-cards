import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../api/productsApi";
import { RootState } from "../store/index";
import { addProduct } from "../store/productsSlice";

const CardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductsQuery(undefined, {
    skip: useSelector((state: RootState) => state.products.loaded),
  });
  const prod = useSelector((state: RootState) => state.products.products);
  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts,
  );
  const showLikedOnly = useSelector(
    (state: RootState) => state.products.showLikedOnly,
  );
  const products = [...prod].reverse();

  useEffect(() => {
    if (data) {
      data.forEach((product) => {
        dispatch(addProduct(product));
      });
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container
      className="row"
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        paddingBottom: "40px",
        color: "black",
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {showLikedOnly
        ? filteredProducts?.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              onClick={() => navigate(`/products/${product.id}`)}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  width: "18rem",
                  height: "200px",
                  position: "relative",
                  border: "solid grey",
                  margin: "10px",
                  padding: "20px",
                }}
                key={product.id}
              >
                <Card.Img
                  variant="top"
                  src={product.image_id}
                  alt={product.title}
                  style={{
                    width: "100%",
                    maxHeight: "120px",
                    objectFit: "cover",
                  }}
                />
                <DeleteButton id={product.id} />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  <Card.Title
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <LikeButton id={product.id} liked={product.liked} />
                    {`"${product.title}"`} by {product.artist_display}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))
        : products?.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  width: "18rem",
                  height: "200px",
                  position: "relative",
                  border: "solid grey",
                  margin: "10px",
                  padding: "20px",
                }}
                onClick={() => navigate(`/products/${product.id}`)}
                key={product.id}
              >
                <Card.Img
                  variant="top"
                  src={product.image_id}
                  alt={product.title}
                  style={{
                    width: "100%",
                    maxHeight: "120px",
                    objectFit: "cover",
                  }}
                />
                <DeleteButton id={product.id} />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  <Card.Title
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {`"${product.title}"`} by {product.artist_display}
                  </Card.Title>
                  <LikeButton id={product.id} liked={product.liked} />
                </Card.Body>
              </Card>
            </div>
          ))}
    </Container>
  );
};

export default CardList;
