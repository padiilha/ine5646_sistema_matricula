import { css } from '@emotion/core'
import { useTheme, VFlow, Text } from 'bold-ui'
import Login from './components/Login'

function App() {
  const createStyles = () => ({
    container: css`
    display: flex;
    height: 100vh;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  `,
  welcomeContainer: css`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,

  })

  const theme = useTheme()
  const styles = createStyles(theme)

  return (
    <div className="App" css={styles.container}>
      <VFlow vSpacing={2} style={styles.welcomeContainer}>
        <Text fontSize={1.5} color='primary'>
          Sistema de Matrículas
        </Text>
        <Login />
      </VFlow>
    </div>
  );
}

export default App;
