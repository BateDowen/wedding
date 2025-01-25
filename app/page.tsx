import Image from "next/image";
import Link from "next/link";
import { Wine } from "./components/Icon/WIne";
import { Party } from "./components/Icon/Party";
import { Form } from "./components/Form/Form";
export default function Home() {
  console.log("Hello from home");
  return (
    <div className="mx-auto relative z-10">
      <div className="flex laptop:flex-row flex-col justify-center gap-8 ">
        <div className="flex flex-col gap-2 text-center m-auto">
          <h1 className="font-Pacifico text-6xl text-mainOlive">Мария</h1>
          <h1 className="font-Pacifico text-6xl text-mainOlive">и</h1>
          <h1 className="font-Pacifico text-6xl text-mainOlive">Мирослав</h1>
          <h2 className="font-Pacifico text-xl pt-5 text-mainOlive">
            13.09.2025
          </h2>
          <Link
            className="text-center "
            href="https://maps.app.goo.gl/EpRCJr8f1gNEz6v67"
            target="_blank"
          >
            <h2 className=" text-base underline text-mainOlive">
              Мавруда Гардън, Ягодовско шосе╰┈➤
            </h2>
          </Link>
        </div>
        <Image
          src="/us.png"
          alt="us"
          className="mx-auto"
          objectFit="cover"
          width={400}
          height={300}
        />
      </div>
      <p className=" absolute top-2 font-Pacifico text-base text-mainOlive">
        Save the date
      </p>
      <h2 className="fade-in font-Pacifico py-5 text-5xl text-center text-mainOlive">
        Нашият сватбен ден
      </h2>
      <div className="flex justify-center even:rigth[-50%]">
        <div className="fade-left  flex flex-col justify-center">
          <h2 className=" font-Pacifico pt-5 text-xl text-center text-mainOlive">
            Сватбена церемония
          </h2>
          <p className=" animate-wiggle font-Pacifico text-base text-center text-lightBlack">
            18:30
          </p>
          <div className="mx-auto my-10">
            <Wine />
          </div>
          <h2 className=" font-Pacifico pt-5 text-xl text-center text-mainOlive">
            Нека партито започне
          </h2>
          <p className=" animate-wiggle font-Pacifico text-base text-center text-lightBlack">
            20:00
          </p>
        </div>
        <svg
          width="224"
          height="528"
          viewBox="0 0 14824 30528"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6633 0C6633 1949.5 6633 4992 6633 4992C6633 4992 10048.1 5087 11177 6592C13102.5 9159.03 6311.19 10432.9 3369 9152C1634.48 8396.87 41 5632 41 5632C41 5632 3008.87 6362.18 4841 7040C7639.99 8075.53 11689 10432 11689 10432C11689 10432 12402.9 10924.3 12777 11328C15416 14176 6503.61 18034.6 3689 15360C2724.48 14443.5 2356.21 13655.4 2089 12352C1313.26 8568 7758.67 14457.3 11177 16256C12395.1 16897 13267.1 17019.3 14249 17984C17774.2 21447.5 3369 24064 2793 23360C2217 22656 246.381 19061.5 2089 18368C3545.51 17819.9 4589.12 19123.9 5545 20352C6472.86 21544.1 6633 22037.3 6633 24064C6633 26090.7 6633 30220.8 6633 30528"
            stroke="black"
            strokeWidth="40"
          />
        </svg>

        <div className=" fade-right flex flex-col justify-center">
          <div className="mx-auto my-10">
            <Image src='/rings.png' width={50} height={50} alt="rings"/>
          </div>
          <h2 className=" font-Pacifico pt-5 text-xl text-center text-mainOlive">
            Сватбена церемония
          </h2>
          <p className=" animate-wiggle font-Pacifico text-base text-center text-lightBlack">
            18:30
          </p>
          <div className="mx-auto my-10">
            <Party />
          </div>
        </div>
      </div>
      <h2 className="font-Pacifico my-8 py-5 text-5xl text-center text-mainOlive">
        Ще присъствате ли на сватбата?
      </h2>
      <Form />
    </div>
  );
}
