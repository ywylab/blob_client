import ReactIcon from "@/assets/react.svg";
import { Button } from "antd";
export default function UserCard() {
  return (
    <div className="bg-white flex flex-col items-center rounded-md">
      <img
        src={ReactIcon}
        alt=""
        className="inline-block w-[100px] h-[100px]"
      />
      <div>用户姓名</div>
      <Button className="bg-black"></Button>
    </div>
  );
}
