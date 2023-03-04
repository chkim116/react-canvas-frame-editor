import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DIVIDE_TOOL_ENTER_IMAGE } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RootEnterDivideToolProps {}

const DivideEnterWrap = styled.div`
  cursor: pointer;
  border-radius: 8px;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  display: flex;
  flex-direction: column;
  margin-left: 3em;
  text-align: center;

  @media all and (max-width: ${({ theme }) => theme.size.sm}) {
    margin-bottom: 2em;
    margin-left: 0;
  }

  &:hover {
    opacity: 0.8;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const ImageWrap = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 350px;
  border-radius: 8px;
  padding: 0.3em 0.3em;
  img {
    background-color: ${({ theme }) => theme.color.gray100};
    object-fit: contain;
    width: 100%;
    padding: 0.7em 0.3em;
    height: 100%;
  }
`;

const Text = styled.p`
  background-color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  margin: 0;
  padding: 1em 0;
  border-radius: 8px;
`;

export function RootEnterDivideTool(_: RootEnterDivideToolProps) {
  return (
    <DivideEnterWrap>
      <Link to="/tool/divided">
        <ImageWrap>
          <img src={DIVIDE_TOOL_ENTER_IMAGE} alt="enter divide tool" />
        </ImageWrap>
        <Text>하나의 사진으로 여러개의 캔버스</Text>
      </Link>
    </DivideEnterWrap>
  );
}
