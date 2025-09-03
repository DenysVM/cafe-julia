import { Box, Container, Heading, Separator, SimpleGrid, Text, HStack, Button } from "@chakra-ui/react";

export default function ContactsSection() {
  return (
    <Box id="contacts" py={{ base: 10, md: 14 }} bg="sand.50">
      <Container maxW="container.lg">
        <Heading size="xl" mb={4} color="coffee.500">Контакти</Heading>
        <Separator mb={6} borderColor="sand.200" />
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          <Box>
            <Text fontSize={{ base: "md", md: "lg" }} mb={2}>м. Київ, вул. Прикладна, 1</Text>
            <Text fontSize={{ base: "sm", md: "md" }} mb={2}>Години роботи: щодня, 08:00–22:00</Text>
            <Text mb={4}>Телефон: +380 (44) 000-00-00</Text>
            <HStack gap={{ base: 3, md: 4 }}>
              <Button size={{ base: "md", md: "lg" }} bg="terracotta.500" _hover={{ bg: "terracotta.400" }}>Зателефонувати</Button>
              <Button size={{ base: "md", md: "lg" }} variant="outline" borderColor="coffee.600" color="coffee.600" _hover={{ bg: "coffee.50" }}>
                Прокласти маршрут
              </Button>
            </HStack>
          </Box>
          <Box minH={{ base: "220px", md: "260px" }} bg="sand.100" borderRadius="lg" display="flex" alignItems="center" justifyContent="center">
            <Text opacity={0.7}>[Тут буде карта]</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
