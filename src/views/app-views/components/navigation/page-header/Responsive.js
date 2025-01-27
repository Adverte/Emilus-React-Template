import React from "react";
import { Tabs, Button, Statistic, Descriptions } from "antd";
import { PageHeader } from '@ant-design/pro-layout';

const { TabPane } = Tabs;

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Association">
      <a href="/#">421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="Remarks">
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: "flex",
      width: "max-content",
      justifyContent: "flex-end"
    }}
  >
    <Statistic
      title="Status"
      value="Pending"
      style={{
        marginRight: 32
      }}
    />
    <Statistic title="Price" prefix="$" value={568.08} />
  </div>
);

const Content = ({ children, extra }) => {
  return (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
};

class Responsive extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)"
          }}
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>
          ]}
          footer={
            <Tabs defaultActiveKey="1">
              <TabPane tab="Details" key="1" />
              <TabPane tab="Rule" key="2" />
            </Tabs>
          }
        >
          <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader>
      </div>
    );
  }
}

export default Responsive;
