import { envatolist } from "@/data/envatolist";
import style from "@/styles/components/envatolist.module.css";
const EnvatoList = () => {
  return (
    <div className={`${style.list_wrapper}`}>
      <div className="container">
        <ul className={`d-flex align-items-center  flex-wrap gap-2`}>
          {envatolist.map((data, i) => (
            <li className="" key={i + data?.title}>
              {data?.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnvatoList;
