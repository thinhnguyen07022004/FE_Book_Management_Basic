import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchUserAPI } from '../../services/api.service';
const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([])

    // empty array => run once
    useEffect(() => {
        loadUser()
    }, [])

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];

    const loadUser = async () => {
        const res = await fetchUserAPI()
        setDataUsers(res.data)
    }

    return (
        <Table
            columns={columns}
            dataSource={dataUsers}
            rowKey="_id"
        />
    )
}

export default UserTable