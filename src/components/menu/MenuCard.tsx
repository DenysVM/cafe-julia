import { Card, Heading, Text, Badge, Image, AspectRatio, Box } from "@chakra-ui/react";
import { useState } from "react";

type MenuCardProps = {
  title: string;
  price: string;
  badge?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  srcSet?: string;
  sizes?: string;
  placeholderSrc?: string;
  ratio?: number;
};

export default function MenuCard({ title, price, badge, description, imageSrc, imageAlt, srcSet, sizes, placeholderSrc, ratio }: MenuCardProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Card.Root>
      {imageSrc && (
        <Box position="relative" borderTopRadius="md" overflow="hidden">
          {!loaded && placeholderSrc && (
            <Box
              position="absolute"
              inset={0}
              backgroundImage={`url(${placeholderSrc})`}
              backgroundSize="cover"
              backgroundPosition="center"
              filter="blur(12px)"
              transform="scale(1.05)"
            />
          )}
          {!loaded && (
            <Box className="skeleton" position="absolute" inset={0} />
          )}
          <AspectRatio ratio={ratio ?? 4 / 4} w="100%">
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              objectFit="contain"
              loading="lazy"
              decoding="async"
              srcSet={srcSet}
              sizes={sizes ?? "(min-width: 62em) 33vw, (min-width: 30em) 50vw, 100vw"}
              onLoad={() => setLoaded(true)}
              bg="sand.100"
            />
          </AspectRatio>
        </Box>
      )}
      <Card.Header pb={2}>
        <Heading size="md">
          {title} {badge && <Badge ml={2} colorPalette="orange">{badge}</Badge>}
        </Heading>
      </Card.Header>
      <Card.Body pt={0}>
        {description && <Text opacity={0.9}>{description}</Text>}
        <Text mt={{ base: 2, md: 3 }} fontWeight="bold" color="coffee.600">{price}</Text>
      </Card.Body>
    </Card.Root>
  );
}
