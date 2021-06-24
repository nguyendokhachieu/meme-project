import "./style.scss";

export default function CategoryItemLoading({ noOfItems = 30 }) {
  const load = [];

  for (let i = 0; i < noOfItems; i++) {
    load.push(
      <span 
        key={ i }
        className="tags-item-loading" 
        style={ { paddingLeft: `${ Math.round(Math.random() * 10) }rem` } }
      >
        <span className="tags-text">loading</span>
      </span>
    );
  }
  
  return load;
}
