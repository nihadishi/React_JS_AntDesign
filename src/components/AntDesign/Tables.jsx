
import { Button, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ConfigProvider,Modal  } from 'antd';
import moment from 'moment/moment';

const Tables = () => {
    const [datas, setdatas] = useState([])
    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/orders')
            .then(res => { setdatas(res.data) })
            .catch(err => { console.log("ERROR") })

    }, [])

const DeleteItems = (id) => {
    setdatas(datas.filter(res => res.id !== id))
}
const columns = [
    {
        title: 'CUSTOMER-ID',
        dataIndex: 'customerId',
        filters: [
            {
              text: 'SPLIR',
              value: 'SPLIR',
            },
            {
              text: 'WARTH',
              value: 'WARTH',
            },
            {
              text: 'MORE',
              value: 'Submenu',
              children: [
                // datas.map((e)=>{
                //     {
                //         text: e.customerId,
                //         value: e.customerId,
                //     }
                // })
                {
                  text: 'LEHMS',
                  value: 'LEHMS',
                },
                {
                  text: 'TRADH',
                  value: 'TRADH',
                },
                {
                  text: 'VINET',
                  value: 'VINET',
                },
                {
                  text: 'QUICK',
                  value: 'QUICK',
                },
                {
                  text: 'LONEP',
                  value: 'LONEP',
                },
              ],
            },
          ],
          onFilter: (value,e) => e.customerId == value
    },
    {
        title: 'FREIGHT',
        dataIndex: 'freight',
        sorter: (a,b) => a.freight-b.freight
    },
    {
        title: 'orderDate',
        dataIndex: 'orderDate',
        sorter: (a,b) => a.orderDate.localeCompare(b.orderDate),
        render: (e)=>{
          return(<>
          <div>{moment(e).format("MMM Do YYYY, h:mm:ss a")}</div>
          </>)
        }
    },
    {
        title: 'requiredDate',
        dataIndex: 'requiredDate',
        render: (e)=>{
          return(<>
          <div>{moment(e).format("MMM Do YYYY, h:mm:ss a")}</div>
          </>)
        }
    },
    {
        title: 'shippedDate',
        dataIndex: 'shippedDate',
        render: (e)=>{
          return(<>
          <div>{moment(e).format("MMM Do YYYY, h:mm:ss a")}</div>
          </>)
        }
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
