import React from 'react';
import {Layout, Menu, Breadcrumb, Avatar, Row, Col, Table} from 'antd';
import {
    UserOutlined, VideoCameraOutlined, DesktopOutlined,
    PieChartOutlined, FileOutlined, TeamOutlined,
} from '@ant-design/icons';

function HomePage() {

    const {
        Header, Content,
        Footer, Sider
    } = Layout;

    const menuItems = [
        {
            key: '1',
            icon: <PieChartOutlined/>,
            label: <span className="nav-text">Option 1</span>
        }, {
            key: '2',
            icon: <DesktopOutlined/>,
            label: <span className="nav-text">Option 2</span>
        },
        {
            key: '3',
            icon: <VideoCameraOutlined/>,
            label: <span className="nav-text">nav 2</span>,
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
    const tcolumns = [
        {
            key: '1',
            title: 'EMail',
            dataIndex: 'email',
        },
        {
            key: '2',
            title: 'First name',
            dataIndex: 'first_name',
            sorter: {
                compare: (a, b) => a.first_name - b.first_name,
                multiple: 3,
            },
        },
        {
            key: '3',
            title: 'Last name',
            dataIndex: 'last_name',
            sorter: {
                compare: (a, b) => a.last_name - b.last_name,
                multiple: 3,
            },
        },
        {
            key: '4',
            title: 'Photo',
            dataIndex: 'avatar',
            render: avatar => (
                <Avatar shape="square" size="large" src={avatar} />
            )
        },
    ]

    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(r=>r.json())
            .then(json => {
                setUsers(json.data);
            }).catch(err =>{
                console.warn(err);
                alert(err)
            })
    })
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

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
                <Menu items={menuItems} theme="dark" mode="inline" defaultSelectedKeys={['4']}/>

            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    <Row>
                        <Col span={24} offset={23}>
                            <Avatar shape="square" size="large" icon={<UserOutlined/>}/>
                        </Col></Row>
                </Header>
                <Content style={{margin: '24px 16px 0'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Table columns={tcolumns} dataSource={users} onChange={onChange}/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Oleg ©2023 Created by Oleg Ushakov</Footer>
            </Layout>
        </Layout>
);
}

export default HomePage;
