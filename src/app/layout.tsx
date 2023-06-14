'use client'
import { Container, Header } from '@/styles/pages/app'

import { Roboto } from 'next/font/google'
import Image from 'next/image'

import logoImg from '@/assets/logo.svg'
import StyledComponentsRegistry from './registry'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <StyledComponentsRegistry>
        <body className={roboto.className}>
          <Container>
            <Header>
              <Image src={logoImg} alt="Logo Ignite Shop" />
            </Header>
            {children}
          </Container>
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
