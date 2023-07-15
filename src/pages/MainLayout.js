import React from 'react';
import {Layout, Menu, Breadcrumb, Avatar, Row, Col} from 'antd';
import {
    UserOutlined, VideoCameraOutlined, DesktopOutlined,
    PieChartOutlined, FileOutlined, TeamOutlined,
} from '@ant-design/icons';
import {Link, Outlet} from "react-router-dom";
import Search from "antd/es/input/Search";
import SearchBox from "../views/app-views/components/data-entry/select/SearchBox";
import {AppViews} from "../views/app-views";

function MainLayout() {

    const {
        Header, Content,
        Footer, Sider
    } = Layout;

    const menuItems = [
        {
            key: '1',
            icon: <PieChartOutlined/>,
            label: <Link to="/"><span className="nav-text">Main</span></Link>,
        }, {
            key: '2',
            icon: <DesktopOutlined/>,
            label: <Link to="/table"> <span className="nav-text">Table</span> </Link>,
        },
        {
            key: '3',
            icon: <VideoCameraOutlined/>,
            label: <Link to="/smth"><span className="nav-text">Smth. else</span></Link>,
        },
        {
            key: 'sub1',
            icon: <UserOutlined/>,
            label: 'User',
            children: [
                {key: 'submenu-item-1', label: 'Tom'},
                {key: 'submenu-item-2', label: 'Bill'},
                {key: 'submenu-item-3', label: 'Alex'},
            ],
        },
        {
            key: 'sub2',
            icon: <TeamOutlined/>,
            label: 'Team',
            children: [
                {key: 'submenu-item-4', label: 'Team1'},
                {key: 'submenu-item-5', label: 'Team2'},
            ],
        },
        {
            key: '4',
            icon: <FileOutlined/>,
            label: <span className="nav-text">File</span>,
        },
    ];

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider breakpoint="lg" collapsedWidth="0"
                   onBreakpoint={broken => {
                       console.log(broken);
                   }}
                   onCollapse={(collapsed, type) => {
                       console.log(collapsed, type);
                   }}>
                <div className="logo"/>
                <Menu items={menuItems} theme="dark" mode="inline" defaultSelectedKeys={['1']}/>

            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    <Row>
                        <Col span={12} offset={2}>
                            {/*<SearchBox/>*/}
                        </Col>
                        <Col span={12} offset={20}>
                            <Avatar shape="square" size="large" icon={<UserOutlined/>}/>
                        </Col>
                    </Row>
                </Header>
                <Content style={{margin: '24px 16px 0'}}>

                    {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                    {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <Outlet/>
                    {/*<div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Table columns={tcolumns} dataSource={users} onChange={onChange}/>
                    </div>*/}
                </Content>
                <Footer style={{textAlign: 'center'}}>Oleg ©2023 Created by Oleg Ushakov</Footer>
            </Layout>
        </Layout>
    );

}
export default MainLayout;
