import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin: 20px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const Thead = styled.thead`
  background-color: #f5f5f5;
  font-weight: bold;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 12px;
  text-align: left;
`;
