"use client";

import { IUser } from "@/types/backend";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";

interface IProps {
  users: IUser[] | [];
  meta: {
    current: number;
    pageSize: number;
    total: number;
  };
}
const UsersTable = (props: IProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { users, meta } = props;

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (users) {
      setIsFetching(false);
    }
  }, [users]);

  const onChange = (pagination: any, filters: any, sorter: any) => {
    if (pagination && pagination.current) {
      const params = new URLSearchParams(searchParams);
      params.set("page", pagination.current);
      replace(`${pathname}?${params.toString()}`);
      setIsFetching(true);
    }
  };

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
        loading={isFetching}
        rowKey="id"
        bordered
        dataSource={users}
        columns={columns}
        onChange={onChange}
        pagination={{
          ...meta,
          showTotal(total, range) {
            return (
              <div>
                {range[0]}-{range[1]} trên {total} hàng
              </div>
            );
          },
        }}
      />
    </div>
  );
};

export default UsersTable;
