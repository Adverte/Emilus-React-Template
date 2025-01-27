import React from 'react';
import {Avatar, Table, Button} from 'antd';

function TickerTable() {

    const tcolumns = [
        {
            key: '1',
            title: 'Ticker',
            dataIndex: 'ticker',
        },
        {
            key: '2',
            title: 'LegalLong',
            dataIndex: 'legalLong',
            sorter: {
                compare: (a, b) => a.legalLong - b.legalLong,
                multiple: 3,
            },
        },
        {
            key: '3',
            title: 'Legal Short',
            dataIndex: 'legalLongQuantity',
            sorter: {
                compare: (a, b) => a.legalShort - b.legalShort,
                multiple: 3,
            },
        },
        {
            key: '4',
            title: 'Legal Short',
            dataIndex: 'legalLongQuantityPercent',
            sorter: {
                compare: (a, b) => a.legalShort - b.legalShort,
                multiple: 3,
            },
        },
        {
            key: '5',
            title: 'Derivative Update Time',
            dataIndex: 'date',
            // sorter: {
            //     compare: (a, b) => a.derivative_update_time - b.derivative_update_time,
            //     multiple: 3,
            // },
        },
    ]

    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        let isMounted = true; // Variable to track if the component is still mounted

        // fetch('https://reqres.in/api/users')
        fetch('http://localhost:8080/moex/tickers/last')
            .then(r => r.json())
            .then(json => {
                if (isMounted) {
                    setUsers(json);
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
    }, [])

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    function updateOnClick() {
        fetch('http://localhost:8080/moex/update')
            .catch(err => {
                console.warn(err);
                alert(err);
            });
    }

    return (
        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <Button type="primary" onClick={updateOnClick}>
                Refresh
            </Button>
            <Table columns={tcolumns} dataSource={users} onChange={onChange}/>
        </div>
    );
}

export default TickerTable;
