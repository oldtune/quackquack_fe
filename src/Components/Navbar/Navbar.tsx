import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

export type NavbarProps = {
  items: NavbarItemProps[];
  selectedKeys: string[];
};

export type NavbarItemProps = {
  key: string;
  label: React.ReactElement;
  icon?: any;
};

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Header>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={[...props.selectedKeys]}
        theme="dark"
        items={props.items}
      ></Menu>
    </Header>
  );
};
