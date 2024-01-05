import { Layout, Menu } from "antd";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import UserCard from "./components/UserCard";
import ReactIcon from "@/assets/react.svg";
import TailwindIcon from "@/assets/tailwindLogo.svg";
import RspackLogo from "@/assets/rspackLogo.png";
import style from "./app.module.less";
const { Sider, Content, Header, Footer } = Layout;
const menuRaw = [
  // {
  //   key: "home",
  //   label: "主页",
  // },
  {
    key: "article",
    label: "文章",
  },
  {
    key: "2",
    label: "个人简历",
  },
  {
    key: "3",
    label: "工具箱",
    subMenu: [{ key: "1", label: "数据转换" }],
  },
  // {
  //   key: "4",
  //   label: "GPT",
  // },
  // {
  //   key: "5",
  //   label: "组件库",
  // },
  {
    key: "test",
    label: "测试页面",
  },
];
const menu = menuRaw.map((item) => ({
  key: item.key,
  label: item.label,
}));
const techList = [
  {
    img: ReactIcon,
    name: "react",
    url: "https://reactjs.org/",
  },
  {
    img: RspackLogo,
    name: "react",
    url: "https://www.rspack.dev/zh/",
  },
  {
    img: TailwindIcon,
    name: "tailwind",
    url: "https://tailwindcss.com/",
  },
];
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuSelectedKeys, setMenuSelectedKeys] = useState<string[]>([
    location.pathname.split("/")[1],
  ]);
  const subMenu = menuRaw.find(
    (item) => item.key === menuSelectedKeys[0]
  )?.subMenu;
  return (
    <Layout className="min-h-screen max-w-full overflow-hidden">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={menuSelectedKeys}
          items={menu}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(item) => {
            navigate(item.key);
            setMenuSelectedKeys([item.key]);
          }}
        />
      </Header>
      <Layout className="flex gap-10 items-start h-full p-[20px]">
        <Sider theme="light" className="rounded-lg overflow-hidden">
          {" "}
          {!!subMenu ? <Menu items={subMenu} /> : null}
        </Sider>
        <Content className="flex-grow self-stretch rounded-lg overflow-hidden p-[20px] bg-white">
          <Outlet />
        </Content>
        <Sider theme="light" className="rounded-lg overflow-hidden">
          {" "}
          <UserCard></UserCard>
        </Sider>
      </Layout>
      <Footer className="bg-white text-center">
        {techList.map((item) => (
          <img
            key={item.name}
            src={item.img}
            alt=""
            className={`inline-block w-[35px] h-[35px] rounded-full   bg-gray-100 p-[5px] cursor-pointer ${style.footerImg}`}
            onClick={() => {
              window.open(item.url);
            }}
          />
        ))}
      </Footer>
    </Layout>
  );
}

export default App;
