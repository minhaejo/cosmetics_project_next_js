import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as axios from "axios";
import Item from "../../src/components/Item";

const Post = () => {
  const router = useRouter();
  //클릭하면 상품의 아이디를 쿼리값으로 보냄
  //어떤 글자 어떤숫자든 다이나믹 라우트떄문에 자동적으로 감
  //그 현재 쿼리를 id에 할당함
  //그 쿼리를 템플릿문자열로 고유의 상품이 나오게끔
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline`;
  function getData() {
    axios.get(API_URL).then((res) => setItem(res.data));
  }
  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return <Item item={item} />;
};

export default Post;
