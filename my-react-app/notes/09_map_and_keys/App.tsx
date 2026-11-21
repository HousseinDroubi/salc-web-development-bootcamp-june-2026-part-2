import UserCard, { type UserCardProps } from "./components/user_card";

const App = () => {
  const array: UserCardProps[] = [
    {
      id: 1,
      username: "Houssein",
      age: 29,
    },
    {
      id: 2,
      username: "Ali",
      age: 22,
    },
    {
      id: 3,
      username: "Kamal",
      age: 24,
    },
  ];
  return (
    <div>
      <h2>List of users</h2>
      {array.map((user: UserCardProps) => (
        <UserCard
          key={user.id} // key is not the UserCardProps, but it's required to be unique in the map
          id={user.id}
          username={user.username}
          age={user.age}
        />
      ))}
    </div>
  );
};

export default App;
