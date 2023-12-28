import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(true);
  const menu = [
    {
      key: 1,
      label: "主页",
    },
    {
      key: 2,
      label: "个人简历",
    },
    {
      key: 3,
      label: "工具箱",
    },
    {
      key: 4,
      label: "GPT",
    },
    {
      key: 5,
      label: "组件库",
    },
  ];
  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menu}
        />
      </Sider>
    </Layout>
  );
}

export default App;
