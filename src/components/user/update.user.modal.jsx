
import React from 'react'
import { useState, useEffect } from "react"
import { Button, Input, Modal, notification } from "antd"
import { createUser } from '../../services/api.service'


const UpdateUserModal = (props) => {
    const [id, setId] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props

    // next dataUpdate != prev dataUpdate
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])

    const handleSubmitBtn = async () => {
        const res = await createUser(fullName, email, password, phoneNumber)
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
            reserAndLoseModal()
            // await loadUser()
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const reserAndLoseModal = () => {
        setIsModalUpdateOpen(false)
        setId("")
        setFullName("")
        setPhone("")
        setDataUpdate(null)
    }


    return (
        <Modal title="Update User"
            open={isModalUpdateOpen}
            onOk={handleSubmitBtn}
            onCancel={reserAndLoseModal}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>ID</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>

            </div>
        </Modal>
    )
}

export default UpdateUserModal