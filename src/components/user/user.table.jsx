import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Popconfirm, notification } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUsers, loadUser } = props

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)

    const [dataUpdate, setDataUpdate] = useState(null)

    const [isModalViewOpen, setIsModalViewOpen] = useState(false)

    const [dataView, setDataView] = useState(null)


    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a
                        onClick={() => {
                            setIsModalViewOpen(true)
                            setDataView(record)
                        }}
                    >
                        {record._id}
                    </a >
                )
            }
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setIsModalUpdateOpen(true)
                            setDataUpdate(record)
                        }}
                        style={{ cursor: "pointer", color: "orange" }}
                    />
                    <Popconfirm
                        title="Xóa người dùng"
                        description="Bạn có chắc xóa người dùng này?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                        placement='left'
                    >
                        <DeleteOutlined
                            style={{ cursor: "pointer", color: "red" }}
                        />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const handleDelete = async (id) => {
        const res = await deleteUserAPI(id)
        if (res.data) {
            notification.success({
                message: "Delete User",
                description: "Xoá user thành công"
            })
            await loadUser()
        } else {
            notification.error({
                message: "Error delete User",
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey="_id"
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                dataView={dataView}
                setDataView={setDataView}
                isModalViewOpen={isModalViewOpen}
                setIsModalViewOpen={setIsModalViewOpen}
            />
        </>
    )
}

export default UserTable