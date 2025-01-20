import "./style.css";
const MyComponent = () => {
  // const hoidanit = "erric 1"; // string
  // const hoidanit = 25; // number
  // const hoidanit = true; // boolean
  // const hoidanit = undefined;
  // const hoidanit = [1, 2, 3];
  const hoidanit = {
    name: "hoidanit",
    age: 36,
  };

  return (
    <>
      <div> {JSON.stringify(hoidanit)} & hoidanit update</div>
      {/* JSON.stringify dùng để chuyển đổi object thành chuỗi để in ra màn hình */}
      <div>{console.log("ERIC")}</div>
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
