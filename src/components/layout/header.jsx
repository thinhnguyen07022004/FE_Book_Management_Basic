import { Link, NavLink } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';


const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

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
            icon: <SettingOutlined />,
        },
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