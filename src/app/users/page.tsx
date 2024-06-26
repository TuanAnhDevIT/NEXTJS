import UsersTable from "../components/users/users.table";

const UsersPage = async (props: any) => {
  const LIMIT = 5;
  const page = props?.searchParams?.page ?? 1;

  const res = await fetch(
    `http://localhost:8000/users?_page=${page}&_limit=${LIMIT}`,
    { method: "GET", next: { tags: ["list-users"] } }
  );
  const total_item = +(res.headers?.get("X-Total-Count") ?? 0);
  const data = await res.json();
  console.log("check props", props);

  return (
    <div>
      <h1>Users Page</h1>
      <UsersTable
        users={data ? data : []}
        meta={{ current: +page, pageSize: LIMIT, total: total_item }}
      />
    </div>
  );
};

export default UsersPage;
