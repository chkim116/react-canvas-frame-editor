import { ReactNode, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { APP_HEADER_HEIGHT } from '../constants';

interface PageTemplateProps {
  children?: ReactNode;
  title?: string;
}

const HeaderWrap = styled.header`
  width: 100%;
  height: ${APP_HEADER_HEIGHT}px;
  padding: 0 2em;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
`;

const Header = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Main = styled.main``;

const Footer = styled.footer`
  width: 100%;
  padding: 2em;
  border-top: 1px solid ${({ theme }) => theme.color.gray100};
  background-color: ${({ theme }) => theme.color.white};
`;

export function PageTemplate({ children, title = '' }: PageTemplateProps) {
  useLayoutEffect(() => {
    document.title = title ? `${title} - 캔버스 에디터` : '캔버스 에디터';
  }, [title]);

  return (
    <>
      <HeaderWrap>
        <Header>LOGO</Header>
      </HeaderWrap>
      <Main>
        <>{children}</>
      </Main>
      <Footer>&copy; chkim116</Footer>
    </>
  );
}
