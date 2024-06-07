"use client";
import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link href={"/"}>Home Page</Link>,
    key: "homepage",
    icon: <MailOutlined />,
  },
  {
    label: <Link href={"/users"}>Manage Users</Link>,
    key: "users",
    icon: <MailOutlined />,
  },
  {
    label: <Link href={"/blogs"}>Manage Blogs</Link>,
    key: "blogs",
    icon: <AppstoreOutlined />,
  },
];

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [current, setCurrent] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/":
        setCurrent("homepage");
        break;
      case "/users":
        setCurrent("users");
        break;
      case "/blogs":
        setCurrent("blogs");
        break;
      default:
        setCurrent("homepage");
        break;
    }
  }, [pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
