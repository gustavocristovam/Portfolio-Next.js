import './globals.css';

export const metadata = {
  title: 'Gustavo Cristovam | Desenvolvedor Back-End',
  description: 'Desenvolvedor Back-End especializado em Node.js, TypeScript, Python, APIs e automações inteligentes. Criando soluções escaláveis e eficientes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-dark-950 text-gray-100 antialiased">{children}</body>
    </html>
  )
}
