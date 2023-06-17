import { Grid, Cell, TextField, Button } from 'bold-ui'

export default function Home() {
  return (
    <>
      <Grid>
        <Cell md={12}>
          <TextField label='Email' type='email' />
        </Cell>
        <Cell md={12}>
          <TextField label='Senha' type='password' />
        </Cell>
        <Cell md={12}>
          <Button kind='primary' block> Entrar </Button>
        </Cell>
      </Grid>
    </>
  )
}