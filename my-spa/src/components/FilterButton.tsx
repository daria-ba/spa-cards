import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { toggleFilter } from "../store/productsSlice";
import { BsStar, BsStarFill } from "react-icons/bs";
import { RootState } from "../store";

const FilterButton = () => {
  const dispatch = useDispatch();
  const showLikedOnly = useSelector(
    (state: RootState) => state.products.showLikedOnly,
  );

  const handleFilterToggle = () => {
    dispatch(toggleFilter());
  };
  return (
    <Button title="Избранное" onClick={handleFilterToggle}>
      {showLikedOnly ? <BsStarFill /> : <BsStar />}
    </Button>
  );
};

export default FilterButton;
