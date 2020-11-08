import styled from "styled-components";

export const Wrapper = styled.div`
  /* height: 100vh; */
  /* background-color: #fff !important; */
`;

export const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 50px;
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const RightHeader = styled.div`
  display: flex;
`;

export const CateWrapper = styled.div`
  margin: 20px;
  padding: 3px;
  border-bottom: ${props => props.active ? "3px solid #ff9500" : "3px solid transparent"};
`;

export const CateText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #242426;
`;

export const SigninButton = styled.div`
  height: 40px;
  width: 100px;
  background-color: #242426;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
`;

export const SignupButton = styled(SigninButton)`
  background-color: #ff9500 ;
`;

export const Text = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: 400;
`;

export const FirstBlock = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

export const Right = styled.div`
  flex: 3;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #242426;
`;

export const Description = styled.div`
  font-size: 22px;
  color: #242426;
`;

export const StartButton = styled.div`
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111;
  border-radius:5px;
  cursor: pointer;
`;

export const SecondBlock = styled.div`
  padding: 100px 100px;
  color: #242425;
  font-size: 22px;
  text-align: justify;
`;

export const ThirdBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px;
`;

export const ValuePoint = styled.div`
  height: 400px;
  width: 300px;
  background-color: #f4f7fb;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);

  &:hover{
    transform: scale(1.01)
  }
`;

export const Image = styled.img`
  height: 300px;
  width: 300px;
  padding: 50px;
`;

export const Desription = styled.div`
  font-size: 22px;
  line-height:2;
  color: #242426;
  padding: 10px;
`;