import { Button, Drawer, message, notification } from 'antd';
import { useState } from 'react';
import { handleUploadFile, updateUserAvatar } from '../../services/api.service';



const ViewUserDetail = (props) => {
    const { dataView, setDataView, isModalViewOpen, setIsModalViewOpen, loadUser } = props

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleChangeImage = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleUpdateAvatarUser = async () => {
        //step 1: Upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar")
        if (resUpload.data) {
            // success
            const newAvatar = resUpload.data.fileUploaded;
            // step 2: Upload avatar
            const resUpdateAvatar = await updateUserAvatar(newAvatar, dataView._id, dataView.fullName, dataView.phone)
            if (resUpdateAvatar.data) {
                setIsModalViewOpen(false)
                setSelectedFile(null)
                setPreview(null)
                await loadUser()

                notification.success({
                    message: "Update user Avatar",
                    description: "Cập nhật avatar thành công"
                })

            } else {
                notification.error({
                    message: "Error Update Avatar",
                    description: JSON.stringify(resUpload.error)
                })
            }
        } else {
            // fail
            notification.error({
                message: "Error Upload File",
                description: JSON.stringify(resUpload.error)
            })
        }
    }

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
                <div style={{
                    marginTop: "10px",
                    height: "100px",
                    width: "150px",
                    border: "1px solid #ccc"
                }}>
                    <img
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain"
                        }}
                        src={`${import.meta.env.VITE_URL_BACKEND}/images/avatar/${dataView.avatar}`}
                    />
                </div>
                <div >
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
                    <input type="file" hidden id="btnUpload" onChange={(event) => { handleChangeImage(event) }}></input>
                </div>
                {preview &&
                    <>
                        <div style={{
                            marginTop: "10px",
                            height: "100px",
                            width: "150px",
                            marginBottom: "15px"
                        }}>
                            <img
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "contain"
                                }}
                                src={preview}
                            />
                        </div>
                        <Button
                            type="primary "
                            onClick={handleUpdateAvatarUser}
                        >Save</Button>
                    </>
                }
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