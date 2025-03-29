import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { RootState } from "../store/index";
import CardList from "../components/CardList";
import FilterButton from "../components/FilterButton";

const ProductsPage = () => {
  const navigate = useNavigate();

  const showLikedOnly = useSelector(
    (state: RootState) => state.products.showLikedOnly,
  );

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
        {showLikedOnly ? <h1>Избранное</h1> : <h1>Карточки продуктов</h1>}
        <CardList />
      </div>
    </>
  );
};

export default ProductsPage;
