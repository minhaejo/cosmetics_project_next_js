import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import * as axios from "axios";
import Item from "../../src/components/Item";
import { Loader } from "semantic-ui-react";
import { Axios } from "axios";

const Post = ({ item }) => {
  //클릭하면 상품의 아이디를 쿼리값으로 보냄
  //어떤 글자 어떤숫자든 다이나믹 라우트떄문에 자동적으로 감
  //그 현재 쿼리를 id에 할당함
  //그 쿼리를 템플릿문자열로 고유의 상품이 나오게끔

  return (
    <>
      {item && (
        <>
          <Head>
            <title>HOME | 코딩민해 </title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

//context 는 응답쿼리 , 응답요청 ,params 등등임
//다음 예는 요청 시 데이터를 가져오고 결과를 미리 렌더링하는 방법을 보여줍니다.
//이게 왜 되는질 납득하기가 힘듦
//프롭스는 상위애ㅔ서 하위이고 그리고 context데이터는 아무도 보내준적이 없고 이벤트객체처럼 쓰일 데이터가 암묵적으로 들어가는건지
//

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  console.log(context);
  //서버 측에서만 실행되고 브라우저에서는 실행되지 않습니다.
  return {
    props: {
      item: data,
    },
  };
}

// getServerSideProps요청 시 데이터를 가져와야 하는 페이지를 렌더링해야 하는 경우에만 사용해야 합니다 .
// 이는 요청의 데이터 또는 속성(예: authorization헤더 또는 지리적 위치)의 특성 때문일 수 있습니다.
// 를 사용하는 페이지 getServerSideProps는 요청 시 서버 측에서 렌더링되며 캐시 제어 헤더가 구성된 경우에만 캐시됩니다 .

// 요청하는 동안 데이터를 렌더링할 필요가 없는 경우 클라이언트 측 또는 getStaticProps.
