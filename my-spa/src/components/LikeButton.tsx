import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { toggleLike } from "../store/productsSlice";

const LikeButton = ({ id, liked }: { id: number; liked: boolean }) => {
  const dispatch = useDispatch();

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Button
      onClick={(e) => {
        handleButtonClick(e);
        dispatch(toggleLike(id));
      }}
      variant="danger"
      size="sm"
      className="product-button-like"
    >
      {liked ? <BsHeartFill /> : <BsHeart />}
    </Button>
  );
};

export default LikeButton;
