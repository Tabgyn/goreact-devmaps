import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 15px;
    text-align: center;
  }

  input {
    font-size: 14px;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  button {
    display: flex;
    flex: 1;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
    font-weight: bold;
    color: #fff;
    font-size: 12px;
  }
`;

export const CancelButton = styled.button`
  background: #808080;
  color: #fff;
  border: 0;
  border-radius: 5px;
  margin-right: 15px;

  &:hover {
    background: #666;
  }
`;

export const SubmitButton = styled.button`
  background: #2ed177;
  color: #fff;
  border: 0;
  border-radius: 5px;

  &:hover {
    background: #25a75f;
  }
`;
