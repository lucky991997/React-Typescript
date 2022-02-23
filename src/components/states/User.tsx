import React, { useState } from "react";
type AuthUserProps = {
  name: string;
  email: string;
};
const User = () => {
  // const [user, setUser] = useState<AuthUserProps | null>(null);
  //useState nhận 1 generic  vs initial values có thể là AuthUserProps or null
  const [user, setUser] = useState<AuthUserProps>({} as AuthUserProps);
  //useState nhận 1 generic  vs initial values có thể là AuthUserProps
  const handleLogIn = () => {
    setUser({
      name: "Trần Quốc Tuấn",
      email: "quoctuan090997@gmail.com",
    });
  };
  // const handleLogOut = () => {
  //     setUser(null)
  // };
  return (
    <>
      <button onClick={handleLogIn} style={{ padding: 10, marginRight: 20 }}>
        Log in
      </button>
      {/* <button onClick={handleLogOut} style={{ padding: 10 }}>
        Log out
      </button> */}
      <h2>Username: {user.name}</h2>
      <h2>Email: {user.email}</h2>
    </>
  );
};

export default User;
