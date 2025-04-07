import Image from "next/image";
import Link from "next/link";
import { Wine } from "../components/Icon/WIne";
import { Party } from "../components/Icon/Party";
import Counter from "../components/Counter/Counter";
import ShowAnimated from "@/components/ShowAniamted/ShowAnimated";
import BestManAndForm from "@/components/BestManAndForm/BestManAndForm";
export default function Home() {
  console.log("Hello from home");
  
  return (
    <div className="mx-auto relative z-10">
      {/* Bride and man */}
      <ShowAnimated
        title="Save the date"
        image="/Us.png"
        names="Мария и Мирослав"
      />
      <div className="mx-auto text-center">
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
        {/* <p className=" font-Pacifico text-base text-mainOlive">Save the date</p> */}
      </div>

      {/* Wedding day Info */}
      <h2 className="fade-in font-Pacifico py-5 text-5xl text-center text-mainOlive">
        Нашият сватбен ден
      </h2>
      <div className="flex justify-center even:rigth[-50%]">
        <div className="fade-left  flex flex-col justify-center">
          <h2 className=" ceremony-text">Сватбена церемония</h2>
          <p className=" animate-wiggle font-Pacifico text-base text-center text-lightBlack">
            18:30
          </p>
          <div className="mx-auto my-10">
            <Wine />
          </div>
          <h2 className=" ceremony-text">Нека партито започне</h2>
          <p className=" animate-wiggle font-Pacifico text-base text-center text-lightBlack">
            20:00
          </p>
        </div>
        <Image
          src="/line.png"
          loading="lazy"
          width={170}
          height={150}
          alt="line"
        />

        <div className=" fade-right flex flex-col justify-center">
          <div className="mx-auto my-10">
            <Image
              src="/rings.png"
              loading="lazy"
              width={50}
              height={50}
              alt="rings"
            />
          </div>
          <h2 className=" ceremony-text">Коктейл за добре дошли</h2>
          <p className=" animate-wiggle font-Pacifico text-base text-center text-lightBlack">
            19:00
          </p>
          <div className="mx-auto my-10">
            <Party />
          </div>
        </div>
      </div>
      {/* Best man */}
      {/* <ShowAnimated title="Кумове" image="/kumove.png" names="Ани и Валентин" />

      <Form /> */}
      <BestManAndForm />
      <h2 className="font-Pacifico my-8 py-5 text-5xl text-center text-mainOlive">
        Остават още
      </h2>
      <Counter />
    </div>
  );
}
