import styled from 'styled-components';
import { PageTemplate } from '@common/components/PageTemplate';
import { useOpacityComponent } from '../hooks';
import {
  RootEnterDivideToolContainer,
  RootEnterSingleToolContainer,
} from '../containers';

const OuterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray000};
  min-height: calc(98vh);
`;

const Title = styled.h4`
  @media all and (max-width: ${({ theme }) => theme.size.sm}) {
    margin-top: 1em;
    margin-bottom: 0;
  }
`;

const InnerWrap = styled.div`
  padding-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media all and (max-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: column;
  }
`;

export function RootPage() {
  const { OpacityComponent } = useOpacityComponent();
  return (
    <PageTemplate title="내가 직접 고른 이미지로 액자 제작">
      <OuterWrap>
        <Title>제작 방식을 선택해 주세요.</Title>

        <OpacityComponent>
          <InnerWrap>
            <RootEnterSingleToolContainer />
            <RootEnterDivideToolContainer />
          </InnerWrap>
        </OpacityComponent>
      </OuterWrap>
    </PageTemplate>
  );
}
