import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/features/user/user_slice";
import Theme from "../components/Theme";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const user_state = useSelector((state) => state.user);
  const mode = useSelector((state) => state.theme.mode);

  if (user_state.loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: mode == "light" ? "white" : "#000050",
          color: mode == "light" ? "dart" : "white",
        }}
      >
        <h2>Loading users...</h2>
        <Theme />
      </div>
    );
  }

  if (user_state.error) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: mode == "light" ? "white" : "#000050",
          color: "red",
        }}
      >
        <h2>Error while fetching users</h2>
        <h3>{user_state.error}</h3>
        <Theme />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: mode == "light" ? "white" : "#000050",
        color: mode == "light" ? "black" : "white",
      }}
    >
      <h2>List of users</h2>
      {user_state.users.map((user) => (
        <div key={user.id} style={{ width: "200px", marginTop: "10px" }}>
          <h3>Id: {user.id}</h3>
          <h3>Username: {user.username}</h3>
        </div>
      ))}
      <Theme />
    </div>
  );
};
export default User;
