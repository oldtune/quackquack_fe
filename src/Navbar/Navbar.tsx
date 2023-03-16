import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

export const Navbar: React.FC = () => {
  return (
    <Header>
      <div id="logo" />
      <Menu theme="dark"></Menu>
    </Header>
  );
};
