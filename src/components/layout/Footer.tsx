import { Box, Container, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="coffee.600" color="white" py={8}>
      <Container maxW="container.lg" textAlign="center">
        <Text mb={2}>&copy; {new Date().getFullYear()} Кафе Юлія</Text>
        <Text fontSize="sm" opacity={0.85}>Зроблено з любов’ю до гостинності</Text>
        <Text fontSize="sm" opacity={0.85}>Розробник: <Link href="https://denysvm.github.io/bc/" target="_blank" rel="noopener noreferrer" color="sand.50">Денис Муратов</Link></Text>
      </Container>
    </Box>
  );
}
