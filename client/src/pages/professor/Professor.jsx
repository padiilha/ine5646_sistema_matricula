import { VFlow, Text } from "bold-ui";

const Professor = () => {
  const customStyle = {
    marginLeft: "70px",
  };

  return (
    <>
      <VFlow vSpacing={1}>
        <Text fontSize={1.5} color="primary" style={customStyle}>
          Professor
        </Text>
      </VFlow>
    </>
  );
};

export default Professor;
