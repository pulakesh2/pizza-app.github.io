import React from "react";
import { useSelector } from "react-redux";

const UserName = () => {
  const userName = useSelector((store) => store.user.userName);

  if (!userName) return null;
  return (
    <div className="hidden md:block text-sm font-semibold">{userName}</div>
  );
};

export default UserName;
