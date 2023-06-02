"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HomeContainer, Product } from "@/styles/pages/home";
import product from "@/assets/Shirt/1.png";
import product2 from "@/assets/Shirt/2.png";
import product3 from "@/assets/Shirt/3.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image alt="product" src={product} width={520} height={480} />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 129,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image alt="product" src={product2} width={520} height={480} />

        <footer>
          <strong>Camisa Y</strong>
          <span>R$ 122,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image alt="product" src={product3} width={520} height={480} />

        <footer>
          <strong>Camisa Z</strong>
          <span>R$ 112,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image alt="product" src={product3} width={520} height={480} />

        <footer>
          <strong>Camisa Z</strong>
          <span>R$ 112,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
