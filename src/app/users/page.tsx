import UsersTable from "../components/users/users.table";

const UsersPage = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  console.log("check data", data);

  return (
    <div>
      <h1>Users Page</h1>
      <UsersTable users={data ? data : []} />
    </div>
  );
};

export default UsersPage;
