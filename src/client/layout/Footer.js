import { bottomlist, enterprise, internalLinks } from "@/data/FooterLinks";
import style from "@/styles/components/footer.module.css";
import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className={`${style.footer_wrapper}`}>
      <div className="footer_container">
        <div className={`${style.top_bar} d-flex align-items-center  `}>
          <h4 className={`${style.follow_title}`}>Follow us</h4>
          <button>
            <Image src={"/images/yt.svg"} alt="yt" width={24} height={24} />
          </button>
          <button>
            <Image src={"/images/x.svg"} alt="twitter" width={24} height={24} />
          </button>
          <button>
            <Image src={"/images/fb.svg"} alt="fb" width={24} height={24} />
          </button>
        </div>
        <div className={`${style.main} d-flex`}>
          <div className={`${style.links_wrapper_card}`}>
            <h2 className={`${style.title}`}>Internal Links</h2>
            <ul className={`${style.links_container}`}>
              {internalLinks.map((data, i) => (
                <li key={i + data?.name}>
                  <Link href={"/"} className={`${style.item}`}>
                    {data?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* -------------- */}
          <div className={`${style.links_wrapper_card}`}>
            <h2 className={`${style.title}`}>Enterprise</h2>
            <ul className={`${style.links_container}`}>
              {enterprise.map((data, i) => (
                <li key={i + data?.name}>
                  <Link href={"/"} className={`${style.item}`}>
                    {data?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${style.links_wrapper_card}`}>
            <h2 className={`${style.title}`}>Internal Links</h2>
            <ul className={`${style.links_container}`}>
              {internalLinks.map((data, i) => (
                <li key={i + data?.name}>
                  <Link href={"/"} className={`${style.item}`}>
                    {data?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* -------------- */}
          <div className={`${style.links_wrapper_card}`}>
            <h2 className={`${style.title}`}>Enterprise</h2>
            <ul className={`${style.links_container}`}>
              {enterprise.map((data, i) => (
                <li key={i + data?.name}>
                  <Link href={"/"} className={`${style.item}`}>
                    {data?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ---------------- */}
          <div className={`${style.links_wrapper_card}`}>
            <h2 className={`${style.title}`}>Internal Links</h2>
            <ul className={`${style.links_container}`}>
              {internalLinks.map((data, i) => (
                <li key={i + data?.name}>
                  <Link href={"/"} className={`${style.item}`}>
                    {data?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* ---------bottom */}
        <div
          className={`${style.bottom_bar} d-flex align-items-center flex-wrap gap-2 justify-content-between`}
        >
          <div className="d-flex align-items-center flex-wrap gap-4">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={1200}
                height={1200}
                className="img-bg-trans obj-cover main_logo"
              />
            </Link>
            <ul className="d-flex align-items-center flex-wrap gap-4">
              {bottomlist.map((data, i) => (
                <li key={data?.name + i} className={`${style.list_item}`}>
                  <Link href={"/"}>{data?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <button className={`${style.night_btn}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 -960 960 960"
            >
              <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
            </svg>
            <div className={`${style.tooltip_wrapper}`}>
              <p className={`${style.inner_wrapper}`}>
                Change Theme
                <span className={`${style.shape}`}></span>
              </p>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
