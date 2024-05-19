import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Link from "next/link";

const categories = [
  { category: "다이나믹 프로그래밍", problem: 6180 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  { category: "자료 구조", problem: 3690 },
  // Add more categories and problems as needed
];

const Home = () => {
  return (
    <Layout>
      <Container>
        <SectionTitle>- 분류별 문제 -</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>분류</th>
              <th>문제</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => (
              <tr key={index}>
                <td>
                  <Link
                    href={`/algorithms?category=${item.category}`}
                    legacyBehavior
                  >
                    <a>{item.category}</a>
                  </Link>
                </td>
                <td>{item.problem}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background-image: url("/images/background.png"); /* 배경 이미지 설정 */
  background-size: cover;
  background-position: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: green;
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
`;
