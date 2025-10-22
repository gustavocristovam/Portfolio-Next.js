'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const Reviews = () => {
  const reviews = [
    {
      name: 'Bruno C H.',
      text: 'Gustavo é super excelente. Eu recomendo, de fácil comunicação e sempre disponível! Foi excelente seu atendimento e seu trabalho impecável. Agradeço por tê-lo encontrado, além de resolver a minha demanda foi extremamente profissional e atencioso.',
      rating: 5,
    },
    {
      name: 'Fernanda A.',
      text: 'Gustavo é um profissional dedicado, com boas habilidades de desenvolvimento, focado em ajudar e manter uma boa comunicação. Indicamos e esperamos voltar a trabalhar com ele no futuro.',
      rating: 5,
    },
    {
      name: 'Bruno De S.',
      text: 'Gustavo é um excelente profissional, Desde o início, demonstrou um impressionante nível de expertise técnica, atenção aos detalhes e uma abordagem proativa para a resolução de problemas. Gustavo não apenas mostrou habilidades excepcionais em API, PHP, WordPress, mas também foi incrivelmente responsivo e comunicativo ao longo de todo o projeto.',
      rating: 5,
    },
    {
      name: 'Advant D.',
      text: 'Tive uma experiência fantástica trabalhando com um programador de HTML incrível! Ele não só entregou um site lindo e funcional dentro do prazo, como também mostrou grande atenção aos detalhes e uma comunicação impecável. Sua criatividade e profissionalismo superaram todas as minhas expectativas. Recomendo de olhos fechados!',
      rating: 5,
    },
    {
      name: 'Felipe C.',
      text: 'Excelente profissional, com certeza voltaremos a trabalhar novamente',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 px-6 bg-dark-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-500">Avaliações</span> dos Clientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            O que meus clientes dizem sobre meu trabalho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-dark-700">
                  <Image
                    src="/images/perso.jpg"
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {review.name}
                  </h3>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
