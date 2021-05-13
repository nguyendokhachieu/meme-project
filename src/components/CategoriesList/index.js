export default function CategoriesList() {
  return (
    <div className="tags-list">
      <h4 className="tags-list-title">Chọn ít nhất 1 danh mục có liên quan</h4>
      <form action>
        <label className="checkbox-label">
          Tình yêu
          <input type="checkbox" className="checkbox-input" />
          <span className="mark" />
        </label>
        <label className="checkbox-label">
          Gia đình
          <input type="checkbox" className="checkbox-input" />
          <span className="mark" />
        </label>
        <label className="checkbox-label">
          Hài
          <input type="checkbox" className="checkbox-input" />
          <span className="mark" />
        </label>
        <label className="checkbox-label">
          Mạng xã hội
          <input type="checkbox" className="checkbox-input" />
          <span className="mark" />
        </label>
      </form>
    </div>
  );
}
