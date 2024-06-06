"use client";

import { IUser } from "@/types/backend";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface IProps {
  users: IUser[] | [];
}
const UsersTable = (props: IProps) => {
  const { users } = props;

  const columns: ColumnsType<IUser> = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
  ];

  return (
    <div>
      <Table
        bordered
        dataSource={users}
        columns={columns}
        pagination={{
          current: 1,
          pageSize: 10,
          total: 20,
          showTotal(total, range) {
            return (
              <div>
                {range[0]}-{range[1]} trên {total} hàng
              </div>
            );
          },
        }}
      />
      ;
    </div>
  );
};

export default UsersTable;
