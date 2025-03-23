import UserInput from "../components/user/user.input"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchUserAPI } from '../services/api.service';

// lift-up state
const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([])

    // empty array => run once
    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await fetchUserAPI()
        setDataUsers(res.data)
    }
    return (
        <div style={{ padding: "20px" }}>
            <UserInput loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage