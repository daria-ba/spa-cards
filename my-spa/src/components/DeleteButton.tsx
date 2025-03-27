import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { removeProduct } from "../store/productsSlice";
import { BsXLg } from "react-icons/bs";

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
      style={{
        position: "absolute",
        background: "white",
        fontSize: "15px",
        color: "black",
        top: "10px",
        right: "10px",
        zIndex: 5,
      }}
    >
      <BsXLg />
    </Button>
  );
};

export default DeleteButton;
