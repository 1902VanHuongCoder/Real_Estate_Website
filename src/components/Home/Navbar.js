import logo from "../../assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import github from "../../assets/git hub.png";
import { Dropdown, Navbar } from "flowbite-react";
import messenger from "../../assets/messenger.png";
import instagram from "../../assets/instagram.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { LoginContext } from "../Context/LoginContext";
import { useToast } from "rc-toastr";
export default function NavbarWithDropdown() {
  const { toast } = useToast();
  const { account, setAccount } = useContext(AppContext);
  const { isLogin, func } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleRedirectToOrderHistory = () => {
    navigate("/orderhistory");
  };

  const handleLogOut = () => {
    func(false);
    setAccount({});
    toast("Log out success");
    localStorage.removeItem("loggedInAccount");
    window.location.reload(true);
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
        <a
          href="https://github.com/1902VanHuongCoder"
          className="hidden sm:block"
        >
          <img src={github} alt="github" width={40} height={40} />
        </a>
        <a href="http://localhost:3000/" className="hidden sm:block">
          <img src={instagram} alt="instagram" width={40} height={40} />
        </a>
        {isLogin && (
          <Dropdown
            inline
            label={
              <div className="w-[40px] h-[40px] rounded-full bg-[#e9e9e9] flex justify-center items-center">
                <FaUserAlt alt="User settings" />
              </div>
            }
          >
            <Dropdown.Header>
              {isLogin ? (
                <span className="block text-sm">{account.username}</span>
              ) : (
                <span className="block text-sm">Customer</span>
              )}
            </Dropdown.Header>
            {isLogin && (
              <Dropdown.Item onClick={handleRedirectToOrderHistory}>
                Order History
              </Dropdown.Item>
            )}
            <Link to="/login">
              <Dropdown.Item>Use another account</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            {isLogin && (
              <Dropdown.Item onClick={handleLogOut}>Log out</Dropdown.Item>
            )}
          </Dropdown>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">
          <p className="pl-3 hover:text-[#ee4d2d]">Home</p>
        </Link>
        {isLogin && (
          <p
            onClick={handleRedirectToOrderHistory}
            className="cursor-pointer hover:text-[#ee4d2d] ml-3"
          >
            Order History
          </p>
        )}
        {!isLogin && (
          <Link to="/login">
            <p className="ml-3">Login</p>
          </Link>
        )}
        {account.role === "admin" && (
          <Link to="/admin">
            <p className="ml-3">Admin Dashboard</p>
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
