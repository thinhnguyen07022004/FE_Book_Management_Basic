import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row } from "antd"
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()

    const onFinish = async (values) => {
        alert("me")
    }


    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng Nhập</legend>
                    <Form
                        form={form}
                        layout='vertical'
                        onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[

                                {
                                    required: true,
                                    message: 'Email không được để trống'
                                },
                                {
                                    type: "email",
                                    message: 'Email không đúng định dạng'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Password không được để trống' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Button
                                    onClick={() => { form.submit }}
                                    type="primary" >
                                    Login
                                </Button>
                                <Link to="/">Go to homepage <ArrowRightOutlined /></Link>
                            </div>
                        </Form.Item>

                    </Form>
                    <Divider />
                    <div style={{ textAlign: "center" }}>Chưa tài khoản? <Link href to={"/register"}>Đăng ký tại đây</Link></div>
                </fieldset>
            </Col>
        </Row>

    )
}

export default LoginPage