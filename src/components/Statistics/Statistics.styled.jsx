import styled from 'styled-components';

export const Section = styled.section`
  margin: 20px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const StatTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  background-color: #f3f3f3;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 150px;

  padding: 20px;

  .label {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .percentage {
    font-size: 24px;
    font-weight: 500;
    color: #34c759;
  }
`;
