import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
    AppstoreOutlined, AudioOutlined, MailOutlined, SettingOutlined,
    AliwangwangOutlined, LoginOutlined,
    AuditOutlined
} from '@ant-design/icons';
import { Menu, message } from 'antd';
import { Children, useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logoutAPI } from '../../services/api.service';


const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    const navigate = useNavigate()

    const { user, setUser } = useContext(AuthContext)

    const handleLogout = async () => {
        const res = await logoutAPI();
        if (res.data) {
            // clear data
            localStorage.removeItem("access_token");
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: "",
            })
            message.success("Đăng xuất thành công")
            // redirect to home
            navigate("/")
        }
    }

    const items = [
        {
            label: <Link href to={'/'}>Home</Link>,
            key: 'Home',
            icon: <MailOutlined />,
        },
        {
            label: <Link href to={'/users'}>Users</Link>,
            key: 'Users',
            icon: <AppstoreOutlined />,
        },
        {
            label: <Link href to={'/books'}>Books</Link>,
            key: 'Books',
            icon: <AuditOutlined />,
        },
        ...(!user.id ? [{
            label: <Link href to={'/login'}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),
        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={handleLogout}>Đăng xuất</span>,
                    key: 'logout',
                }
            ]
        }] : [])
    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
}

export default Header