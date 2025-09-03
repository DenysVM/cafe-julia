import { useState } from "react";
import { Drawer, IconButton, VStack, Box, Link, Heading } from "@chakra-ui/react";
import { scrollToId } from "@/lib/scroll";

const NAV_ITEMS: Array<[string, string]> = [
  ["Головна", "hero"],
  ["Меню", "menu"],
  ["Зали", "halls"],
  ["Банкети", "banquet"],
  ["Контакти", "contacts"],
];

export default function MobileNav({ activeId }: { activeId?: string }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setOpen(false);
    // Slight delay to allow drawer close animation
    setTimeout(() => scrollToId(id), 150);
  };

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          variant="ghost"
          color="white"
          _hover={{ bg: "whiteAlpha.100" }}
          _active={{ bg: "whiteAlpha.200" }}
          display={{ base: "inline-flex", md: "none" }}
          w="44px"
          h="44px"
          px={0}
        >
          {/* Hamburger animated icon */}
          <Box position="relative" w="24px" h="18px" role="presentation">
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="2px"
              bg="currentColor"
              borderRadius="full"
              transition="transform .2s ease, opacity .2s ease"
              transform={open ? "translateY(8px) rotate(45deg)" : "none"}
            />
            <Box
              position="absolute"
              top="8px"
              left={0}
              right={0}
              h="2px"
              bg="currentColor"
              borderRadius="full"
              transition="opacity .2s ease"
              opacity={open ? 0 : 1}
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              h="2px"
              bg="currentColor"
              borderRadius="full"
              transition="transform .2s ease"
              transform={open ? "translateY(-8px) rotate(-45deg)" : "none"}
            />
          </Box>
        </IconButton>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner zIndex={1400}>
        <Drawer.Content>
          <Box p={4} borderBottomWidth="1px" display="flex" alignItems="center" justifyContent="space-between" gap={2}>
            <Heading size="md">Меню</Heading>
            <Drawer.CloseTrigger asChild>
              <IconButton
                aria-label="Закрити"
                rounded="full"
                bg="blackAlpha.300"
                _hover={{ bg: "blackAlpha.400" }}
                _active={{ bg: "blackAlpha.500" }}
                color="white"
                boxShadow="sm"
                w="36px"
                h="36px"
                minW="36px"
                px={0}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </IconButton>
            </Drawer.CloseTrigger>
          </Box>
          <Drawer.Body>
            <VStack align="stretch" gap={1} py={2}>
              {NAV_ITEMS.map(([label, id]) => {
                const active = id === activeId;
                return (
                  <Link
                    key={id}
                    onClick={() => handleNavigate(id)}
                    fontSize="lg"
                    py={2}
                    color={active ? "terracotta.400" : undefined}
                    fontWeight={active ? "bold" : "semibold"}
                  >
                    {label}
                  </Link>
                );
              })}
            </VStack>
          </Drawer.Body>
          {/* Close trigger also available via header button */}
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
