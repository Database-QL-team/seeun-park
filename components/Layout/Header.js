import styled, { css } from "styled-components";
import Link from "next/link";
import { FlexBox } from "../ui/flex-box";

const routes = [
  { title: "분류별 문제", href: "/" }, // 메인 페이지로 경로 설정
  { title: "난이도별 문제", href: "/difficulty-problems" },
  { title: "함께 풀어요", href: "/together" }, // 함께 풀어요 페이지 링크 추가
  { title: "이화랭킹", href: "/ewha-ranking" },
];

const zoomInOnHover = css`
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.14);
  }
`;

const LogoWrapper = styled.div`
  ${zoomInOnHover}
  width: 42px;
  height: 28px;

  cursor: pointer;

  z-index: 1001;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Header = styled(({ className }) => {
  return (
    <header className={className}>
      <Link href="/">
        <FlexBox>
          <LogoWrapper>
            <img src="/images/QL_logo.png" alt="logo" />
          </LogoWrapper>
        </FlexBox>
      </Link>
      <div style={{ flexGrow: "1" }} />
      {routes.map(({ title, href }) => (
        <Link key={title} href={href} legacyBehavior>
          <a>
            <DesktopTopbarItem>{title}</DesktopTopbarItem>
          </a>
        </Link>
      ))}
    </header>
  );
})`
  backdrop-filter: blur(1.5rem);
  display: flex;
  align-items: center;
  position: fixed;
  width: 1080px;
  height: 75px;
  ${(props) => props.theme.main.frame.padding};

  @media (max-width: 1080px) {
    padding: 0 8vw;
  }
`;

const DesktopTopbarItem = styled.div`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.02rem;

  padding-left: 2.4rem;

  cursor: pointer;

  &:last-child {
    padding-right: 0;
  }

  &:hover {
    font-weight: 500;
  }

  @media ${(props) => props.theme.device.sm} {
    display: none;
  }
`;

export default Header;
