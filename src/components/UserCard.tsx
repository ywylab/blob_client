import ReactIcon from "@/assets/react.svg";
export default function UserCard() {
  return (
    <div className="bg-white flex flex-col items-center rounded-md">
      <img
        src={ReactIcon}
        alt=""
        className="inline-block w-[100px] h-[100px]"
      />
      <div>用户姓名</div>
    </div>
  );
}
