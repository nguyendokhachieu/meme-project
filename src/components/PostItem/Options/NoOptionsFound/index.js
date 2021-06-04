
const style = {
  pointerEvents: 'none',
}

export default function NoOptionsFound() {

  return (
    <a className="item-link" style={ style }>
      <i class="fad fa-times-circle item-icon"></i>
      Không có tùy chọn nào
    </a>
  );
}
