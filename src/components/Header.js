import Image from "./Image";
import logo from "../assets/img/logo-netflix.png";

const Header = (props) => {
  return (
    <header>
      <Image src={logo} className="logo-netflix" />
    </header>
  );
};

export default Header;
