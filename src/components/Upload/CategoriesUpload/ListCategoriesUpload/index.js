export default function ListCategoriesUpload() {
  return (
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
  );
}
