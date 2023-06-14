import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Product({
  params,
}: {
  params: {
    id: string
  }
}) {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
          voluptate voluptatibus vel consectetur laudantium sapiente aperiam
          perspiciatis, magni maiores cupiditate voluptas consequatur eligendi
          porro praesentium officia rerum nihil! Nam, debitis?
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
