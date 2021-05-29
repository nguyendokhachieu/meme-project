import "./style.scss";

export default function CategoryItemLoading({ noOfItems = 30 }) {
  const load = [];

  for (let i = 0; i < noOfItems; i++) {
    load.push(
      <a 
        class="tags-item-loading" 
        style={ { paddingLeft: `${ Math.round(Math.random() * 10) }rem` } }
      >
        <span class="tags-text">loading</span>
      </a>
    );
  }
  
  return load;
}
