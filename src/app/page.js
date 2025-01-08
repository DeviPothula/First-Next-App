import Image from "next/image";
import { oswald } from "./fonts";
import DiningRoomImage from "../../public/Dining Room.jpg";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-6 md:px-28 md:py-12 flex-col">
      {/* Add Hero Images Here */}
      <Image src={DiningRoomImage} className="" alt="DiningRoomImage" />
      <p className="my-[10px]">Welcome to next js learning</p>
      <div className={`${oswald.className} antialiased my-[10px]`}>
        <p>Here I am testing how to import next google fonts and with Oswald</p>
      </div>
    </div>
  );
}
