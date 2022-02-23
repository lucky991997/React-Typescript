import React, { useState } from "react";

type LoggedInProps = {
  name: string;
};

const LoggedIn = ({ name }: LoggedInProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <button onClick={handleLogIn} style={{ padding: 10, marginRight: 20 }}>
        Log in
      </button>
      <button onClick={handleLogOut} style={{ padding: 10 }}>
        Log out
      </button>
      {isLoggedIn ? (
        <h2>Welcome to - {name}</h2>
      ) : (
        <h2>Hi Guest! Can you Login ? </h2>
      )}
    </>
  );
};

export default LoggedIn;
