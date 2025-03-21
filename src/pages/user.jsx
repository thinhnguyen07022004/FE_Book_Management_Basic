import UserInput from "../components/user/user.input"
import UserTable from "../components/user/user.table"

const UserPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserInput />
            <UserTable />
        </div>
    )
}

export default UserPage