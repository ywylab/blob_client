import { useParams, useSearchParams } from "react-router-dom";
import dayjs from "dayjs";

export default function Index() {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  console.log(searchParams.get("a"));
  console.log(typeof id);
  const articleList = Array(10)
    .fill(0)
    .map((_, index) => ({
      title: `文章 ${index}`,
      timeStemp: dayjs().subtract(index, "day").format("YYYY-MM-DD"),
    }));
  return (
    <div className="flex gap-[10px] w-full bg-white">
      <div>
        {articleList.map((item) => (
          <div className="flex items-center" key={item.timeStemp}>
            <div>{item.title}</div>
            <div>{item.timeStemp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
