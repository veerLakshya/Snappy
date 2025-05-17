import React from "react";
import Link from "next/link";
import Image from "next/image";

const user = {};

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={32}
            height={32}
          />
          <h1>Snapyy</h1>
        </Link>

        {user && (
          <figure>
            {" "}
            <button>
              <Image
                src={"/assets/images/dummy.jpg"}
                alt="user"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src={"/assets/icons/logout.svg"}
                alt="arrow"
                width={16}
                height={16}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
