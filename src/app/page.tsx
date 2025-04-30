import Image from "next/image"
import Link from "next/link"
// Eliminamos la importación de lucide-react ya que no está instalado

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#1e2530] text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Fale Conosco (47) 3084-5500</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Atendimento 8h às 12h | 13h30 às 17h</span>
          </div>
          <Link
            href="#"
            className="bg-[#e6e0d4] text-[#1e2530] px-4 py-1 rounded text-sm font-medium flex items-center"
          >
            Área do Cliente
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=50&width=120"
              alt="ISK Contabilidade"
              width={120}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium">
              INÍCIO
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium">
              SOBRE A ISK
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium">
              SERVIÇOS
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium">
              TRABALHE CONOSCO
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium">
              CONTATO
            </Link>
            <Link href="/segunda-pagina" className="bg-[#1e2530] text-white px-4 py-2 rounded text-sm font-medium">
              ir a la segunda pagina
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#e6e0d4] py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e2530]">
              esta pagina esta realizada con v0 si quieres ir a la segunda pagina preciona en el menu de arriba
            </h1>
            <p className="text-gray-700">
              A ISK Contabilidade oferece ao cliente um atendimento diferenciado e específico para cada segmento de
              negócio, sempre estruturado sobre os pilares que sustentam a ISK: confiança, credibilidade e ética
            </p>
            <button className="bg-[#1e2530] text-white px-6 py-2 uppercase text-sm font-bold">Saiba Mais</button>
          </div>
          <div className="hidden md:block">
            {/* This would be replaced with the actual image */}
            <div className="relative h-80 w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Profissionalismo"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Confiança */}
            <div className="bg-[#1e2530] text-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-[#2a3441] p-3 rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Confiança" width={40} height={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">CONFIANÇA</h3>
              <p className="text-center text-sm">
                Sobre ela estruturamos todas as nossas atitudes. Buscando honestidade e a cada dia através de um
                trabalho íntegro e de qualidade.
              </p>
            </div>

            {/* Credibilidade */}
            <div className="bg-[#1e2530] text-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-[#2a3441] p-3 rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Credibilidade" width={40} height={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">CREDIBILIDADE</h3>
              <p className="text-center text-sm">
                Uma qualidade que se conquista com um trabalho de excelência diante do mercado de maneira uniforme a
                todos os nossos clientes.
              </p>
            </div>

            {/* Ética */}
            <div className="bg-[#1e2530] text-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-[#2a3441] p-3 rounded-full">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Ética" width={40} height={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">ÉTICA</h3>
              <p className="text-center text-sm">
                Um pilar fundamental baseado em nossos valores que norteia as ações de nossa equipe, definindo critérios
                para a manipulação de informações de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1e2530] mb-2">SERVIÇOS</h2>
          <p className="text-center text-gray-600 mb-12">Conheça nosso portfólio de serviços</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Assessoria Empresarial */}
            <div className="flex">
              <div className="mr-4">
                <Image src="/placeholder.svg?height=60&width=60" alt="Assessoria Empresarial" width={60} height={60} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Assessoria Empresarial</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Visando apresentar de forma clara e prática a aplicação de conceitos financeiros ajustados ao foco
                  de...
                </p>
                <Link href="#" className="text-sm text-gray-600 flex items-center">
                  saiba mais
                  <span className="ml-1">⟩</span>
                </Link>
              </div>
            </div>

            {/* Contábil */}
            <div className="flex">
              <div className="mr-4">
                <Image src="/placeholder.svg?height=60&width=60" alt="Contábil" width={60} height={60} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Contábil</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Além de atender as exigências legais, a contabilidade tem a função de estudar, registrar, interpretar
                  e...
                </p>
                <Link href="#" className="text-sm text-gray-600 flex items-center">
                  saiba mais
                  <span className="ml-1">⟩</span>
                </Link>
              </div>
            </div>

            {/* Recursos Humanos */}
            <div className="flex">
              <div className="mr-4">
                <Image src="/placeholder.svg?height=60&width=60" alt="Recursos Humanos" width={60} height={60} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Recursos Humanos</h3>
                <p className="text-sm text-gray-600 mb-2">
                  O capital humano é de suma importância dentro das empresas, assim como a valorização dos
                  funcionários...
                </p>
                <Link href="#" className="text-sm text-gray-600 flex items-center">
                  saiba mais
                  <span className="ml-1">⟩</span>
                </Link>
              </div>
            </div>

            {/* Fiscal */}
            <div className="flex">
              <div className="mr-4">
                <Image src="/placeholder.svg?height=60&width=60" alt="Fiscal" width={60} height={60} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Fiscal</h3>
                <p className="text-sm text-gray-600 mb-2">
                  As alterações diárias na legislação tributária causam grande impacto na gestão das empresas. Uma
                  interpretação equivocada...
                </p>
                <Link href="#" className="text-sm text-gray-600 flex items-center">
                  saiba mais
                  <span className="ml-1">⟩</span>
                </Link>
              </div>
            </div>

            {/* Societário */}
            <div className="flex">
              <div className="mr-4">
                <Image src="/placeholder.svg?height=60&width=60" alt="Societário" width={60} height={60} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Societário</h3>
                <p className="text-sm text-gray-600 mb-2">
                  A gestão societária de uma empresa necessita de conhecimento e aplicação de técnicas e procedimentos
                  desde...
                </p>
                <Link href="#" className="text-sm text-gray-600 flex items-center">
                  saiba mais
                  <span className="ml-1">⟩</span>
                </Link>
              </div>
            </div>

            {/* Planejamento Tributário */}
            <div className="flex">
              <div className="mr-4">
                <Image src="/placeholder.svg?height=60&width=60" alt="Planejamento Tributário" width={60} height={60} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Planejamento Tributário</h3>
                <p className="text-sm text-gray-600 mb-2">
                  O planejamento tributário trata-se de uma forma lícita de reduzir a carga fiscal das empresas. Para...
                </p>
                <Link href="#" className="text-sm text-gray-600 flex items-center">
                  saiba mais
                  <span className="ml-1">⟩</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1e2530] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">
                    Seu nome*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Seu e-mail*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm mb-1">
                    Seu telefone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-white"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded">
                    <Image src="/placeholder.svg?height=60&width=150" alt="reCAPTCHA" width={150} height={60} />
                  </div>
                </div>
                <button type="submit" className="bg-white text-[#1e2530] px-8 py-2 rounded uppercase font-medium">
                  Enviar
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Fale conosco</h2>
              <p>Nos envie uma mensagem preenchendo o formulário, entraremos em contato o mais rápido possível!</p>
              <div className="mt-8">
                <p>Se preferir, tire suas dúvidas através do telefone:</p>
                <p className="text-2xl font-bold mt-2">(47) 3084-5500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e6e0d4] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <Image src="/placeholder.svg?height=60&width=150" alt="ISK Contabilidade" width={150} height={60} />
            </div>
            <div className="text-sm text-gray-600 mt-4 md:mt-0 text-center md:text-right">
              <p>CRC SC-009492/O-0</p>
              <p>
                Escritório contábil em Jaraguá do Sul - Santa Catarina, baseado em confiança, credibilidade, ética e
              </p>
              <p>qualidade em seus serviços. Confira nosso endereço</p>
              <p className="mt-2">
                ISK Contabilidade © 2019 - Todos os direitos reservados | Cubbe Marketing & Inovalize
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
