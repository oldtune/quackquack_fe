import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarItemProps,
  NavbarProps,
} from "../../Components/Navbar/Navbar";
import "./MainPage.css";

export const MainPage: React.FC = () => {
  const navbarItems: NavbarItemProps[] = [
    { key: "home", label: <NavLink to="/">Home</NavLink> },
    { key: "blog", label: <NavLink to="/blog">Blog</NavLink> },
    // { key: "about", label: <NavLink to="/about">About</NavLink> },
  ];

  let location = useLocation();
  console.log(location);

  const navbarProps: NavbarProps = {
    items: navbarItems,
    selectedKeys: [],
  };

  return (
    <Layout>
      <Header>
        <Navbar {...navbarProps} />
      </Header>
      <Content>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
};
