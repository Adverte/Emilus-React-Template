import React from 'react';
import {Layout, Menu, Breadcrumb, Avatar, Row, Col, Table} from 'antd';
import {
    UserOutlined, VideoCameraOutlined, DesktopOutlined,
    PieChartOutlined, FileOutlined, TeamOutlined,
} from '@ant-design/icons';
import Dashboard from "../views/app-views/components/feedback/progress/Dashboard";
import ErrorPage1 from "../views/auth-views/errors/error-page-1";
import ErrorPage2 from "../views/auth-views/errors/error-page-2";

function HomePage() {
    return (
        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <ErrorPage2/>
        </div>
    );
}

export default HomePage;
