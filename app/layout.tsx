import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Projeto Transformação 90 Dias - Método Secreto que Transforma Vidas",
  description:
    "Descubra o sistema completo que está revolucionando a vida de milhares de pessoas em apenas 90 dias. Transforme seus hábitos, energia e autoestima com método comprovado.",
  keywords: "transformação, 90 dias, hábitos saudáveis, energia, autoestima, método comprovado, saúde, bem-estar",
  authors: [{ name: "Projeto Transformação 90 Dias" }],
  openGraph: {
    title: "Projeto Transformação 90 Dias - Método Secreto",
    description: "Sistema completo para transformar sua vida em 90 dias",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
