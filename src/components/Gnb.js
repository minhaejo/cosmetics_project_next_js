import { useRouter } from "next/router";
import React from "react";
import { Menu } from "semantic-ui-react";

const Gnb = () => {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem === "home";
  } else if (router.pathname === "about") {
    activeItem === "about";
  }

  //data는 sementicUi가 제공함
  //data에는  <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} 가들어있음/>
  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  }
  return (
    <div style={{ marginTop: "10px" }}>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={goLink}
        />
        <Menu.Item
          name="Contact Us"
          active={activeItem === "contact"}
          onClick={() => {
            router.push("/contact");
          }}
        />
      </Menu>
    </div>
  );
};

export default Gnb;
