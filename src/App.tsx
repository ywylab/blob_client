import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const headMenu = [1, 2, 3, 4].map((item) => ({
    key: item,
    label: "导航" + item,
  }));
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={headMenu}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <div className="text-blue-50 ">123</div>
    </Layout>
  );
}

export default App;
