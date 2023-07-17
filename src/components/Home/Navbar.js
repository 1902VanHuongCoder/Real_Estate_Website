import logo from "../../assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import github from "../../assets/git hub.png";
import { Dropdown, Navbar } from "flowbite-react";
import messenger from "../../assets/messenger.png";
import instagram from "../../assets/instagram.png";
import { Link, useNavigate } from "react-router-dom";
export default function NavbarWithDropdown({ username, isLogged }) {
  const navigate = useNavigate();
  const handleRedirectToOrderHistory = () => {
    navigate("/orderhistory", {
      state: { username: username, isLogged: isLogged },
    });
  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img alt="Flowbite React Logo" className="mr-3 h-6 sm:h-9" src={logo} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PaulToStore
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-3">
        <a href="http://localhost:3000/" className="hidden sm:block">
          <img src={messenger} alt="messenger" width={40} height={40} />
        </a>
        <a href="http://localhost:3000/" className="hidden sm:block">
          <img src={github} alt="github" width={40} height={40} />
        </a>
        <a href="http://localhost:3000/" className="hidden sm:block">
          <img src={instagram} alt="instagram" width={40} height={40} />
        </a>
        <Dropdown
          inline
          label={
            <div className="w-[40px] h-[40px] rounded-full bg-[#e9e9e9] flex justify-center items-center">
              <FaUserAlt alt="User settings" />
            </div>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{username}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={handleRedirectToOrderHistory}>
            Order History
          </Dropdown.Item>
          <Dropdown.Divider />
          <Link to="/login">
            {" "}
            <Dropdown.Item>Use another account</Dropdown.Item>
          </Link>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link active>
            <p>Home</p>
          </Navbar.Link>
        </Link>
        <Navbar.Link
          onClick={handleRedirectToOrderHistory}
          className="cursor-pointer"
        >
          Order History
        </Navbar.Link>
        {!isLogged && (
          <Link to="/login">
            <p className="ml-3">Login</p>
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}