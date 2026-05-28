import { Fragrance } from "@/types/fragrance";

const cedarGallery = [
  "/images/cedar-01.jpg",
  "/images/cedar-02.jpg",
  "/images/cedar-03.jpg",
  "/images/cedar-04.jpg",
];

const perfumeGallery = [
  "/perfume-1.jpg",
  "/perfume-2.png",
  "/perfume-3.jpg",
  "/906982812452077635.jpg",
];

const mixedGallery = [
  "/perfume-3.jpg",
  "/images/cedar-03.jpg",
  "/perfume-1.jpg",
  "/images/cedar-02.jpg",
];

export const fragrances: Fragrance[] = [
  {
    slug: "cedar-08",
    name: "CEDAR 08",
    tagline: "The quiet after snowfall in a Norwegian forest.",
    family: ["woody", "amber"],
    topNotes: ["Bergamot", "Juniper", "Pink pepper"],
    heartNotes: ["Cedarwood", "Vetiver", "Geranium"],
    baseNotes: ["Oud", "Amber", "White musk"],
    story:
      "CEDAR 08 was born in a Norwegian forest at dusk — the smell of wet bark, woodsmoke from a cabin two kilometres away, and the particular quiet that only snow brings. We spent three winters refining this blend, searching for the exact moment when cedar stops smelling like a tree and starts smelling like a memory. The result is warm without being heavy, grounding without being dark.",
    howItWears: {
      opening:
        "A crisp burst of bergamot and juniper, like stepping outside into cold mountain air. Sharp, clean, alive.",
      heart:
        "The cedar emerges slowly, backed by vetiver and a whisper of geranium. This is the forest floor — damp earth, ancient bark, green light.",
      drydown:
        "Oud and amber settle into the skin like a wool blanket. Warm, close, intimate. This is the scent that stays on your collar.",
    },
    ingredients: [
      {
        name: "Atlas Cedarwood",
        origin: "Morocco",
        description:
          "Steam-distilled from the heartwood of Atlas cedar trees grown at high altitude in the Middle Atlas mountains.",
      },
      {
        name: "Bergamot",
        origin: "Calabria, Italy",
        description:
          "Cold-pressed from the rind of the bergamot orange, harvested at peak ripeness in January.",
      },
      {
        name: "Oud",
        origin: "Laos",
        description:
          "Wild-harvested agarwood aged for fifteen years, producing a complex, animalic depth that anchors the fragrance.",
      },
    ],
    sizes: [
      { ml: 30, price: 85 },
      { ml: 50, price: 135 },
      { ml: 100, price: 195 },
    ],
    images: cedarGallery,
    isBestseller: true,
    isNew: false,
  },
  {
    slug: "rose-14",
    name: "ROSE 14",
    tagline: "A rose garden at midnight, dew still on the petals.",
    family: ["floral", "amber"],
    topNotes: ["Lychee", "Saffron", "Pink pepper"],
    heartNotes: ["Bulgarian rose absolute", "Peony", "Raspberry"],
    baseNotes: ["Oud", "Patchouli", "Vanilla"],
    story:
      "ROSE 14 is not your grandmother's rose. This is rose after dark — rich, velvety, almost indecent. We paired Bulgarian rose absolute with saffron and a thread of oud to create something that feels both ancient and urgent. It opens with a burst of saffron and pink pepper before settling into a deep, almost hypnotic floral heart.",
    howItWears: {
      opening:
        "Saffron and pink pepper cut through immediately — warm, spiced, arresting. The lychee adds an unexpected sweetness.",
      heart:
        "The rose unfurls slowly, backed by peony. Rich and full, but never powdery. This is a modern rose.",
      drydown:
        "Oud and vanilla create a warm, resinous base. The rose lingers, transformed — darker, deeper, more intimate.",
    },
    ingredients: [
      {
        name: "Rose Absolute",
        origin: "Kazanlak, Bulgaria",
        description:
          "Extracted from Rosa damascena petals harvested before dawn, when oil content peaks.",
      },
      {
        name: "Saffron",
        origin: "Iran",
        description:
          "The world's most expensive spice, lending warm, honeyed, leathery depth.",
      },
      {
        name: "Patchouli",
        origin: "Sulawesi, Indonesia",
        description:
          "Aged patchouli leaves, fermented and distilled to remove harshness while retaining earthy depth.",
      },
    ],
    sizes: [
      { ml: 30, price: 95 },
      { ml: 50, price: 145 },
      { ml: 100, price: 215 },
    ],
    images: perfumeGallery,
    isBestseller: true,
    isNew: false,
  },
  {
    slug: "bergamote-22",
    name: "BERGAMOTE 22",
    tagline: "Sunday morning light through linen curtains.",
    family: ["citrus", "fresh"],
    topNotes: ["Bergamot", "Grapefruit", "Petitgrain"],
    heartNotes: ["Neroli", "White tea", "Jasmine sambac"],
    baseNotes: ["Musk", "Cedarwood", "Ambrette seed"],
    story:
      "BERGAMOTE 22 captures a very specific moment: the first hour of a slow Sunday. The apartment is flooded with light. The sheets are still warm. There is coffee somewhere, and someone you love in the next room. We wanted to bottle that particular brand of contentment — unhurried, luminous, quietly perfect.",
    howItWears: {
      opening:
        "Bright, sparkling bergamot and grapefruit. Clean but never clinical — there is always warmth underneath.",
      heart:
        "Neroli and white tea bring a translucent, airy quality. Jasmine sambac adds just enough floral depth.",
      drydown:
        "Soft musk and ambrette seed create a skin-like warmth. The kind of scent people lean in to ask about.",
    },
    ingredients: [
      {
        name: "Bergamot",
        origin: "Calabria, Italy",
        description:
          "Cold-pressed from the rind of bergamot oranges, capturing their bright, slightly bitter citrus oil.",
      },
      {
        name: "Neroli",
        origin: "Grasse, France",
        description:
          "Steam-distilled from bitter orange blossoms, harvested by hand in the perfume capital of the world.",
      },
      {
        name: "Ambrette Seed",
        origin: "Ecuador",
        description:
          "A botanical musk from the seeds of the ambrette plant, offering a clean, skin-like warmth.",
      },
    ],
    sizes: [
      { ml: 30, price: 75 },
      { ml: 50, price: 125 },
      { ml: 100, price: 185 },
    ],
    images: mixedGallery,
    isBestseller: false,
    isNew: true,
  },
  {
    slug: "amber-31",
    name: "AMBER 31",
    tagline: "The warmth of skin after a long embrace.",
    family: ["amber", "woody"],
    topNotes: ["Cardamom", "Elemi", "Orange blossom"],
    heartNotes: ["Amber", "Benzoin", "Labdanum"],
    baseNotes: ["Sandalwood", "Tonka bean", "Vanilla"],
    story:
      "AMBER 31 is the scent of closeness. Of standing so near to someone that you can feel their warmth but haven't yet touched. We built it around labdanum and benzoin — two resins that have been used in perfumery for three thousand years — and wrapped them in sandalwood and a bare trace of vanilla. It is quiet, enveloping, and deeply sensual.",
    howItWears: {
      opening:
        "Cardamom and elemi bring a soft, almost incense-like warmth. Orange blossom lifts it into something luminous.",
      heart:
        "Pure amber accord — golden, resinous, warm. Benzoin adds a sweetness like caramelised sugar.",
      drydown:
        "Sandalwood and tonka bean settle into a creamy, second-skin warmth. This is the scent that lasts until morning.",
    },
    ingredients: [
      {
        name: "Labdanum",
        origin: "Crete, Greece",
        description:
          "A resin harvested from rockrose shrubs, prized since antiquity for its warm, animalic depth.",
      },
      {
        name: "Sandalwood",
        origin: "Western Australia",
        description:
          "Sustainably harvested Australian sandalwood, richer and creamier than its Indian counterpart.",
      },
      {
        name: "Cardamom",
        origin: "Guatemala",
        description:
          "Green cardamom pods, steam-distilled to capture their warm, aromatic, slightly camphorous oil.",
      },
    ],
    sizes: [
      { ml: 30, price: 85 },
      { ml: 50, price: 135 },
      { ml: 100, price: 195 },
    ],
    images: ["/perfume-3.jpg", ...cedarGallery.slice(1)],
    isBestseller: true,
    isNew: false,
  },
  {
    slug: "oud-17",
    name: "OUD 17",
    tagline: "Smoke curling through a temple at dusk.",
    family: ["woody", "amber"],
    topNotes: ["Saffron", "Cinnamon bark", "Rose"],
    heartNotes: ["Oud", "Incense", "Guaiac wood"],
    baseNotes: ["Leather", "Amber", "Musk"],
    story:
      "OUD 17 is our most polarising fragrance — and our most beloved. Real oud is complex, challenging, and utterly magnetic. We let it lead here, supported by saffron and a dark rose, with incense threading through the heart. It is not subtle. It is not trying to be. It is the scent equivalent of a low voice in a quiet room.",
    howItWears: {
      opening:
        "Saffron and cinnamon bark strike first — rich, warm, almost edible. A breath of rose softens the blow.",
      heart:
        "The oud takes centre stage. Smoky, animalic, complex. Incense and guaiac wood add a meditative depth.",
      drydown:
        "Leather and amber create a lasting impression — rugged, warm, utterly distinctive.",
    },
    ingredients: [
      {
        name: "Oud",
        origin: "Laos",
        description:
          "Aged agarwood from centuries-old aquilaria trees, producing the richest, most complex oud available.",
      },
      {
        name: "Saffron",
        origin: "Iran",
        description:
          "Hand-harvested saffron threads, adding their distinctive warm, honeyed, leathery character.",
      },
      {
        name: "Frankincense",
        origin: "Oman",
        description:
          "Boswellia sacra resin, steam-distilled to capture its bright, citrusy, incense-like quality.",
      },
    ],
    sizes: [
      { ml: 30, price: 95 },
      { ml: 50, price: 145 },
      { ml: 100, price: 225 },
    ],
    images: cedarGallery,
    isBestseller: false,
    isNew: false,
  },
  {
    slug: "iris-09",
    name: "IRIS 09",
    tagline: "Cold marble floors in a Florentine palazzo.",
    family: ["floral", "fresh"],
    topNotes: ["Carrot seed", "Violet leaf", "Pink pepper"],
    heartNotes: ["Iris butter", "Orris concrete", "Heliotrope"],
    baseNotes: ["Suede", "Musk", "Sandalwood"],
    story:
      "IRIS 09 is the most refined fragrance in our collection. Iris — or orris — is the most expensive raw material in perfumery, requiring three years of drying before distillation. The result is powdery, cool, almost mineral. We paired it with violet leaf and suede to create something that feels like touching cold silk.",
    howItWears: {
      opening:
        "Violet leaf and carrot seed create an earthy, almost mineral opening. Cool, elegant, reserved.",
      heart:
        "Pure iris butter — powdery, silvery, ethereal. Heliotrope adds a subtle almond-like sweetness.",
      drydown:
        "Suede and soft musk. The iris remains, transformed into something skin-like and intimate.",
    },
    ingredients: [
      {
        name: "Orris Butter",
        origin: "Florence, Italy",
        description:
          "Extracted from iris pallida roots aged for three years, the most precious material in perfumery.",
      },
      {
        name: "Violet Leaf",
        origin: "Grasse, France",
        description:
          "Green, crisp, and slightly metallic — violet leaf absolute adds an intellectual coolness.",
      },
      {
        name: "Sandalwood",
        origin: "Western Australia",
        description:
          "Creamy, warm Australian sandalwood grounds the cool iris accord beautifully.",
      },
    ],
    sizes: [
      { ml: 30, price: 95 },
      { ml: 50, price: 145 },
      { ml: 100, price: 215 },
    ],
    images: [
      "/perfume-2.jpg",
      "/images/cedar-02.jpg",
      "/perfume-1.jpg",
      "/images/cedar-04.jpg",
    ],
    isBestseller: false,
    isNew: true,
  },
  {
    slug: "vetiver-26",
    name: "VETIVER 26",
    tagline: "Rain on hot pavement. The earth remembering water.",
    family: ["woody", "fresh"],
    topNotes: ["Grapefruit", "Lime", "Basil"],
    heartNotes: ["Vetiver", "Violet leaf", "Geranium"],
    baseNotes: ["Oakmoss", "Patchouli", "Tonka bean"],
    story:
      "VETIVER 26 is the smell of the ground after rain — what the Greeks called petrichor. We sourced our vetiver from Haiti, where the volcanic soil produces roots with an extraordinary smoky, earthy complexity. Paired with grapefruit and lime on top and oakmoss below, it is both modern and ancient.",
    howItWears: {
      opening:
        "Grapefruit and lime burst through immediately — sharp, green, electric. Basil adds an unexpected herbal twist.",
      heart:
        "Vetiver dominates — earthy, smoky, green. Violet leaf adds a cool, almost metallic edge.",
      drydown:
        "Oakmoss and patchouli create a deep, mossy foundation. Tonka bean rounds it into something warm and wearable.",
    },
    ingredients: [
      {
        name: "Vetiver",
        origin: "Les Cayes, Haiti",
        description:
          "Wild-harvested vetiver roots from volcanic Haitian soil, steam-distilled for their smoky, earthy complexity.",
      },
      {
        name: "Oakmoss",
        origin: "Auvergne, France",
        description:
          "Sustainably harvested lichen, contributing a deep, mossy, forest-floor quality.",
      },
      {
        name: "Lime",
        origin: "Mexico",
        description:
          "Cold-pressed Persian lime oil, adding a sparkling, zesty brightness to the earthy heart.",
      },
    ],
    sizes: [
      { ml: 30, price: 75 },
      { ml: 50, price: 125 },
      { ml: 100, price: 185 },
    ],
    images: [
      "/images/cedar-03.jpg",
      "/images/cedar-01.jpg",
      "/perfume-3.jpg",
      "/images/cedar-02.jpg",
    ],
    isBestseller: false,
    isNew: false,
  },
  {
    slug: "neroli-33",
    name: "NEROLI 33",
    tagline: "Orange groves along the Côte d'Azur at golden hour.",
    family: ["citrus", "floral"],
    topNotes: ["Neroli", "Mandarin", "Petitgrain"],
    heartNotes: ["Orange blossom absolute", "Jasmine", "Ylang ylang"],
    baseNotes: ["Honey", "Musk", "Cedarwood"],
    story:
      "NEROLI 33 captures the Mediterranean at its most seductive — late afternoon, the sun low over the water, the air heavy with orange blossom. We built it around neroli from Grasse and a honey-toned base that gives it an addictive, sun-warmed quality. It is the fragrance our customers reach for most in summer.",
    howItWears: {
      opening:
        "Neroli and mandarin — bright, honeyed, radiant. Petitgrain adds a green, slightly bitter sophistication.",
      heart:
        "Orange blossom absolute in full bloom. Jasmine and ylang ylang add a narcotic, heady floral intensity.",
      drydown:
        "Honey and musk create a warm, golden base. The orange blossom lingers for hours.",
    },
    ingredients: [
      {
        name: "Neroli",
        origin: "Grasse, France",
        description:
          "Steam-distilled from bitter orange blossoms hand-picked at dawn in the hills above the French Riviera.",
      },
      {
        name: "Orange Blossom Absolute",
        origin: "Tunisia",
        description:
          "Solvent-extracted from Tunisian orange blossoms, richer and more honeyed than distilled neroli.",
      },
      {
        name: "Mandarin",
        origin: "Sicily, Italy",
        description:
          "Cold-pressed Sicilian mandarin oil, sweet and bright with a slightly tangy edge.",
      },
    ],
    sizes: [
      { ml: 30, price: 80 },
      { ml: 50, price: 130 },
      { ml: 100, price: 190 },
    ],
    images: [
      "/906982812452077635.jpg",
      "/perfume-1.jpg",
      "/images/cedar-02.jpg",
      "/perfume-2.png",
    ],
    isBestseller: true,
    isNew: false,
  },
  {
    slug: "santal-19",
    name: "SANTAL 19",
    tagline: "A temple in Kyoto. Incense long after prayer.",
    family: ["woody", "amber"],
    topNotes: ["Cardamom", "Violet", "Bergamot"],
    heartNotes: ["Sandalwood", "Iris", "Papyrus"],
    baseNotes: ["Cashmeran", "Musk", "Leather"],
    story:
      "SANTAL 19 is a meditation on sandalwood — specifically, the extraordinary Australian sandalwood we source from sustainably managed plantations in Western Australia. It has a creamy, almost milky quality that Indian sandalwood lacks, and we let it dominate here, wrapped in iris and a trace of cashmeran for warmth.",
    howItWears: {
      opening:
        "Cardamom and bergamot — warm, bright, inviting. A breath of violet adds a powdery softness.",
      heart:
        "Sandalwood in all its creamy glory. Iris adds a cool elegance. Papyrus brings a dry, intellectual quality.",
      drydown:
        "Cashmeran and leather create a warm, textile-like base. The sandalwood never leaves — it becomes your skin.",
    },
    ingredients: [
      {
        name: "Sandalwood",
        origin: "Western Australia",
        description:
          "Sustainably plantation-grown Australian sandalwood, aged and steam-distilled for maximum creaminess.",
      },
      {
        name: "Iris",
        origin: "Florence, Italy",
        description:
          "Orris root aged three years, contributing its distinctive powdery, silvery character.",
      },
      {
        name: "Cashmeran",
        origin: "Synthetic",
        description:
          "A modern molecule that evokes warm cashmere — musky, woody, with a clean, laundry-like comfort.",
      },
    ],
    sizes: [
      { ml: 30, price: 85 },
      { ml: 50, price: 135 },
      { ml: 100, price: 195 },
    ],
    images: [
      "/images/cedar-04.jpg",
      "/perfume-3.jpg",
      "/images/cedar-01.jpg",
      "/images/cedar-02.jpg",
    ],
    isBestseller: true,
    isNew: false,
  },
  {
    slug: "tobacco-44",
    name: "TOBACCO 44",
    tagline: "An old library. Leather chairs. Rain against the window.",
    family: ["woody", "gourmand"],
    topNotes: ["Rum absolute", "Cinnamon", "Clove"],
    heartNotes: ["Tobacco absolute", "Cocoa", "Honey"],
    baseNotes: ["Leather", "Benzoin", "Vetiver"],
    story:
      "TOBACCO 44 is evening in a bottle. Specifically, an evening spent in a room with wood-panelled walls, deep leather chairs, and a fire that has been burning for hours. We combined tobacco absolute with rum, cocoa, and honey to create something rich and decadent but never heavy. It is comfort distilled into amber liquid.",
    howItWears: {
      opening:
        "Rum and cinnamon hit first — warm, boozy, festive. Clove adds a sharp, aromatic punctuation.",
      heart:
        "Tobacco leaf in all its complexity — sweet, dry, slightly smoky. Cocoa and honey add a gourmand richness.",
      drydown:
        "Leather and benzoin create a foundation that feels like an old book — warm, dry, storied.",
    },
    ingredients: [
      {
        name: "Tobacco Absolute",
        origin: "Virginia, USA",
        description:
          "Solvent-extracted from cured Virginia tobacco leaves, capturing their warm, honeyed, slightly sweet aroma.",
      },
      {
        name: "Cocoa Absolute",
        origin: "Ghana",
        description:
          "Extracted from roasted cocoa beans, adding a rich, bitter-sweet, chocolatey depth.",
      },
      {
        name: "Rum Absolute",
        origin: "Caribbean",
        description:
          "Distilled from aged Caribbean rum, contributing a warm, sweet, boozy opening note.",
      },
    ],
    sizes: [
      { ml: 30, price: 80 },
      { ml: 50, price: 130 },
      { ml: 100, price: 190 },
    ],
    images: [
      "/perfume-1.jpg",
      "/images/cedar-04.jpg",
      "/perfume-3.jpg",
      "/images/cedar-01.jpg",
    ],
    isBestseller: false,
    isNew: false,
  },
  {
    slug: "jasmine-11",
    name: "JASMINE 11",
    tagline: "A Marrakech riad at midnight. Warm stone and white flowers.",
    family: ["floral", "amber"],
    topNotes: ["Green tea", "Pear", "Galbanum"],
    heartNotes: ["Jasmine sambac", "Tuberose", "Ylang ylang"],
    baseNotes: ["Sandalwood", "Benzoin", "Musk"],
    story:
      "JASMINE 11 is an ode to the white flowers of North Africa — specifically, the jasmine sambac that blooms along the riads of Marrakech. Picked at night when its scent is most potent, jasmine is the most intoxicating flower in perfumery. We paired it with tuberose for richness and green tea for restraint.",
    howItWears: {
      opening:
        "Green tea and pear — cool, dewy, restrained. Galbanum adds a sharp, green, almost rubbery freshness.",
      heart:
        "Jasmine sambac in full, heady bloom. Tuberose amplifies the narcotic intensity. Ylang ylang adds a creamy sweetness.",
      drydown:
        "Sandalwood and benzoin wrap the florals in warmth. The jasmine softens into something creamy and skin-like.",
    },
    ingredients: [
      {
        name: "Jasmine Sambac",
        origin: "Grasse, France",
        description:
          "Hand-picked at night when oil content peaks, solvent-extracted to preserve its full, intoxicating character.",
      },
      {
        name: "Tuberose",
        origin: "India",
        description:
          "Indian tuberose absolute, rich, creamy, and intensely floral — the queen of night-blooming flowers.",
      },
      {
        name: "Green Tea",
        origin: "Kyoto, Japan",
        description:
          "A cool, dewy green tea accord that adds lightness and prevents the florals from becoming heavy.",
      },
    ],
    sizes: [
      { ml: 30, price: 85 },
      { ml: 50, price: 135 },
      { ml: 100, price: 195 },
    ],
    images: [
      "/perfume-2.jpg",
      "/906982812452077635.jpg",
      "/images/cedar-02.jpg",
      "/images/cedar-03.jpg",
    ],
    isBestseller: false,
    isNew: true,
  },
  {
    slug: "musk-07",
    name: "MUSK 07",
    tagline: "Clean sheets. Warm skin. The space between two people.",
    family: ["fresh", "amber"],
    topNotes: ["Aldehydes", "Bergamot", "Violet leaf"],
    heartNotes: ["White musk", "Iris", "Cotton flower"],
    baseNotes: ["Ambrette seed", "Cashmeran", "Skin musk"],
    story:
      "MUSK 07 is the most intimate fragrance in our collection. It was designed to smell like clean skin — your skin, but better. We used a blend of white musk, ambrette seed, and a proprietary skin musk accord to create something that sits so close to you it feels like part of your body. People will lean in. They always do.",
    howItWears: {
      opening:
        "Soft aldehydes and bergamot — clean, sparkling, like freshly laundered linen. Violet leaf adds a green coolness.",
      heart:
        "White musk and cotton flower — the purest, cleanest notes in perfumery. Iris adds a powdery elegance.",
      drydown:
        "Ambrette seed and cashmeran — warm, musky, impossibly close to the skin. This is your secret.",
    },
    ingredients: [
      {
        name: "Ambrette Seed",
        origin: "Ecuador",
        description:
          "A rare botanical musk from the seed of the ambrette flower, the finest natural musk alternative.",
      },
      {
        name: "Iris",
        origin: "Florence, Italy",
        description:
          "Orris root adds its characteristic powdery, cosmetic quality — elegant and cool.",
      },
      {
        name: "Cotton Flower",
        origin: "Egypt",
        description:
          "A delicate, airy accord that evokes freshly dried linen and clean, sun-warmed fabric.",
      },
    ],
    sizes: [
      { ml: 30, price: 65 },
      { ml: 50, price: 105 },
      { ml: 100, price: 165 },
    ],
    images: [
      "/perfume-3.jpg",
      "/perfume-2.png",
      "/images/cedar-01.jpg",
      "/images/cedar-04.jpg",
    ],
    isBestseller: false,
    isNew: false,
  },
];

export function getFragranceBySlug(slug: string): Fragrance | undefined {
  return fragrances.find((f) => f.slug === slug);
}

export function getFragrancesByFamily(family: string): Fragrance[] {
  if (family === "all") return fragrances;
  return fragrances.filter((f) =>
    f.family.includes(family as Fragrance["family"][number]),
  );
}
