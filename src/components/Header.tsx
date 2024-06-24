import "./header.scss";
import BtnImage from "../images/bg-desktop-dark.jpg";

const Header = () => {
  return (
    <div className="container" style={{ backgroundImage: `url(${BtnImage})` }}>
      <h1>TODO</h1>
    </div>
  );
};

export default Header;
