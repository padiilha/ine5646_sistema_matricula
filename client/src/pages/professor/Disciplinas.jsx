import { Text, VFlow } from "bold-ui";

const Disciplinas = () => {
  const customStyle = {
    marginLeft: "70px",
  };

  return (
    <>
      <VFlow vSpacing={1}>
        <Text
          textAlign="center"
          fontSize={1.5}
          color="primary"
          style={customStyle}
        >
          Disciplinas
        </Text>
      </VFlow>
    </>
  );
};

export default Disciplinas;
