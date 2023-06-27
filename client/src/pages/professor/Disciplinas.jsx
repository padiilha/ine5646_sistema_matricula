import { Text, VFlow } from "bold-ui";
import CollapseE from "../../components/Collapse"


export default function ProfessorDisciplinas() {
  const customStyle = {
    marginLeft: '70px',
    
  };
  
  return (
    <>
    <VFlow vSpacing={1}>
      <Text textAlign='center' fontSize={1.5} color="primary" style={customStyle}>Disciplinas</Text>
      <CollapseE></CollapseE></VFlow>
    </>
    
  );
}
