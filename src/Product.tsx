import { Card, Image, Text, Button, Group, Title } from '@mantine/core';

export default function Product() {
  return (
    <Card shadow="sm" p="lg" radius="md">
      <Card.Section>
        <Image
          src="/images/image-product-mobile.jpg"
          alt="Norway"
          
        />
      </Card.Section>
        <Text weight={400} color="hsl(228, 12%, 48%)" transform="uppercase" mt={`1rem`} style={{letterSpacing:2}}>Perfume</Text>
        <Title order={1}>Gabrielle Essence Eau De Parfum</Title>

      <Text size="sm" color="hsl(228, 12%, 48%)" >
      A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
      </Text>
      
      <Group  spacing="lg" mt={10}> 
      <Title order={1} color={'#3f816a'}>$149.99</Title>
      <Text strikethrough color={'hsl(228, 12%, 48%)'}> $169.99</Text>
      </Group>



      <Button variant='filled' fullWidth mt="md" radius="md" size='lg' styles={() => ({
        root:{
            backgroundColor:"hsl(158, 36%, 37%)",

            '&:hover': {
                backgroundColor:'#0f231a',
              },
        },

      })}>
      <Image
        src="/images/icon-cart.svg"
        alt="cart-icon "
        width={'1.2rem'}
        mr={'1rem'}
      />
      Add to Cart
      </Button>
    </Card>
  );
}
