import { Box, Container, Heading, Separator, SimpleGrid, Card, Text, Badge } from "@chakra-ui/react";

function HallCard({ name, capacity, desc }: { name: string; capacity: string; desc: string }) {
  return (
    <Card.Root>
      <Card.Header pb={2}><Heading size="md">{name}</Heading></Card.Header>
      <Card.Body pt={0}>
        <Text mb={2}>{desc}</Text>
        <Badge colorPalette="brown">{capacity}</Badge>
      </Card.Body>
    </Card.Root>
  );
}

export default function HallsSection() {
  return (
    <Box id="halls" py={{ base: 10, md: 14 }} bg="sand.50">
      <Container maxW="container.lg">
        <Heading size="xl" mb={4} color="coffee.500">Зали</Heading>
        <Separator mb={6} borderColor="sand.200" />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: 3, md: 4 }}>
          <HallCard name="Основний зал" capacity="до 40 гостей" desc="Просторий зал для сімейних свят і невеликих подій." />
          <HallCard name="VIP-кімната"  capacity="до 16 гостей" desc="Затишна окрема кімната для камерних зустрічей і бізнес-ланчів." />
          <HallCard name="Банкетний зал" capacity="до 60 гостей" desc="Великий зал для весіль, ювілеїв та корпоративів." />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
