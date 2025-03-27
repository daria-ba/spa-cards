import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CardList from "../components/CardList";
import FilterButton from "../components/FilterButton";

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/create-product");
  };

  return (
    <>
      <div className="navbar">
        <FilterButton />
        <Button onClick={handleRedirect}>Создать</Button>
      </div>
      <div className="general-page">
        <h1>Карточки продуктов</h1>
        <CardList />
      </div>
    </>
  );
};

export default ProductsPage;
