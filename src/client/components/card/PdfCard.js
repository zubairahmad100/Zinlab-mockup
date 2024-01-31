import style from "@/styles/components/pdfcard.module.css";
import Image from "next/image";
export const PdfCard = ({ icon, title, desc }) => {
  return (
    <div className={`${style.card_wrapper}`}>
      <Image src={icon} width={65} height={65} alt="icon" />
      <h4 className={`${style.title}`}>{title}</h4>
      <p className={`${style.desc}`}>{desc}</p>
    </div>
  );
};
