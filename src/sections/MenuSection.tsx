import {
  Box,
  Container,
  Heading,
  Separator,
  Tabs,
  SimpleGrid,
} from "@chakra-ui/react";
import MenuCard from "@/components/menu/MenuCard";
// Imagetools: default src (800w) + srcset (400/800/1200, webp+jpg)
import borscht from "@/assets/menu/ukrainian-borscht.jpg?w=800&imagetools";
import borschtSrcset from "@/assets/menu/ukrainian-borscht.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import borschtBlur from "@/assets/menu/ukrainian-borscht.jpg?w=24&as=base64&imagetools";
import chickenTeriyaki from "@/assets/menu/chicken-teriyaki.jpg?w=800&imagetools";
import chickenTeriyakiSrcset from "@/assets/menu/chicken-teriyaki.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import chickenTeriyakiBlur from "@/assets/menu/chicken-teriyaki.jpg?w=24&as=base64&imagetools";
import pastaMushroom from "@/assets/menu/pasta-mushroom.jpg?w=800&imagetools";
import pastaMushroomSrcset from "@/assets/menu/pasta-mushroom.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import pastaMushroomBlur from "@/assets/menu/pasta-mushroom.jpg?w=24&as=base64&imagetools";
import syrnyky from "@/assets/menu/syrnyky.jpg?w=800&imagetools";
import syrnykySrcset from "@/assets/menu/syrnyky.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import syrnykyBlur from "@/assets/menu/syrnyky.jpg?w=24&as=base64&imagetools";
import omelette from "@/assets/menu/omelette-ham-tomato.jpg?w=800&imagetools";
import omeletteSrcset from "@/assets/menu/omelette-ham-tomato.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import omeletteBlur from "@/assets/menu/omelette-ham-tomato.jpg?w=24&as=base64&imagetools";
import medovyk from "@/assets/menu/medovyk.jpg?w=800&imagetools";
import medovykSrcset from "@/assets/menu/medovyk.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import medovykBlur from "@/assets/menu/medovyk.jpg?w=24&as=base64&imagetools";
import cheesecake from "@/assets/menu/cheesecake-ny.jpg?w=800&imagetools";
import cheesecakeSrcset from "@/assets/menu/cheesecake-ny.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import cheesecakeBlur from "@/assets/menu/cheesecake-ny.jpg?w=24&as=base64&imagetools";
import coffee from "@/assets/menu/coffee.jpg?w=800&imagetools";
import coffeeSrcset from "@/assets/menu/coffee.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import coffeeBlur from "@/assets/menu/coffee.jpg?w=24&as=base64&imagetools";
import tea from "@/assets/menu/tea.jpg?w=800&imagetools";
import teaSrcset from "@/assets/menu/tea.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import teaBlur from "@/assets/menu/tea.jpg?w=24&as=base64&imagetools";
import cocoa from "@/assets/menu/cocoa.jpg?w=800&imagetools";
import cocoaSrcset from "@/assets/menu/cocoa.jpg?w=400;800;1200&format=webp;jpg&as=srcset&imagetools";
import cocoaBlur from "@/assets/menu/cocoa.jpg?w=24&as=base64&imagetools";

