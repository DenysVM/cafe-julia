import { Box, Container, Heading, Separator, Text, HStack, Button } from "@chakra-ui/react";
import { scrollToId } from "@/lib/scroll";

export default function BanquetSection() {
  return (
    <Box id="banquet" py={{ base: 10, md: 14 }}>
      <Container maxW="container.lg">
        <Heading size="xl" mb={4} color="sand.500">Банкети</Heading>
        <Separator mb={6} borderColor="sand.200" />
        <Text fontSize="lg" mb={4}>
          Проводимо дні народження, хрестини, ювілеї та корпоративи. Пропонуємо індивідуальне меню та оформлення залу для компаній від 15 осіб.
        </Text>
        <HStack>
          <Button bg="terracotta.500" _hover={{ bg: "terracotta.400" }} onClick={() => scrollToId("contacts")}>
            Замовити банкет
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}

