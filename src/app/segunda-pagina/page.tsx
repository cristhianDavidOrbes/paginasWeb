
"use client"

import React, { useState } from 'react';
import { Crown, Flame, DollarSign, ArrowRight, Instagram } from 'lucide-react';
import Link from "next/link"


export default function Segunda_pagina() {
    // Añadir estado para el campo de email
    const [email, setEmail] = useState('');
    
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-500 opacity-80"
          style={{
            backgroundImage: "url('/images/background.png')", // Asegúrate de que esta ruta exista
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        />
        
        <div className="container mx-auto px-4 pt-10 relative z-10">
          <div className="flex items-center mb-20">
            <h1 className="text-2xl font-bold">
              <span className="text-white">Insta</span>
              <span className="text-white">Domination</span>
            </h1>
            <Crown className="w-6 h-6 text-pink-500 ml-2" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[70vh]">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Esta pagina esta realiza con <span className="text-orange-500">lovable</span> si 
                quieres ir a la primera pagina preciona en el boton a lado del buscador(email)
              </h2>
              <p className="text-lg text-gray-200 max-w-lg">
                Aprenda as estratégias comprovadas para criar um peres.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <div className="relative flex-grow">
                  <input 
                    type="email" 
                    placeholder="Digite seu melhor e-mail aquí"
                    className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Link href="/" className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-3 px-8 rounded-md">
                  Ir a la página de inicio
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling text banner */}
        <div className="absolute bottom-0 w-full overflow-hidden py-3 bg-gradient-to-r from-purple-900/70 via-purple-700/70 to-orange-500/70 backdrop-blur-sm">
          <div className="whitespace-nowrap inline-block animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-4 text-sm">• GRATUITO •</span>
            ))}
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-4 text-sm">• INSCREVA-SE •</span>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-orange-500/20 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Veja o que você aprenderá:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <LessonCard 
              number="1"
              title="Como criar um Perfil de Sucesso no Instagram em 2024"
              description="Aprenda as melhores práticas para criar um perfil atraente no Instagram, incluindo a escolha do tipo de perfil, bio atraente e estratégias de naming."
              icon={<Crown className="h-5 w-5" />}
              gradient="from-orange-500 to-pink-500"
            />
            
            <LessonCard 
              number="2"
              title="Conteúdo que Conecta e Engaja no Instagram"
              description="Conheça o conteúdo relevante no Instagram, desde fotos e vídeos de alta qualidade até legendas persuasivas e hashtags estratégicas."
              icon={<Flame className="h-5 w-5" />}
              gradient="from-purple-600 to-pink-500"
            />
            
            <LessonCard 
              number="3"
              title="Transformando seguidores em Clientes Pagantes"
              description="Descubra táticas eficazes para aumentar sua audiência, gerar conexão e converter seguidores em clientes pagantes."
              icon={<DollarSign className="h-5 w-5" />}
              gradient="from-blue-500 to-purple-600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Garanta sua vaga agora, domine o <br />
            instagram e impulsione suas vendas!
          </h2>
          
          <button className="mt-6 bg-black hover:bg-gray-900 transition-colors text-white font-bold py-4 px-8 rounded-md flex items-center justify-center mx-auto">
            QUERO DOMINAR O INSTAGRAM AGORA!
          </button>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-20 relative bg-black">
        <div className="absolute inset-0 bg-purple-900/30 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-orange-500 rounded-3xl">
                <div className="bg-black p-4 rounded-2xl">
                  <div className="relative">
                    <img 
                      src="/images/profile.png" // Asegúrate de que esta ruta exista
                      alt="Instagram profile" 
                      className="w-full rounded-xl"
                    />
                    <div className="absolute -bottom-4 -left-4">
                      <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-full p-2">
                        <Instagram className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-2">
                        <Flame className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-2">
                        <Crown className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 border-t border-gray-800 pt-4 text-sm text-gray-300">
                    <div className="flex space-x-4">
                      <div className="flex items-center"><Instagram className="h-4 w-4 mr-1" /> 5.2k</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quem te ensinará
              </h2>

              <div className="space-y-6 text-gray-300">
                <p className="leading-relaxed">
                  <span className="font-bold">Isabella Torres</span> é especialista no Instagram que trabalha com grandes marcas e possui mais de 5 anos de experiência com redes sociais. Ela desenvolveu um método comprovado para gerar engajamento significativo em qualquer tipo de perfil. Sua paixão pelo Instagram a levou a testar mais de 200 algoritmos e descobrir as melhores práticas para obter resultados excepcionais.
                </p>
                
                <p className="leading-relaxed">
                  Com conhecimentos, atitude, uma estratégia prática e otimizada, personalidade que incendeia os seguidores, um crescimento significativo e o engajamento no máximo da segmentação e sua marca.
                </p>

                <p className="leading-relaxed">
                  No #InstaDomination, ela compartilha essas técnicas comprovadas para impulsionar as vendas, construir uma base sólida de seguidores e interagir as vendas. Ao participar você estará adquirindo conhecimentos valiosos de alguém que já provou na teoria do investimento e sucesso no Instagram.
                </p>
              </div>

              <button className="mt-8 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition-colors text-white font-bold py-4 px-8 rounded-md flex items-center justify-center">
                QUERO DOMINAR O INSTAGRAM AGORA! <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p>© 2025 InstaDomination. Todos os direitos reservados.</p>
            <p>Política de Privacidade · Termos de Uso</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Definición correcta del componente LessonCard
interface LessonCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ number, title, description, icon, gradient }) => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}></div>
      
      <div className="flex items-center mb-4">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r ${gradient}`}>
          {icon}
        </div>
        <span className="ml-4 text-sm text-gray-400">AULA {number}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-4 mt-4">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};