import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import GoHomeButton from "../components/GoHomeButton";

const CardComponent = () => {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products.products);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Товар не найден</h2>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <GoHomeButton />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          width: "100%",
          textAlign: "center",
        }}
      >
        <img
          src={product.image_id}
          alt={product.title}
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />

        <div
          style={{
            width: "400px",
            whiteSpace: "wrap",
            overflow: "auto",
          }}
        >
          <h2>{`Название: "${product.title}"`}</h2>
          <h3>{`Автор: ${product.artist_display}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
