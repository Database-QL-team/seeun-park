import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";

const algorithms = {
  "다이나믹 프로그래밍": [
    {
      id: 1,
      title: "설탕 배달",
      number: 2839,
      solvedCount: 94155,
      tier: "실버 IV",
      category: "다이나믹 프로그래밍",
    },
    // 더 많은 문제를 추가하세요
  ],
  "자료 구조": [
    {
      id: 1,
      title: "문제 1",
      number: 1001,
      solvedCount: 12345,
      tier: 3000,
      category: "자료 구조",
    },
    // 더 많은 문제를 추가하세요
  ],
  // 다른 카테고리를 추가하세요
};

const Algorithm = () => {
  const router = useRouter();
  const { category } = router.query;
  const algorithmList = algorithms[category] || [];

  return (
    <Layout>
      <Container>
        <Title>{category}</Title>
        <Table>
          <thead>
            <tr>
              <th>문제 제목</th>
              <th>문제 번호</th>
              <th>푼 사람 수</th>
              <th>문제 티어</th>
              <th>문제 알고리즘 분류</th>
            </tr>
          </thead>
          <tbody>
            {algorithmList.map((algorithm) => (
              <tr key={algorithm.id}>
                <td>{algorithm.title}</td>
                <td>
                  <a
                    href={`https://www.acmicpc.net/problem/${algorithm.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {algorithm.number}
                  </a>
                </td>
                <td>{algorithm.solvedCount}</td>
                <td>{algorithm.tier}</td>
                <td>{algorithm.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export default Algorithm;

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
