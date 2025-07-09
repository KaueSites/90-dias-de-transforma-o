"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Shield, Gift, Clock, Target, Zap, Heart, Trophy, ArrowRight } from "lucide-react"

export default function LandingPagePersuasiva() {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 23, seconds: 45 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Contador regressivo
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de Urgência */}
      <div className="bg-red-600 text-white py-2 px-4 text-center font-semibold text-sm">
        ⚠️ OFERTA ESPECIAL TERMINA EM: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-yellow-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Descubra o Método Secreto que Está <span className="text-green-600">Transformando a Vida</span> de
              Milhares de Pessoas em Apenas <span className="bg-yellow-400 px-2 py-1 rounded">90 Dias</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              O sistema completo que vai <strong>revolucionar seus hábitos alimentares</strong>, sua energia e sua
              autoestima - mesmo se você já tentou de tudo e não conseguiu resultados duradouros
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-lg">
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="w-6 h-6" />
                Sem dietas malucas ou restrições extremas
              </div>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="w-6 h-6" />
                Apenas 20 minutos por dia de dedicação
              </div>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="w-6 h-6" />
                Resultados visíveis já nas primeiras 2 semanas
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <span className="text-2xl text-gray-500 line-through">De R$ 197,00</span>
              <span className="text-5xl font-bold text-green-600">R$ 25,00</span>
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                OFERTA DE LANÇAMENTO
              </span>
            </div>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 mb-6"
              onClick={() => scrollToSection("cta-final")}
            >
              QUERO TRANSFORMAR MINHA VIDA AGORA
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

            <p className="text-sm text-gray-600">
              ✓ Acesso imediato após o pagamento • ✓ Garantia de 7 dias • ✓ Suporte completo incluído
            </p>
          </div>
        </div>
      </section>

      {/* Sobre o Produto */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Por Que Este Método Funciona Quando <span className="text-red-600">Outros Falharam?</span>
            </h2>

            <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
              <p>
                Depois de anos estudando os hábitos de pessoas que conseguiram{" "}
                <strong>transformações reais e duradouras</strong>, descobri que o segredo não está em dietas
                restritivas ou treinos impossíveis.
              </p>

              <p className="text-xl font-semibold text-green-600">
                O segredo está em um sistema simples de 3 pilares que trabalham juntos:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🥗</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Alimentação Inteligente</h3>
                <p className="text-gray-700 text-lg">
                  Cardápios práticos que cabem na sua rotina, sem abrir mão do sabor
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💪</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Movimento Eficiente</h3>
                <p className="text-gray-700 text-lg">Treinos de 20 minutos que você faz em casa, sem equipamentos</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Mentalidade Vencedora</h3>
                <p className="text-gray-700 text-lg">Estratégias para manter a motivação em alta todos os dias</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-yellow-50 p-8 rounded-2xl">
            <p className="text-xl text-gray-800 font-semibold">
              Este não é mais um guia comum. É um{" "}
              <span className="text-green-600 font-bold">sistema testado e aprovado</span> por mais de{" "}
              <span className="text-2xl font-bold text-green-600">5.000 pessoas</span> que já transformaram suas vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Este Método é <span className="text-green-600">Perfeito Para Você</span> Se...
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Você está cansado(a) de começar e parar dietas toda semana",
              "Não tem tempo para academias caras ou personal trainers",
              "Quer resultados reais sem abrir mão da vida social",
              "Já tentou outros métodos mas sempre voltava aos velhos hábitos",
              "Busca uma transformação completa: corpo, mente e energia",
              "Quer um método simples que funciona na vida real",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              O Que Você Vai Conquistar nos <span className="text-green-600">Próximos 90 Dias</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Energia Explosiva",
                description: "Acorde todos os dias com disposição total, sem aquela sensação de cansaço constante",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Autoestima nas Alturas",
                description: "Olhe no espelho e se sinta orgulhoso(a) da sua transformação",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Foco e Produtividade",
                description: "Mente clara e concentrada para arrasar no trabalho e na vida pessoal",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Corpo Forte e Saudável",
                description: "Músculos definidos e resistência física que você não tinha há anos",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Sono Reparador",
                description: "Durma profundamente e acorde renovado(a) todos os dias",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Disciplina Inabalável",
                description: "Desenvolva a mentalidade de quem sempre conquista seus objetivos",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-6 border-2 border-gray-100 hover:border-green-300 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-700">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 px-4 bg-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <Gift className="w-20 h-20 text-yellow-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              BÔNUS EXCLUSIVOS <span className="text-red-600">(Valor Total: R$ 297,00)</span>
            </h2>
            <p className="text-xl text-gray-700">Além do método completo, você também recebe estes bônus incríveis:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-yellow-300 bg-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">30 Receitas Turbinadas</h3>
                <p className="text-gray-700 mb-6">
                  Receitas deliciosas e práticas que aceleram seus resultados. Pratos que você vai amar comer e que
                  trabalham a seu favor 24 horas por dia.
                </p>
                <span className="text-yellow-600 font-bold text-xl">Valor: R$ 97,00</span>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-yellow-300 bg-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Guia da Mentalidade Vencedora</h3>
                <p className="text-gray-700 mb-6">
                  Os segredos mentais dos grandes transformadores. Como manter a motivação em alta mesmo nos dias
                  difíceis.
                </p>
                <span className="text-yellow-600 font-bold text-xl">Valor: R$ 127,00</span>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-yellow-300 bg-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Grupo VIP no Telegram</h3>
                <p className="text-gray-700 mb-6">
                  Acesso exclusivo à nossa comunidade de transformação, com suporte diário e motivação constante.
                </p>
                <span className="text-yellow-600 font-bold text-xl">Valor: R$ 67,00</span>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-green-100 rounded-2xl">
            <p className="text-2xl font-bold text-green-800">
              TOTAL DE BÔNUS: <span className="text-3xl">R$ 297,00</span>
            </p>
            <p className="text-lg text-green-700 mt-2">Mas hoje você leva TUDO por apenas R$ 25,00!</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Veja o Que Nossos <span className="text-green-600">Alunos Estão Falando</span>
            </h2>
            <p className="text-xl text-gray-700">Mais de 5.000 pessoas já transformaram suas vidas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marina Silva",
                age: "32 anos, São Paulo",
                text: "Em 45 dias eu já estava irreconhecível! Perdi 8kg, ganhei energia e minha autoestima voltou. O melhor é que não passei fome nem uma vez. Método incrível!",
                avatar: "M",
              },
              {
                name: "Carlos Mendes",
                age: "41 anos, Rio de Janeiro",
                text: "Tentei de tudo por anos e nada funcionava. Com este método, em 90 dias transformei completamente meu corpo e minha mente. Hoje me sinto 10 anos mais jovem!",
                avatar: "C",
              },
              {
                name: "Ana Costa",
                age: "28 anos, Belo Horizonte",
                text: "Achei que seria mais uma promessa vazia, mas me surpreendi. Resultados desde a primeira semana! Hoje sou uma pessoa completamente diferente.",
                avatar: "A",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-xl">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.age}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-20 h-20 text-green-600 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Garantia <span className="text-green-600">Blindada</span> de 7 Dias
          </h2>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Estou tão confiante que este método vai transformar sua vida que ofereço uma{" "}
            <strong>garantia incondicional de 7 dias</strong>.
          </p>

          <Card className="p-12 border-2 border-green-200 bg-white max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-4">7 DIAS</div>
                <p className="text-2xl font-bold text-gray-900 mb-6">Garantia Total</p>
                <p className="text-lg text-gray-700 mb-6">
                  Se por qualquer motivo você não ficar 100% satisfeito, eu devolvo todo seu dinheiro.{" "}
                  <strong>Sem perguntas, sem burocracias.</strong>
                </p>
                <p className="text-xl font-semibold text-green-600">
                  Você não tem nada a perder e uma vida nova para ganhar.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Urgência */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">⚠️ ATENÇÃO: OFERTA POR TEMPO LIMITADO</h2>
          <p className="text-xl mb-8">
            Esta oferta especial de lançamento por <strong>R$ 25,00</strong> é válida apenas para as próximas{" "}
            <strong>48 horas</strong> ou até acabarem as <strong>500 vagas disponíveis</strong>.
          </p>

          <div className="bg-white/20 p-6 rounded-2xl mb-8">
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">HORAS</div>
              </div>
              <div>
                <div className="text-4xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">MINUTOS</div>
              </div>
              <div>
                <div className="text-4xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">SEGUNDOS</div>
              </div>
            </div>
          </div>

          <p className="text-xl font-semibold">
            Depois disso, o valor volta para <span className="text-yellow-400">R$ 197,00</span>.
          </p>
          <p className="text-lg mt-4">
            Não perca esta oportunidade única de transformar sua vida pelo menor preço da história.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Sua Nova Vida Começa <span className="text-yellow-400">AGORA!</span>
          </h2>

          <p className="text-2xl mb-12">Você tem duas escolhas:</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-red-100 border-2 border-red-300">
              <CardContent className="pt-6 text-center">
                <div className="text-6xl mb-4">❌</div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Escolha 1</h3>
                <p className="text-gray-800 text-lg">
                  Continuar como está, adiando sua transformação e se sentindo frustrado(a) todos os dias
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-green-100 border-2 border-green-300">
              <CardContent className="pt-6 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Escolha 2</h3>
                <p className="text-gray-800 text-lg">
                  Investir R$ 25,00 (menos que uma pizza) e começar sua transformação hoje mesmo
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Projeto Transformação 90 Dias</h3>
                <p className="opacity-90">Guia completo + Bônus exclusivos</p>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-75 line-through">De R$ 297,00</div>
                <div className="text-5xl font-bold text-yellow-400">R$ 25,00</div>
                <div className="text-sm opacity-75">Oferta por tempo limitado</div>
              </div>
            </div>
          </div>

          <p className="text-xl mb-8">
            A decisão é sua. Mas lembre-se: <strong>cada dia que passa é um dia a menos</strong> para você se tornar a
            melhor versão de si mesmo.
          </p>

          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-16 py-8 text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 mb-8"
          >
            QUERO TRANSFORMAR MINHA VIDA AGORA
            <ArrowRight className="ml-3 w-8 h-8" />
          </Button>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <span>✓ Acesso imediato após o pagamento</span>
            <span>✓ Garantia total de 7 dias</span>
            <span>✓ Suporte completo incluído</span>
            <span>✓ Bônus exclusivos grátis</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Projeto Transformação</h3>
              <p className="text-gray-400 text-sm">
                Transformando vidas através de hábitos saudáveis e sustentáveis há mais de 5 anos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Reembolso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>contato@transformacao90dias.com</p>
                <p>WhatsApp: (11) 99999-9999</p>
                <p>São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Projeto Transformação 90 Dias. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ: 12.345.678/0001-90</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
