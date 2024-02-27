import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

interface IApolloSetting {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSetting): JSX.Element {
  const uploadLink = createUploadLink({
    uri: 'http://backend-practice.codebootcamp.co.kr/graphql',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(), // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장 => 나중에 더 자세히 알아보기
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
