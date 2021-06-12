import "./seleted.scss";

export default function Seleted({
  noOfCategoriesSeleted = 0,
}) 
{
  return (
    <div className="selected">
      <h5 className="title">Đã chọn { noOfCategoriesSeleted } danh mục</h5>
    </div>
  );
}
