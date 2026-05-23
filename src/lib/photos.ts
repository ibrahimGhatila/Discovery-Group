/**
 * Curated Unsplash imagery. All photos are heavy-rotation Unsplash
 * pieces hot-linked by ID. If any specific photo doesn't fit the
 * intent, swap the `id` here — that's the only file you need to edit.
 *
 * URL pattern: https://images.unsplash.com/photo-{id}?{params}
 * Unsplash hot-linking is permitted under their license; we add
 * the standard `auto=format` and width hints for delivery.
 */

const U = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

const Uc = (id: string, w = 1600, h = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=${q}&auto=format&fit=crop`;

export const photos = {
  // ─────────── Hero / brand (editorial, no third-party branding)
  heroCorporate:   U('1495474472287-4d71bcdd2085', 2400),    // top-down roasted coffee beans
  heroOrocafe:     U('1559056199-641a0ac8b55e', 2400),       // espresso pulling, dark
  heroAbout:       U('1442550528053-c431ecb55509', 2000),    // coffee setup on wood

  // ─────────── Commodity (close-ups, no packaging visible)
  coffee:          U('1495474472287-4d71bcdd2085', 1600),    // top-down beans
  coffeeAlt:       U('1442550528053-c431ecb55509', 1600),    // coffee setup
  cocoa:           U('1606312619070-d48b4c652a52', 1600),    // cocoa
  cocoaAlt:        U('1606312619344-d3d36ba33f49', 1600),    // cocoa
  vanilla:         U('1631206753348-db44968fd440', 1600),    // vanilla beans
  chilli:          U('1583275065347-9c4a8bbc4eb6', 1600),    // dried chilis
  sesame:          U('1599909533739-9e4aafa1f3c4', 1600),    // sesame top-down
  beans:           U('1515543904379-3d757afe72e4', 1600),    // dried beans

  // ─────────── Producer / origin
  producerCoffee:  U('1583521214690-73421a1829a9', 1400),    // hands with beans
  producerCocoa:   U('1606312619344-d3d36ba33f49', 1400),    // cocoa
  producerVanilla: U('1631206753348-db44968fd440', 1400),    // vanilla
  cooperative:     U('1556679343-c7306c1976bc', 1600),       // cupping at a table
  landscape:       U('1442550528053-c431ecb55509', 2000),    // coffee landscape

  // ─────────── Process / facility
  drying:          U('1610632380989-680fe40816c6', 1600),    // roasted beans drying
  roasting:        U('1497636577773-f1231844b336', 1600),    // coffee pour
  warehouse:       U('1495474472287-4d71bcdd2085', 1600),    // top-down beans
  cupping:         U('1556679343-c7306c1976bc', 1600),       // cupping
  hands:           U('1583521214690-73421a1829a9', 1400),    // hands

  // ─────────── Orocafe / consumer
  espresso:        U('1559056199-641a0ac8b55e', 1600),       // espresso pour
  pourover:        U('1497636577773-f1231844b336', 1400),    // pour over
  latte:           U('1495474472287-4d71bcdd2085', 1400),    // top-down
  beansClose:      U('1610632380989-680fe40816c6', 1400),    // roasted beans
  package:         U('1442550528053-c431ecb55509', 1400),    // coffee setup

  // ─────────── Square thumbs
  squareCoffee:    Uc('1611174243874-d717b5f3bb09', 800, 800),
  squareCocoa:    Uc('1623258552014-f12f30dd84e5', 800, 800),
  squareVanilla:  Uc('1631206753348-db44968fd440', 800, 800),
  squareChilli:   Uc('1583275065347-9c4a8bbc4eb6', 800, 800),
  squareSesame:   Uc('1599909533739-9e4aafa1f3c4', 800, 800),
  squareBeans:    Uc('1515543904379-3d757afe72e4', 800, 800),
};

export type PhotoKey = keyof typeof photos;
