import { useDispatch } from "react-redux";
import { BsXLg } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { removeProduct } from "../store/productsSlice";

const DeleteButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const handleRemove = (id: number) => {
    dispatch(removeProduct(id.toString()));
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Button
      title="Удалить"
      variant="danger"
      onClick={(e) => {
        handleButtonClick(e);
        handleRemove(id);
      }}
      size="sm"
      className="product-button-delete"
    >
      <BsXLg />
    </Button>
  );
};

export default DeleteButton;
