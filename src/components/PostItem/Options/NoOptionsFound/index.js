
const style = {
  pointerEvents: 'none',
}

export default function NoOptionsFound() {

  return (
    <a className="item-link" style={ style }>
      <i class="fal fa-empty-set item-icon"></i>
      Không có tùy chọn nào. Đây không phải là bài viết của bạn
    </a>
  );
}
