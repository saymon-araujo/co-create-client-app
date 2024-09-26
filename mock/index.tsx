import { FilterOptionsProps } from "@/components/compound/QuickFiltersCarousel";
import { ProductProps } from "@/components/ProductListItem";

export const mockFilters: FilterOptionsProps[] = [
  {
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/top_styles/botanical.jpg?width=64&quality=100&resize=contain",
    title: "Botanical",
    value: "botanical",
  },
  {
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/top_styles/surrealism.jpg?width=64&quality=100&resize=contain",
    title: "Surrealism",
    value: "surrealism",
  },
  {
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/top_styles/black_work.jpg?width=64&quality=100&resize=contain",
    title: "Blackwork",
    value: "blackwork",
  },
  {
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/top_styles/geometric.jpg?width=64&quality=75&resize=contain",
    title: "Geometric",
    value: "geometric",
  },
];

export const mockProducts: ProductProps[] = [
  {
    id: "1",
    title: "Deadly Moth",
    description:
      "This tattoo is representing that you can find beauty everywhere, sometimes even in death",
    priceInCents: 50000,
    artist: {
      name: "Bence Kormos",
      location: "New York, New York",
      description:
        "Hi! I'm Bence, originally from Hungary. My journey into tattooing began in my homeland, and soon after, I embarked on a journey across Europe for six years. This time was filled with learning from fellow artists and connecting with incredible individuals. By 2015, I made the decision to relocate to New York. Since making this move, I've settled into life and work here. I occasionally do guest spots and conventions worldwide, several times a year. Hopefully I’ll get to meet a lot of new clients/friends through this platform. Sincerely, -Bence …and don’t forget, “your skin, your story”",
      instagram: "stayweirdtattoo",
    },
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/tattoos/86e868fd-9936-4f71-be2c-1632b55b1523/2ef83d50-7cae-41d4-806c-d5b80250b6c4.png?width=1080&quality=75&resize=contain",
  },
  {
    id: "2",
    title: "Hopeless Romantic",
    description:
      "This tattoo is inspired by neo traditional and art Deco styles representing the female beauty.",
    priceInCents: 100000,
    artist: {
      name: "Bence Kormos",
      location: "New York, New York",
      description:
        "Hi! I'm Bence, originally from Hungary. My journey into tattooing began in my homeland, and soon after, I embarked on a journey across Europe for six years. This time was filled with learning from fellow artists and connecting with incredible individuals. By 2015, I made the decision to relocate to New York. Since making this move, I've settled into life and work here. I occasionally do guest spots and conventions worldwide, several times a year. Hopefully I’ll get to meet a lot of new clients/friends through this platform. Sincerely, -Bence …and don’t forget, “your skin, your story”",
      instagram: "stayweirdtattoo",
    },
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/tattoos/86e868fd-9936-4f71-be2c-1632b55b1523/0eca7f08-5ba1-4450-8ba0-378b4e171803.png?width=1080&quality=75&resize=contain",
  },
  {
    id: "3",
    title: "Lamarr Muerte",
    description:
      "Hedy Lamarr (old classic Hollywood actress) with decorative lines on her face resembling Dia le dos muertos makeup. Can be exchanged for another classic black and white imagery from a film. Makeup/ lines can be altered, this is just a concept.",
    priceInCents: 200000,
    artist: {
      name: "Cleo Pétra",
      location: "Los Angeles, California",
      description:
        "Ethiopian/Swedish Tattooer, Creative Director & Contemporary artist based in Los Angeles, California. I occasionally also work out of New York, Stockholm, Miami, Texas and Stockholm. After 16+ years of tattooing and traveling across the globe doing it, I’ve been inspired by different cultures, symbolism, nature, history and people. I specialize in black & grey realism but enjoy adding an element of surrealism to it. My favorite way of working is to collaborate with each client to create a unique design.",
      instagram: "cleokinnaman",
    },
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/tattoos/fb43ece7-f0c1-4a69-aeee-f5d77f404b26/dffabc3c-8128-4fc4-9d69-b7c5d6c10031.jpg?width=1080&quality=75&resize=contain",
  },
  {
    id: "4",
    title: "AXXXLION",
    description:
      "Realistic Tattoo design for outher thigh, upper arm, underarm, calf. The price includes a two-days-appointment necessary for the realization of this tattoo.",
    priceInCents: 250000,
    artist: {
      name: "Moni Marino",
      location: "Frankfurt, Hesse +1",
      description:
        "Moni Marino began her tattoo journey in 1993 and has since become a renowned figure in Europe and worldwide. She specializes in Photorealistic Portraits, Chicano, and Mexican Style tattoos, in full color and black & grey. Hailing from Italy, her work is deeply influenced by spirituality, mysticism, and mythology. Moni Marino has received prestigious awards, including Best International Artist at the 2014 Skin Deep Industry Awards and the 2013 Rockstar Energy Inked Up World Tour.",
      instagram: "moni_marino_artist",
    },
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/tattoos/d4f02209-a7d3-442b-ae13-ba5c200b2378/3ac84910-5fc5-43c0-9671-6c131f333ad6.jpg?width=1080&quality=75&resize=contain",
  },
];
