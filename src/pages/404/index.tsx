import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <div>
      not found
      <Button
        onClick={() => {
          alert("test");
        }}
      >
        test
      </Button>
    </div>
  );
};

export default NotFoundPage;
