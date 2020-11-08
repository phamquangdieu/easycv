import { Card, Icon } from "semantic-ui-react";
import styled from "styled-components";
import NotificationsNoneIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Wrapper = styled.div``;

export const Header = styled.div`
  height: 60px;
  padding:0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const RightHeader = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  margin-left: 40px;
  outline: none !important;
  width: 240px;
  border-radius: 10px;
  border: 1px solid #242424;
  padding-left: 50px;
  position: relative;
  height: 40px;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 50px;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const WrapperIcon = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const Bell = styled(NotificationsNoneIcon)`
  font-size: 20px !important;
`;

export const AccountIcon = styled(AccountCircleIcon)`
  font-size: 20px !important;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f4f7fb;
  width: 120px;
  border-radius: 20px;
  border: 1px solid #242424;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const Email = styled.div`
  font-weight: 300;
  font-size: 10px;
`;

export const ItemWrapper = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;

  &:hover{
    background-color: #ffbc52;
    color: #fff;
  }
`;

export const Item = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height:1.25;
`;

export const IconWrapper = styled.div`
  /* height: 100%; */
  display: flex;
  align-items: center;
`;

export const DropdownIcon = styled(Icon)`
  font-size: 12px !important;
  margin-right: 5px;
  height: 100% !important;
`;

export const ContentWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  padding: 20px;
`;

export const CardResume = styled(Card)`
  width: 250px !important;
  height: 350px;
  border-radius: 30px !important;
  background-color: #f5f5f5;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);

  &:hover{
    transform: scale(1.02)
  }
`;

export const ListIcon = styled.div`
  display: flex;
  width: 100%;
  height:50px;
`;

export const WrapperIconFooter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;