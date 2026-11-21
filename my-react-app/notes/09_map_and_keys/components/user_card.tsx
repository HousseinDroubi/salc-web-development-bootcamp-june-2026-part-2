export type UserCardProps = {
  id: number;
  username: string;
  age: number;
};

const UserCard = ({ id, username, age }: UserCardProps) => {
  return (
    <>
      <p>Id: {id}</p>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
      <hr />
    </>
  );
};

export default UserCard;