export default function MenuSection() {
  return (
    <Box id="menu" py={{ base: 10, md: 14 }}>
      <Container maxW="container.lg">
        <Heading size="xl" mb={4} color="terracotta.500">
          Меню
        </Heading>
        <Separator mb={6} borderColor="sand.200" />
        <Tabs.Root
          variant="enclosed"
          colorPalette="orange"
          size={{ base: "sm", md: "md" }}
        >
          <Tabs.List
            overflowX={{ base: "auto", md: "visible" }}
            whiteSpace={{ base: "nowrap", md: "normal" }}
            gap={{ base: 2, md: 3 }}
            px={{ base: 1, md: 0 }}
          >
            <Tabs.Trigger value="first">Основне</Tabs.Trigger>
            <Tabs.Trigger value="second">Сніданки</Tabs.Trigger>
            <Tabs.Trigger value="third">Десерти</Tabs.Trigger>
            <Tabs.Trigger value="firth">Напої</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="first" mt={4}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              gap={{ base: 3, md: 4 }}
            >
              <MenuCard
                title="Український борщ"
                description="Традиційний український борщ з буряком, капустою, картоплею та м’ясом. Подається зі сметаною та свіжим хлібом."
                price="120 ₴"
                imageSrc={borscht}
                srcSet={borschtSrcset}
                placeholderSrc={borschtBlur}
                imageAlt="Український борщ"
              />
              <MenuCard
                title="Куряче філе з соусом теріякі"
                description="Соковите куряче філе у соусі теріякі, подається з рисом та овочами."
                price="165 ₴"
                imageSrc={chickenTeriyaki}
                srcSet={chickenTeriyakiSrcset}
                placeholderSrc={chickenTeriyakiBlur}
                imageAlt="Куряче філе теріякі"
              />
              <MenuCard
                title="Паста з грибами та вершками"
                description="Італійська паста у вершковому соусі з печерицями та пармезаном."
                price="185 ₴"
                imageSrc={pastaMushroom}
                srcSet={pastaMushroomSrcset}
                placeholderSrc={pastaMushroomBlur}
                imageAlt="Паста з грибами"
              />
            </SimpleGrid>
          </Tabs.Content>
          <Tabs.Content value="second" mt={4}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              gap={{ base: 3, md: 4 }}
            >
              <MenuCard
                title="Сирники зі сметаною та варенням"
                description="Домашні сирники зі сметаною та полуничним варенням."
                price="145 ₴"
                badge="Хіт"
                imageSrc={syrnyky}
                srcSet={syrnykySrcset}
                placeholderSrc={syrnykyBlur}
                imageAlt="Сирники зі сметаною"
              />
              <MenuCard
                title="Омлет з шинкою та томатами"
                description="Пишний омлет із шинкою, томатами та свіжою зеленню."
                price="245 ₴"
                imageSrc={omelette}
                srcSet={omeletteSrcset}
                placeholderSrc={omeletteBlur}
                imageAlt="Омлет з шинкою та томатами"
              />
            </SimpleGrid>
          </Tabs.Content>
          <Tabs.Content value="third" mt={4}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              gap={{ base: 3, md: 4 }}
            >
              <MenuCard
                title="Медовик класичний"
                description="Ніжний торт із медовими коржами та сметанним кремом."
                price="295 ₴"
                imageSrc={medovyk}
                srcSet={medovykSrcset}
                placeholderSrc={medovykBlur}
                imageAlt="Торт Медовик"
              />
              <MenuCard
                title="Чізкейк Нью-Йорк"
                description="Класичний чізкейк на пісочній основі з ваніллю."
                price="395 ₴"
                imageSrc={cheesecake}
                srcSet={cheesecakeSrcset}
                placeholderSrc={cheesecakeBlur}
                imageAlt="Чізкейк Нью-Йорк"
              />
            </SimpleGrid>
          </Tabs.Content>
          <Tabs.Content value="firth" mt={4}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              gap={{ base: 3, md: 4 }}
            >
              <MenuCard
                title="Кава"
                description="Ароматна свіжозварена кава."
                price="55 ₴"
                imageSrc={coffee}
                srcSet={coffeeSrcset}
                placeholderSrc={coffeeBlur}
                imageAlt="Чашка кави"
              />
              <MenuCard
                title="Чай"
                description="Запашний чорний або зелений чай на вибір."
                price="45 ₴"
                imageSrc={tea}
                srcSet={teaSrcset}
                placeholderSrc={teaBlur}
                imageAlt="Чай у чашці"
              />
              <MenuCard
                title="Какао"
                description="Ніжне какао з молочною пінкою."
                price="60 ₴"
                imageSrc={cocoa}
                srcSet={cocoaSrcset}
                placeholderSrc={cocoaBlur}
                imageAlt="Какао з молоком"
              />
            </SimpleGrid>
          </Tabs.Content>
        </Tabs.Root>
      </Container>
    </Box>
  );
}
