import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { dataView, setDataView, isModalViewOpen, setIsModalViewOpen } = props

    return (
        <Drawer
            width={"40vw"}
            title="View Detail User"
            onClose={() => {
                setDataView(null)
                setIsModalViewOpen(false);
            }} open={isModalViewOpen}
        >
            {dataView ? <>
                <p> Id: {dataView._id}</p>
                <br />
                <p>Full Name: {dataView.fullName}</p>
                <br />
                <p>Email: {dataView.email}</p>
                <br />
                <p>Phone Number: {dataView.phone}</p>
                <br />
                <p>Avatar: </p>
                <br />
                <div>
                    <img
                        height={250}
                        width={300}
                        src={`${import.meta.env.VITE_URL_BACKEND}/images/avatar/${dataView.avatar}`}
                    />
                </div>
                <div>
                    <label htmlFor='btnUpload' style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        Upload Avatar
                    </label>
                    <input type="file" hidden id="btnUpload"></input>
                </div>
            </>
                :
                <>
                    <p>Không có dữ liệu </p>
                </>
            }

        </Drawer >

    )
}

export default ViewUserDetail