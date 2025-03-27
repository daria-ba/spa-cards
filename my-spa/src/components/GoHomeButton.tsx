import Nav from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const GoHomeButton = () => {
  return (
    <Nav bg="white" expand="lg" className="home-button">
      <Link title="Назад" to="/products">
        <BsFillArrowLeftSquareFill />
      </Link>
    </Nav>
  );
};

export default GoHomeButton;
