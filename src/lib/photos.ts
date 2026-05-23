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
  // ─────────── Hero / brand
  heroCorporate:   U('1611854779393-1b2da9d400fe', 2400),   // green coffee landscape, hands holding cherries
  heroOrocafe:     U('1559056199-641a0ac8b55e', 2400),       // espresso pour / dark coffee
  heroAbout:       U('1442550528053-c431ecb55509', 2000),    // coffee table flat lay

  // ─────────── Commodity heroes
  coffee:          U('1611174243874-d717b5f3bb09', 1600),    // coffee plant / cherries on branch
  coffeeAlt:       U('1610889556528-9a770e32642f', 1600),    // green coffee beans
  cocoa:           U('1623258552014-f12f30dd84e5', 1600),    // cocoa pod open
  cocoaAlt:        U('1606312619070-d48b4c652a52', 1600),    // cacao
  vanilla:         U('1631206753348-db44968fd440', 1600),    // vanilla beans
  chilli:          U('1583275065347-9c4a8bbc4eb6', 1600),    // dried chilis
  sesame:          U('1599909533739-9e4aafa1f3c4', 1600),    // sesame seeds top-down
  beans:           U('1515543904379-3d757afe72e4', 1600),    // dried beans variety

  // ─────────── Producer / origin
  producerCoffee:  U('1559496417-e7f25cb247f3', 1400),       // farmer holding cherries
  producerCocoa:   U('1606312619344-d3d36ba33f49', 1400),    // cocoa farmer
  producerVanilla: U('1606312619070-d48b4c652a52', 1400),    // vanilla farming
  cooperative:     U('1497935586351-b67a49e012bf', 1600),    // gathering / community
  landscape:       U('1623076546329-fa42dccd1e5d', 2000),    // east african mountain landscape

  // ─────────── Process / facility
  drying:          U('1610632380989-680fe40816c6', 1600),    // drying beds / roasted beans
  roasting:        U('1611854779393-1b2da9d400fe', 1600),    // roasting drum
  warehouse:       U('1581344947731-22c43ef8d3a1', 1600),    // jute coffee bags
  cupping:         U('1556679343-c7306c1976bc', 1600),       // coffee cupping
  hands:           U('1583521214690-73421a1829a9', 1400),    // hands sorting beans

  // ─────────── Orocafe products / consumer
  espresso:        U('1610632380989-680fe40816c6', 1600),    // espresso
  pourover:        U('1497636577773-f1231844b336', 1400),    // pour over
  latte:           U('1495474472287-4d71bcdd2085', 1400),    // coffee from above
  beansClose:      U('1559525323-cbb9e84df04c', 1400),       // roasted beans close
  package:         U('1604847650541-e2c1cebfff35', 1400),    // coffee bag packaging

  // ─────────── Square thumbs
  squareCoffee:    Uc('1611174243874-d717b5f3bb09', 800, 800),
  squareCocoa:    Uc('1623258552014-f12f30dd84e5', 800, 800),
  squareVanilla:  Uc('1631206753348-db44968fd440', 800, 800),
  squareChilli:   Uc('1583275065347-9c4a8bbc4eb6', 800, 800),
  squareSesame:   Uc('1599909533739-9e4aafa1f3c4', 800, 800),
  squareBeans:    Uc('1515543904379-3d757afe72e4', 800, 800),
};

export type PhotoKey = keyof typeof photos;
