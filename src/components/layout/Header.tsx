import { Link } from "react-router-dom";

import SWLogo from "@/assets/SW_logo.png";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-screen-xl items-center justify-center p-6">
      <Link to="/">
        <img
          className=""
          alt="Star Wars logo"
          src={SWLogo}
          width="185"
          height="80"
        />
      </Link>
    </header>
  );
};

export default Header;
