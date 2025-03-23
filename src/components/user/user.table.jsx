import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { fetchUserAPI } from '../../services/api.service';
const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([])

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
    }

    return (
        <Table columns={columns} dataSource={dataUsers} />
    )
}

export default UserTable