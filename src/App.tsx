import { Layout, Menu } from "antd";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import UserCard from "./components/UserCard";
import ReactIcon from "@/assets/react.svg";
import TailwindIcon from "@/assets/tailwindLogo.png";
import RspackLogo from "@/assets/rspackLogo.png";
import style from "@/styles/app.module.less";
const { Sider, Content, Header, Footer } = Layout;
const menuRaw = [
  {
    key: "article",
    label: "文章",
    showCard: true,
  },
  {
    key: "resume",
    label: "个人简历",
  },
  {
    key: "tools",
    label: "工具箱",
    subMenu: [
      { key: "1", label: "数据转换" },
      { key: "1", label: "数据转换" },
      { key: "1", label: "数据转换" },
    ],
  },
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
  let matchedMenu = menuRaw.find((item) => item.key === menuSelectedKeys[0]);
  let subMenu = matchedMenu?.subMenu;
  let showCard = matchedMenu.showCard;
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
          {showCard ? <UserCard></UserCard> : null}
        </Sider>
      </Layout>
      <Footer className="flex items-center justify-center gap-[8px]">
        powered by
        {techList.map((item) => (
          <img
            key={item.name}
            src={item.img}
            alt=""
            className={`inline-block w-[35px] h-[35px] rounded-full bg-white p-[5px] cursor-pointer ${style.footerImg}`}
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
