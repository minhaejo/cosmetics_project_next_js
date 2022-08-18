import React from "react";
import { Menu } from "semantic-ui-react";

const gnb = () => {
  const activeItem = "Home";
  return (
    <div style={{ marginTop: "10px" }}>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          //   onClick={this.handleItemClick}
        />
      </Menu>
    </div>
  );
};

export default gnb;
