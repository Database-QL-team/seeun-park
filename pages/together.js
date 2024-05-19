import { useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Link from "next/link";

const posts = [
  { id: 1, title: "설탕 배달", number: 2839, author: "yellowsubmarine372" },
  // 더 많은 게시글을 추가하세요
];

const Together = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.includes(search) ||
      post.number.toString().includes(search) ||
      post.author.includes(search)
  );

  return (
    <Layout>
      <Container>
        <Title>함께 풀어요</Title>
        <ButtonSearchWrapper>
          <Link href="/write">
            <Button>글쓰기</Button>
          </Link>
          <SearchWrapper>
            <SearchInput
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchWrapper>
        </ButtonSearchWrapper>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>문제 제목</th>
                <th>문제 번호</th>
                <th>게시자 핸들</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>
                    <a
                      href={`https://www.acmicpc.net/problem/${post.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.number}
                    </a>
                  </td>
                  <td>{post.author}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </Container>
    </Layout>
  );
};

export default Together;

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background-size: cover;
  background-image: url("/images/background.png");
  background-position: center;
  margin-top: 75px; /* 헤더 높이만큼 마진 추가 */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ButtonSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 1080px; /* 페이지 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #156827; /* 버튼 색상 변경 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #145923; /* 호버 시 색상 변경 */
  }
`;

const SearchWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const TableWrapper = styled.div`
  margin-top: 1rem; /* ButtonSearchWrapper와 Table 사이의 여백 추가 */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;

  th,
  td {
    border: 1px solid #000;
    padding: 0.5rem;
    text-align: center;
  }

  th {
    background-color: #f8f8f8;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  a {
    color: blue;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
