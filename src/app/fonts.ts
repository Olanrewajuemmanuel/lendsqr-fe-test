import { Roboto, Work_Sans } from "next/font/google";
import localFont from "next/font/local";

export const roboto400 = Roboto({ weight: "400", subsets: ["latin"] });
export const workSans400 = Work_Sans({ weight: "400", subsets: ["latin"] });
export const workSans500 = Work_Sans({ weight: "500", subsets: ["latin"] });
export const workSans600 = Work_Sans({ weight: "600", subsets: ["latin"] });
export const avenirNext400 = localFont({
  src: "../assets/fonts/AvenirNextLTPro-Regular.otf",
});
export const avenirNext600 = localFont({
  src: "../assets/fonts/AvenirNextLTPro-Medium.otf",
  weight: "600",
});
export const avenirNext700 = localFont({
  src: "../assets/fonts/AvenirNextLTPro-Bold.otf",
  weight: "700",
});
