import { MantineProvider,  Container } from '@mantine/core';
import Product from './Product';
export default function App() {
  return (
    <Container style={{backgroundColor: '#fefae0', maxWidth: '110vw', margin: '0', padding: '0'}}>
    <MantineProvider
    theme={{
      fontFamily: 'Montserrat, sans-serif',
      headings: { fontFamily: 'Fraunces, serif'},
    }}
    withGlobalStyles
  >
    <Container size={450} style={{minHeight: `100vh`, display: 'flex', alignItems: 'center'}}>
      <Product />
    </Container>
  </MantineProvider>
  </Container>
  );
}
