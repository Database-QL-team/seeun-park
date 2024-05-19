import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components"; // styled-components import 추가
import Header from "./Header";
import Footer from "./Footer";
import { theme } from "../ui/theme";

const Layout = ({ children }) => {
  useEffect(() => {
    document.querySelector("sitemask").addEventListener("click", (e) => {
      document.querySelector("sitemask").classList.toggle("hide");
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>{children}</Main>
      <sitemask className="hide" />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

const Main = styled.main`
  padding-top: 75px; /* 헤더 높이만큼 패딩 추가 */
  max-width: 1080px; /* 최대 너비를 1080px로 설정 */
  margin: 0 auto; /* 중앙 정렬 */
`;
