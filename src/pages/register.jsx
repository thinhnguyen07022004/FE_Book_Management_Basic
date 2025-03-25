import { Button, Form, Input } from 'antd'

const RegsiterPage = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("check :", values)
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
                // rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Button
                    onClick={() => { form.submit }}
                    type="primary" htmlType="submit">
                    Đăng ký
                </Button>
            </div>
        </Form>
    )
}

export default RegsiterPage