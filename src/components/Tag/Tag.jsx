export function Tag({ type, extraClass }) {
  return <p className={`tag tag_${type} ${extraClass}`}>{type}</p>;
}
