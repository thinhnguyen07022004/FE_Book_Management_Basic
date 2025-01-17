
const SecondComponent = () => {
    return (
        <div>
            Second Component is a component!
        </div>
    )
};

const ThirdComponent = () => {
    return (
        <div>
            Third Component is a component!
        </div>
    )
};

export { SecondComponent, ThirdComponent}; // Export mong muốn xuất ra là 1 object {}.
// Nếu không có default thì bắt buộc component phải nằm trong dấu {} và bắt buộc khai bảo
// phải đúng tên component khi import trong file khác