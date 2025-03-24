import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { dataView, setDataView, isModalViewOpen, setIsModalViewOpen } = props

    return (
        <Drawer title="View Detail User"
            onClose={() => {
                setDataView(null)
                setIsModalViewOpen(false);
            }} open={isModalViewOpen}
        >
            {dataView ? <>
                <p>Id: {dataView._id}</p>
                <br />
                <p>Full Name: {dataView.fullName}</p>
                <br />
                <p>Email: {dataView.email}</p>
                <br />
                <p>Phone Number: {dataView.phone}</p>
            </>
                :
                <>
                    <p>Không có dữ liệu </p>
                </>
            }

        </Drawer>

    )
}

export default ViewUserDetail