import React from "react";
import { Grid, Image, item } from "semantic-ui-react";
import { FC } from "react";
import styles from "./ItemList.module.css";
import Link from "next/link";

const ItemList = ({ list }) => {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column
              key={item.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link href={`/view/${item.id}`}>
                <a>
                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      className={styles.img_item}
                    ></img>
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <span className={styles.txt_info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={styles.num_price}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
