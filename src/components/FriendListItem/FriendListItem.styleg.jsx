import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.p`
  margin-left: 15px;
  font-size: 18px;
  line-height: 1.1;
`;

export const IsOnline = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;
