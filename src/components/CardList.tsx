import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import { useGetProductsQuery } from "../api/productsApi";
import { RootState } from "../store/index";
import { addProduct } from "../store/productsSlice";

const ProductCard = ({ product }: { product: any }) => {
  const navigate = useNavigate();

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3"
      onClick={() => navigate(`/products/${product.id}`)}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        className="product-card"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <Card.Img variant="top" src={product.image_id} alt={product.title} />
        <DeleteButton id={product.id} />
        <Card.Body>
          <Card.Title>
            <LikeButton id={product.id} liked={product.liked} />
            {`"${product.title}"`} by {product.artist_display}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

const CardList = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductsQuery(undefined, {
    skip: useSelector((state: RootState) => state.products.loaded),
  });
  const products = useSelector((state: RootState) => state.products.products);
  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts,
  );
  const showLikedOnly = useSelector(
    (state: RootState) => state.products.showLikedOnly,
  );

  const reversedProducts = [...products].reverse();

  useEffect(() => {
    if (data) {
      data.forEach((product) => {
        dispatch(addProduct(product));
      });
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container className="row product-list">
      {showLikedOnly
        ? filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : reversedProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </Container>
  );
};

export default CardList;
