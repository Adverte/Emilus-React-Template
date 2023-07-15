import React from 'react';
import {Avatar, Table} from 'antd';
function UserTable() {


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
                <Avatar shape="square" size="large" src={avatar}/>
            )
        },
    ]

    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        let isMounted = true; // Variable to track if the component is still mounted

        fetch('https://reqres.in/api/users')
            .then(r => r.json())
            .then(json => {
                if (isMounted) {
                    setUsers(json.data);
                }
            })
            .catch(err => {
                console.warn(err);
                alert(err);
            });
        return () => {
            // Cleanup function to cancel any ongoing fetch request
            isMounted = false;
        };
    })

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <Table columns={tcolumns} dataSource={users} onChange={onChange}/>
        </div>
    );
}

export default UserTable;
