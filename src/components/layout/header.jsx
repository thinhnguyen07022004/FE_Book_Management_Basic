import { Link, NavLink } from 'react-router-dom'
import {
    AppstoreOutlined, AudioOutlined, MailOutlined, SettingOutlined,
    AliwangwangOutlined, LoginOutlined,
    AuditOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Children, useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';


const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const { user } = useContext(AuthContext)

    console.log("check user:", user)
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
                    label: 'Đăng xuất',
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