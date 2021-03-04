import styled from "styled-components";
import React from "react";
const buttonConstant = 2;
const StyledPractice = () => {
  return (
    <>
      <ButtonContainer textColor="orange">
        <button>Hello</button>
  
      </ButtonContainer>
      <ButtonContainer textColor="blue">
       
          </ButtonContainer>
          <StyledList>
              <li>23</li>
              <li>24</li>
              <li>25</li>
          </StyledList>
          <DifferentStyledList>
              <li>23</li>
              <li>24</li>
              <li>25</li>
          </DifferentStyledList>
    </>
  );
};

export default StyledPractice;



const ButtonContainer = styled.div`
  
`;

const StyledList = styled.ul`

    margin: 20px 40px;
    li {
        color: blue
    }
`
const DifferentStyledList = styled(StyledList)`
    margin: 30px 50px;
`
