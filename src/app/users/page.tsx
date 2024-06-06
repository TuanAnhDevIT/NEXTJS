import UsersTable from "../components/users/users.table";

const UsersPage = async (props: any) => {
  const calculatePageCount = (pageSize: number, totalCount: number) => {
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
  };
  const LIMIT = 1;
  const page = props?.searchParams?.page ?? 1;

  const res = await fetch(
    `http://localhost:8000/users?_page=${page}&_limit=${LIMIT}`,
    { method: "GET" }
  );
  const total_item = +(res.headers?.get("X-Total-Count") ?? 0);
  const total_page = calculatePageCount(LIMIT, total_item);
  const data = await res.json();
  console.log("check data", data);
  console.log("check props", props);

  return (
    <div>
      <h1>Users Page</h1>
      <UsersTable
        users={data ? data : []}
        meta={{ current: +page, pageSize: LIMIT, total: total_page }}
      />
    </div>
  );
};

export default UsersPage;
