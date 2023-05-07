import styled from 'styled-components';

export const WrapperProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.h2`
  font-size: 32px;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #9de1d6;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    border-right: 1px solid gray;
  }
  padding-top: 10px;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Quantity = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
