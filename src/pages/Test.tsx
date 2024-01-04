import { Children } from "react";

function List({
  children,
  renderItem = undefined,
}: {
  children: any;
  renderItem: any;
}) {
  console.log(children);
  return <div>{children}</div>;
}
function Row({ title }: { title: string }) {
  return <li>{title}</li>;
}
export default function Test() {
  const RowList = Array(10)
    .fill(0)
    .map((_, index) => <Row key={index} title={index.toString()} />);
  return <List>{RowList}</List>;
}
