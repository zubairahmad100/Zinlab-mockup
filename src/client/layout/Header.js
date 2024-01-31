import style from "@/styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";
import EnvatoList from "../components/EnvatoList";
import { Search } from "../components/Search";
export const Header = () => {
  return (
    <header className={`${style.header_wrapper}`}>
      <div className="container">
        <div
          className={`d-flex align-items-center justify-content-between gap-2 flex-wrap py-3 ${style.header_inner_wrapper}`}
        >
          <div className="d-flex align-items-center gap-1">
            <button className={` d-lg-none`}>
              <Image
                src={"/images/brgr.svg"}
                alt="brgr"
                width={32}
                height={32}
              />
            </button>
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={1200}
                height={1200}
                className="img-bg-trans obj-cover main_logo"
              />
            </Link>
          </div>

          <Search />
          <div className="d-lg-flex d-none align-items-center gap-4">
            <button className={`${style.login_btn}`}>Log in</button>
            <button className={`${style.sign_up_btn}`}>Sign up</button>
          </div>
          <button className="d-lg-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.004">
              <path d="m19.705 18.288-5.531-5.531a7.927 7.927 0 1 0-1.424 1.421l5.531 5.532a1.006 1.006 0 0 0 1.422-1.422ZM3.738 12.096a5.908 5.908 0 1 1 8.354 0 5.869 5.869 0 0 1-8.354 0Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <EnvatoList />
    </header>
  );
};
