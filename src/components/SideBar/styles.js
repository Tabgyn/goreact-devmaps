import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  background: #fff;
  position: absolute;
  left: 20px;
  top: 20px;
  height: 90%;
  border-radius: 5px;
  overflow: auto;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0 15px;
`;

export const ListItem = styled.li`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding: 15px 0;

  &:last-child {
    border: 0;
  }
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 15px;
`;
export const UserInfo = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  strong {
    display: block;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }

  span {
    display: block;
    padding: 0;
    margin: 0;
    margin-top: 3px;
    font-size: 12px;
    color: #666;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  cursor: pointer;
  color: #f00;
  border: 0;

  i {
    margin-left: 10px;
    font-size: 16px;
  }
`;

export const UserUrl = styled.a`
  color: #333;
  font-weight: bold;
`;
