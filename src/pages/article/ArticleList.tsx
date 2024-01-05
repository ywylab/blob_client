import dayjs from "dayjs";

export default function Index() {
  const articleList = Array(10)
    .fill(0)
    .map((_, index) => ({
      title: `文章 ${index}`,
      timeStamp: dayjs().subtract(index, "day").format("YYYY-MM-DD"),
    }));
  return (
    <div className="w-full h-full">
      {articleList.map((item) => (
        <div
          className="flex items-center justify-between border-b-[1px] border-b-gray-300 p-2 hover:bg-blue-100 cursor-pointer"
          key={item.timeStamp}
        >
          <div>{item.title}</div>
          <div>{item.timeStamp}</div>
        </div>
      ))}
    </div>
  );
}
