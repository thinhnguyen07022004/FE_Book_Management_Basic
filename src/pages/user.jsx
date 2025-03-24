import UserInput from "../components/user/user.input"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchUserAPI } from '../services/api.service';

// lift-up state
const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [total, setTotal] = useState(0)

    // empty array => run once
    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await fetchUserAPI(current, pageSize)
        if (res.data) {
            setDataUsers(res.data.result)
            setCurrent(res.data.meta.current)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }

    }
    return (
        <div style={{ padding: "20px" }}>
            <UserInput loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUsers={dataUsers}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                setTotal={setTotal}
            />
        </div>
    )
}

export default UserPage