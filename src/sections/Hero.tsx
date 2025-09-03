import { Box, Container, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { scrollToId } from "@/lib/scroll";

export default function Hero() {
  return (
    <Box id="hero" bg="sand.50" pt={{ base: 8, md: 12 }} pb={{ base: 10, md: 14 }}>
      <Container maxW="container.lg">
        <Heading size={{ base: "xl", md: "2xl" }} color="coffee.600" mb={{ base: 3, md: 4 }} textAlign={{ base: "center", md: "left" }}>
          Смачна кава та домашня кухня
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl" mb={{ base: 5, md: 6 }} textAlign={{ base: "center", md: "left" }}>
          Затишне кафе для щоденних зустрічей і свят. Працюємо з 8:00, готуємо сніданки, обіди та десерти. Завітайте — на вас чекає тепла атмосфера і смачна їжа.
        </Text>
        <HStack gap={{ base: 3, md: 4 }} justify={{ base: "center", md: "flex-start" }}>
          <Button size={{ base: "md", md: "lg" }} bg="terracotta.500" _hover={{ bg: "terracotta.400" }} onClick={() => scrollToId("menu")}>
            Переглянути меню
          </Button>
          <Button size={{ base: "md", md: "lg" }} variant="outline" borderColor="coffee.600" color="coffee.600" _hover={{ bg: "coffee.50" }} onClick={() => scrollToId("contacts")}>
            Зв’язатися з нами
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
