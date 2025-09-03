import { Box, Container, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { scrollToId } from "@/lib/scroll";
import MobileNav from "./MobileNav";

export default function Header() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const el = document.getElementById("site-header");
    const onScroll = () => {
      if (el) el.style.boxShadow = window.scrollY > 4 ? "0 6px 18px rgba(0,0,0,.08)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const IDS = ["hero", "menu", "halls", "banquet", "contacts"] as const;
    const updateActive = () => {
      const header = document.getElementById("site-header");
      const y = window.scrollY + (header?.offsetHeight ?? 0) + 4;
      let current: string = IDS[0];
      for (const id of IDS) {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <Box id="site-header" as="header" position="sticky" top={0} zIndex={1000} bg="sand.500" color="white">
      <Container maxW="container.lg" py={3}>
        <Flex align="center" justify="space-between" gap={{ base: 4, md: 6 }}>
          <Heading size="md" letterSpacing="wide">Кафе Юлія</Heading>
          <HStack
            as="nav"
            gap={{ base: 2, md: 4 }}
            overflowX={{ base: "auto", md: "visible" }}
            whiteSpace={{ base: "nowrap", md: "normal" }}
            flexWrap={{ base: "nowrap", md: "wrap" }}
            display={{ base: "none", md: "flex" }}
          >
            {[
              ["Головна", "hero"],
              ["Меню", "menu"],
              ["Зали", "halls"],
              ["Банкети", "banquet"],
              ["Контакти", "contacts"],
            ].map(([label, id]) => {
              const active = id === activeId;
              return (
                <Link
                  key={id}
                  onClick={() => scrollToId(id)}
                  fontWeight={active ? "bold" : "semibold"}
                  color={active ? "terracotta.200" : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </HStack>
          <Box display={{ base: "block", md: "none" }}>
            <MobileNav activeId={activeId} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

