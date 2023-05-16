
import { Button, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ConfigProvider,Modal  } from 'antd';

const Tables = () => {
    const [datas, setdatas] = useState([])
    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/orders')
            .then(res => { setdatas(res.data) })
            .catch(err => { console.log("ERROR") })

    }, [])


    const confirmDelete = () => {
            
   }
const DeleteItems = (id) => {
    setdatas(datas.filter(res => res.id !== id))
}
const columns = [
    {
        title: 'CUSTOMER-ID',
        dataIndex: 'customerId',
        filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: '...',
              value: 'Submenu',
              children: [
                {
                  text: 'Green',
                  value: 'Green',
                },
                {
                  text: 'Black',
                  value: 'Black',
                },
              ],
            },
          ],
          onFilter: (e) => e.customerId.indexOf()
    },
    {
        title: 'FREIGHT',
        dataIndex: 'freight',
        sorter: (a,b) => a.freight-b.freight
    },
    {
        title: 'orderDate',
        dataIndex: 'orderDate',
        sorter: (a,b) => a.freight-b.freight
    },
    {
        title: 'requiredDate',
        dataIndex: 'requiredDate',
    },
    {
        title: 'shippedDate',
        dataIndex: 'shippedDate',
    },
    //     sorter: (a, b) => a.contactName.localeCompare(b.contactName)
    {
        title: 'CITY',
        dataIndex: ['shipAddress', 'city']
    },
    {
        title: 'COUNTRY',
        dataIndex: ['shipAddress', 'country']
    },
    {
        title: "DELETE",
        render: (rec) => {
            console.log(rec);
            return <>
                <Button onClick={() => { DeleteItems(rec.id) }} style={{ backgroundColor: "red", color: "white" }} >Delete</Button>
            </>
        }
    }
]
return (<>
    <Table rowClassName={(record)=>(record.requiredDate < record.shippedDate ?'red':'green')}   columns={columns} dataSource={datas} />
</>
)
}

export default Tables
