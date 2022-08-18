import React from "react";
import Gnb from "./Gnb";
import Link from "next/link";

const Top = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <div style={{ display: "flex", paddingTop: 20, alignItem: "center" }}>
            <div style={{ flex: "100px 0 0 " }}>
              <img
                src="/images/mhLogo.jpeg"
                style={{ width: 120, borderRadius: "50%", display: "block" }}
              ></img>
            </div>
            <header
              as="h1"
              style={{
                fontSize: "22px",
                lineHeight: "72px",
                marginLeft: 10,
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              코딩민해
            </header>
          </div>
        </a>
      </Link>
      <Gnb style={{ paddingTop: "30px" }} />
    </div>
  );
};

export default Top;
