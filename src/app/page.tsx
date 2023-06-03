"use client"
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HomeContainer, Product } from "@/styles/pages/home";
import product from "@/assets/Shirt/1.png";
import product2 from "@/assets/Shirt/2.png";
import product3 from "@/assets/Shirt/3.png";
import { stripe } from "@/lib/stripe";
import { useCallback, useEffect, useState } from "react";
import Stripe from "stripe";


type Products = {
  id: string;
  name: string;
  imageUrl: string;
  price: number | null;
}[]

async function getListProducts(): Promise<Products> {
  const res = await stripe.products.list({
    expand: ['data.default_price']
  });
  console.log(res)
  const products = res.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price?.unit_amount != null ? price?.unit_amount / 100 : null
    }
  })
  console.log(products)
  return products;
}

export default function Home() {
  const [products, setProducts] = useState<Products>([])
  const getProduct = useCallback(async () => {
    const fetchProducts = async () => {
      const res = await getListProducts();
      setProducts(res);
    };

    fetchProducts();
  }, [getListProducts]);

  useEffect(() => {
    getProduct()
  }, [])
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <>
      {
        products.length > 0 && <HomeContainer ref={sliderRef} className="keen-slider">
          {
            products?.map((product) => {
              return (
                <Product className="keen-slider__slide" key={product.id}>
                  <Image alt="product" src={product.imageUrl} width={520} height={480} />

                  <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </footer>
                </Product>
              );
            })
          }
        </HomeContainer>
      }
    </>
  );
}