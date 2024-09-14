import { LoadingOutlined } from "@ant-design/icons";
import { ConfigProvider, Flex, Spin } from "antd";

const SpinerLoader = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#2196f3",
      },
    }}
  >
    <Flex align="center" gap="middle" style={{ margin: "0 auto" }}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 68 }} spin />} />
    </Flex>
  </ConfigProvider>
);

export default SpinerLoader;
