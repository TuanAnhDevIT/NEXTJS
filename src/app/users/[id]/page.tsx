const DetailUsersPage = (props: any) => {
  console.log("check props", props);
  const { params } = props;
  return (
    <div>
      <h1>DetailUsersPage</h1>
      id = {params?.id}
    </div>
  );
};

export default DetailUsersPage;
