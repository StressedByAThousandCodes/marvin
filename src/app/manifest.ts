import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marvin",
    short_name: "Marvin",
    start_url: "/home",
    display: "standalone",
    background_color: "#ffffff",
    icons: [
      {
        src: "./marvin.svg",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
