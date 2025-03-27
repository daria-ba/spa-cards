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
      style={{
        position: "absolute",
        background: "white",
        opacity: "0.5",
        bottom: "10px",
        right: "10px",
        color: "red",
        zIndex: 10,
      }}
    >
      {liked ? <BsHeartFill /> : <BsHeart />}
    </Button>
  );
};

export default LikeButton;
