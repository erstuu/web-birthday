const img1 = "/IMG-1.jpg";
const img2 = "/IMG-2.jpg";
const img3 = "/IMG-3.jpg";
const img4 = "/IMG-4.jpg";
const img5 = "/IMG-5.jpg";
const img6 = "/IMG-6.jpg";
const img7 = "/IMG-7.jpg";

const wishes = [
  {
    emoji: "🥰",
    text: "Semoga hari-harimu selalu dipenuhi senyum dan hal-hal kecil yang bikin kamu bahagia.",
  },
  {
    emoji: "🫶",
    text: "Semoga semua mimpi kamu pelan-pelan jadi kenyataan, dan aku bisa lihat kamu sampai di puncaknya.",
  },
  {
    emoji: "💖",
    text: "Semoga hidup kamu selalu seindah kamu waktu lagi ketawa.",
  },
  {
    emoji: "🎂✨",
    text: "Semoga tahun ini jadi tahun paling seru dan penuh kejutan manis buat kamu.",
  },
  {
    emoji: "💞🥺",
    text: "Semoga kamu selalu dikelilingi cinta… terutama dari aku tentunya.",
  },
  {
    emoji: "🤍🌿",
    text: "Semoga kamu selalu sehat, kuat, dan tetap jadi kamu yang aku banggakan.",
  },
];

const images = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
};

const topImages = [
  { src: img1, rotate: "rotate-[-8deg]" },
  { src: img2, rotate: "rotate-[4deg]" },
  { src: img6, rotate: "rotate-[4deg]" },
];

const bottomImages = [
  {
    src: img3,
    rotate: "rotate-[-4deg]",
    className: "w-40 md:w-56 m-2 md:m-4 p-4 md:p-6",
  },
  {
    src: img4,
    rotate: "rotate-[8deg]",
    className: "w-40 md:w-56 m-2 md:m-4 p-4 md:p-6",
  },
  {
    src: img5,
    rotate: "rotate-[-6deg]",
    className: "w-40 md:w-56 m-2 md:m-4 p-4 md:p-6",
  },
  // hanya desktop
  {
    src: img1,
    rotate: "rotate-[-8deg]",
    className: "hidden md:block w-56 m-4 p-6",
  },
  {
    src: img2,
    rotate: "rotate-[4deg]",
    className: "hidden md:block w-56 m-4 p-6",
  },
  {
    src: img6,
    rotate: "rotate-[-8deg]",
    className: "hidden md:block w-56 m-4 p-6",
  },
  {
    src: img7,
    rotate: "rotate-[-4deg]",
    className: "hidden md:block w-56 m-4 p-6",
  },
];

export default wishes;
export { topImages, bottomImages, images };
