import React, { Component } from "react";
import { Tabs } from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const { TabPane } = Tabs;

// Drag & Drop node
class TabNode extends React.Component {
  render() {
    const { connectDragSource, connectDropTarget, children } = this.props;

    return connectDragSource(connectDropTarget(children));
  }
}

const cardTarget = {
  drop(props, monitor) {
    const dragKey = monitor.getItem().index;
    const hoverKey = props.index;

    if (dragKey === hoverKey) {
      return;
    }

    props.moveTabNode(dragKey, hoverKey);
    monitor.getItem().index = hoverKey;
  }
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const WrapTabNode = ({ children }) => {
  const [{ isDragging }, connectDragSource] = useDrag(() => ({
    item: { type: 'DND_NODE' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, connectDropTarget] = useDrop(() => ({
    accept: 'DND_NODE',
    drop: (item) => {
      // Handle drop logic
    },
    collect: (monitor) => ({}),
  }));

  return connectDropTarget(connectDragSource(children));
};

class DraggableTabs extends React.Component {
  state = {
    order: []
  };

  moveTabNode = (dragKey, hoverKey) => {
    const newOrder = this.state.order.slice();
    const { children } = this.props;

    React.Children.forEach(children, c => {
      if (newOrder.indexOf(c.key) === -1) {
        newOrder.push(c.key);
      }
    });

    const dragIndex = newOrder.indexOf(dragKey);
    const hoverIndex = newOrder.indexOf(hoverKey);

    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragKey);

    this.setState({
      order: newOrder
    });
  };

  renderTabBar = (props, DefaultTabBar) => (
    <DefaultTabBar {...props}>
      {node => (
        <WrapTabNode
          key={node.key}
          index={node.key}
          moveTabNode={this.moveTabNode}
        >
          {node}
        </WrapTabNode>
      )}
    </DefaultTabBar>
  );

  render() {
    const { order } = this.state;
    const { children } = this.props;

    const tabs = [];
    React.Children.forEach(children, c => {
      tabs.push(c);
    });

    const orderTabs = tabs.slice().sort((a, b) => {
      const orderA = order.indexOf(a.key);
      const orderB = order.indexOf(b.key);

      if (orderA !== -1 && orderB !== -1) {
        return orderA - orderB;
      }
      if (orderA !== -1) {
        return -1;
      }
      if (orderB !== -1) {
        return 1;
      }

      const ia = tabs.indexOf(a);
      const ib = tabs.indexOf(b);

      return ia - ib;
    });

    return (
      <DndProvider backend={HTML5Backend}>
        <Tabs renderTabBar={this.renderTabBar} {...this.props}>
          {orderTabs}
        </Tabs>
      </DndProvider>
    );
  }
}

export class CustomTabBarNode extends Component {
  render() {
    return (
      <DraggableTabs>
        <TabPane tab="tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </DraggableTabs>
    );
  }
}

export default CustomTabBarNode;
