import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

interface IApolloSetting {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSetting) {
  const client = new ApolloClient({
    uri: 'http://backend-practice.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(), // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장 => 나중에 더 자세히 알아보기
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
