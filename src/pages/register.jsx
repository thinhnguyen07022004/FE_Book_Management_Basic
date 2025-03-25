import { Button, Form, Input, notification } from 'antd'
import { registerUserAPI } from '../services/api.service';
import { Navigate, useNavigate } from 'react-router-dom';

const RegsiterPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()

    const onFinish = async (values) => {

        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone
        )
        if (res.data) {
            notification.success({
                message: "Register User",
                description: "Đăng ký user thành công"
            })
            navigate("/login")
        } else {
            notification.error({
                message: "Register User Error",
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <Form
            form={form}
            layout='vertical'
            name="basic"
            onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
            <div style={{
                margin: "50px",
            }}>


                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/\d+/g),
                            message: "Wrong format!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <div>
                    <Button
                        onClick={() => { form.submit }}
                        type="primary" htmlType="submit">
                        Đăng ký
                    </Button>
                    <Button onClick={() => {
                        form.setFieldsValue({
                            email: "tuuju2@gmail.com",
                            fullName: "thinh"
                        })
                        console.log("check form: ", form.getFieldsValue())
                    }}>
                        Test
                    </Button>
                </div>
            </div>
        </Form>
    )
}

export default RegsiterPage