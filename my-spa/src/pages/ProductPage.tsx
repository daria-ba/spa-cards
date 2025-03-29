import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { RootState } from "../store";
import GoHomeButton from "../components/GoHomeButton";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products.products);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Товар не найден</h2>;
  }

  return (
    <Container className="product-page page-container">
      <GoHomeButton />

      <div className="product-page product-container">
        <img
          src={product.image_id}
          alt={product.title}
          className="product-page image"
        />

        <div className="product-page description">
          <h2>{`Название: "${product.title}"`}</h2>
          <h3>{`Автор: ${product.artist_display}`}</h3>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
