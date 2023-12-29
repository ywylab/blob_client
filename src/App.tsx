import { Layout, Menu } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserCard from "./components/UserCard";
const { Sider, Content, Header } = Layout;
const menuRaw = [
  {
    key: "home",
    label: "主页",
  },
  {
    key: "/article",
    label: "文章",
    subMenu: [{ key: "1", label: "子路由1" }],
  },
  {
    key: "2",
    label: "个人简历",
  },
  {
    key: "3",
    label: "工具箱",
  },
  {
    key: "4",
    label: "GPT",
  },
  {
    key: "5",
    label: "组件库",
  },
];
const menu = menuRaw.map((item) => ({
  key: item.key,
  label: item.label,
}));
function App() {
  const navigate = useNavigate();
  const [menuSelectedKeys, setMenuSelectedKeys] = useState<string[]>([
    menu[0].key,
  ]);
  const subMenu = menuRaw.find(
    (item) => item.key === menuSelectedKeys[0]
  )?.subMenu;
  console.log(<div></div>);
  return (
    <Layout className="min-h-screen max-w-full overflow-hidden">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={menuSelectedKeys}
          items={menu}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(item) => {
            console.log(item);
            navigate(item.key);
            setMenuSelectedKeys([item.key]);
          }}
        />
      </Header>
      <Layout className="flex gap-10 items-center ">
        <Sider theme="light">
          {" "}
          {!!subMenu ? <Menu items={subMenu} /> : null}
        </Sider>
        <Content className="flex-grow">
          <Outlet />
        </Content>
        <Sider theme="light">
          {" "}
          <UserCard></UserCard>
        </Sider>
      </Layout>
    </Layout>
  );
}

export default App;
