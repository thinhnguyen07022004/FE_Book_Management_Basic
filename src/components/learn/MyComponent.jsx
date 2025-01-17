import "./style.css";
const MyComponent = () => {
  return (
    <>
      <div> eric & hoidanit update</div>
      <div
        className="child"
        style={{ borderRadius: "10px", border: "solid, 1px" }}
      >
        Child
      </div>
    </>
  );
};

export default MyComponent;
// default được hiểu chỉ xuất duy nhất 1 component trong file này ra ngoài để sử dụng
// Ưu điểm khi import từ file khác để sử dụng thì không cần đúng tên Component
// React vẫn hiểu tên Component xuất default tương ứng với tên khai báo import file khác
