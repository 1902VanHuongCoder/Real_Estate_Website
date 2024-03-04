import React from "react";
import { useNavigate } from "react-router-dom";

const NavItems = ({ content }) => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/real+estate/search+result/query=?${content}`, {
      state: content,
    });
  };
  return <li onClick={handleSearch} className="mb-2 hover:font-medium">{content}</li>;
};

export default NavItems;
