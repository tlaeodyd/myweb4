import React, { useState } from 'react';
import styled from 'styled-components';
import { generateLottoNumbers } from './../../components/lotto/lotto';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const NumberDisplay = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;
`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  background-color: #eee;
  border: 1px solid #ccc;
  font-weight: bold;
`;

const GenerateButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

function LottoPage() {
  const [numbers, setNumbers] = useState([]);

  const handleGenerate = () => {
    const result = generateLottoNumbers();
    setNumbers(result);
  };

  return (
    <Container>
      <h1>로또 번호 생성기</h1>

      <NumberDisplay>
        {numbers.length > 0 ? (
          numbers.map((num, index) => <Ball key={index}>{num}</Ball>)
        ) : (
          <p></p>
        )}
      </NumberDisplay>

      <GenerateButton onClick={handleGenerate}>번호 뽑기</GenerateButton>
    </Container>
  );
}

export default LottoPage;
