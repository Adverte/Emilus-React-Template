import React from 'react';
import {Avatar, Table, Button} from 'antd';

function ScannerMoexFortsTable() {

    // Тикер, Процент объема, объем, изменение цены
    // Тикер, Физики, Юрик, Объем, Цена

    const tcolumns = [
        {
            key: '1',
            title: 'Тикер',
            dataIndex: 'ticker',
        },
        {
            key: '2',
            title: 'Физик',
            // dataIndex: 'person',
            render: (text, record) => (
                <div>
                    <p>{record.person}  </p>
                    <p>{record.legal}   </p>
                    <p>{record.volume}  </p>
                </div>
            ),
        },
        {
            key: '3',
            title: 'Юрик',
            dataIndex: 'legal',
        },
        {
            key: '4',
            title: 'Объем',
            dataIndex: 'volume',
        },
        {
            key: '5',
            title: 'Цена',
            dataIndex: 'price',
        },
    ]

    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        let isMounted = true; // Variable to track if the component is still mounted

        // fetch('https://reqres.in/api/users')
        // fetch('http://localhost:8080/moex/tickers/last')
        fetch('http://localhost:8000/moex/tickers')
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

export default ScannerMoexFortsTable;
