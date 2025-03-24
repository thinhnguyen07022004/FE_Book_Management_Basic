
import React from 'react'
import { useState } from "react"
import { Button, Input, Modal, notification } from "antd"
import { createUser } from '../../services/api.service'


const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(true)

    const handleSubmitBtn = async () => {
        const res = await createUser(fullName, email, password, phoneNumber)
        // console.log("check res1", res)
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
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhoneNumber("")
    }
    return (
        <Modal title="Update User"
            open={isModalOpen}
            onOk={handleSubmitBtn}
            onCancel={reserAndLoseModal}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phoneNumber}
                        onChange={(event) => { setPhoneNumber(event.target.value) }}
                    />
                </div>

            </div>
        </Modal>
    )
}

export default UpdateUserModal