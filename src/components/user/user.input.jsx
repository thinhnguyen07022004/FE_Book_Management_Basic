import { Button, Input, Modal, notification } from "antd"
import { useState } from "react"
import { createUser } from "../../services/api.service"

const UserInput = (props) => {
    const { loadUser } = props
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleSubmitBtn = async () => {
        const res = await createUser(fullName, email, password, phoneNumber)
        // console.log("check res1", res)
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
            reserAndLoseModal()
            await loadUser()
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
        <div className="user-form" style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button
                    onClick={() => { setIsModalOpen(true) }}
                    type="primary"> Create User </Button>
            </div>
            <Modal title="Basic Modal"
                open={isModalOpen}
                onOk={handleSubmitBtn}
                onCancel={reserAndLoseModal}
                maskClosable={false}
                okText={"CREATE"}            >
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
        </div>
    )
}

export default UserInput