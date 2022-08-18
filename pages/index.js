import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "../src/components/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>HOME | 코딩민해 </title>
        <meta name="description" content="코딩 민해 홈입니다."></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header style={{ paddingTop: 40 }}>베스트 상품</Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header style={{ paddingTop: 40 }}>신상품</Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
