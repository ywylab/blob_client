import ReactIcon from "@/assets/react.svg";
import { Button } from "antd";
export default function UserCard() {
  return (
    <div className="bg-white flex flex-col items-center h-[300px] pt-[50px]">
      <img
        src={ReactIcon}
        alt=""
        className="inline-block w-[100px] h-[100px] rounded-full border-[1px] border-black bg-gray-100 p-[5px]"
      />
      <div className="mt-[10px]">鄢文远</div>
    </div>
  );
}
