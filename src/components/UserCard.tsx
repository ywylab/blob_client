import ReactIcon from "@/assets/react.svg";
import { Button } from "antd";
import style from "./userCard.module.less";
const statisticList = [{ label: "近七日访问量", key: "" }];
export default function UserCard() {
  return (
    <div className="bg-white flex flex-col items-center h-[300px] pt-[50px]">
      <img
        src={ReactIcon}
        alt=""
        className={`inline-block w-[100px] h-[100px] rounded-full  bg-gray-100 p-[10px] ${style.avatar}`}
      />
      <div className="mt-[10px]">鄢文远</div>
      <div>
        {statisticList.map((item) => (
          <div key={item.key}>{item.label}</div>
        ))}
      </div>
    </div>
  );
}
