import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGuestbook } from '../../hooks/useGuestbook';
import styled from 'styled-components';

const ListContainer = styled.div`
  padding: 20px;

  & > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  th,
  td {
    border: 1px solid #000;
    padding: 8px;
    text-align: center;
    word-break: break-all;
  }

  th {
    background-color: #eee;
  }

  col:nth-child(1) {
    width: 20%;
  }
  col:nth-child(2) {
    width: 35%;
  }
  col:nth-child(3) {
    width: 15%;
  }
  col:nth-child(4) {
    width: 30%;
  }
`;

function GuestBookListPage() {
  const { guestbookList } = useSelector((state) => state.guestbook);
  const { hookGetGuestbooks } = useGuestbook();

  useEffect(() => {
    hookGetGuestbooks();
  }, []);

  return (
    <ListContainer>
      <h1>방명록 목록</h1>
      <hr />

      <StyledTable>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>넘버</th>
            <th>내용</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {guestbookList && guestbookList.length > 0 ? (
            guestbookList.map((vo, index) => (
              <tr key={vo.id}>
                <td>{guestbookList.length - index}</td>
                <td>{vo.content}</td>
                <td>{vo.writer}</td>
                <td>{vo.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}> 등록된 방명록이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </ListContainer>
  );
}

export default GuestBookListPage;
