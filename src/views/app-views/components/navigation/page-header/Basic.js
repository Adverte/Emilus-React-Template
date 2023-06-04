import React from "react";
import { PageHeader } from '@ant-design/pro-layout';

class Basic extends React.Component {
  render() {
    return (
      <PageHeader
        style={{
          border: "1px solid rgb(235, 237, 240)"
        }}
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    );
  }
}

export default Basic;
