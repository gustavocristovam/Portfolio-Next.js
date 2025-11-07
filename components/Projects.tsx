'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'AfiliaTrack - Gestão de Afiliados',
      description: 'Plataforma completa para gerenciar programas de afiliados. Transforme seus afiliados em uma força de vendas com comissões automáticas, analytics em tempo real, sistema anti-fraude e recrutamento de novos parceiros. Solução SaaS escalável e moderna.',
      image: '/images/afiliatrack.png',
      tags: ['React.js', 'TypeScript', 'Express.js'],
      link: 'https://afiliatrack.com.br',
    },
    {
      title: 'Freelay - Track Time & Calculate Rate',
      description: 'Software para freelancers rastrearem tempo de projetos e calcularem sua taxa horária ideal. Interface simples e intuitiva que ajuda profissionais autônomos a gerenciarem melhor seus projetos e precificação.',
      image: '/images/freelay.png',
      tags: ['React.js', 'Rust', 'Tauri'],
      link: 'https://freelay.app',
    },
    {
      title: 'Whatsapp Rotation',
      description: 'Sistema de distribuição inteligente de leads via WhatsApp. Cadastramento de informações dos funcionários (Nome, Número, Cargo) com monitoramento de cliques e distribuição igualitária de clientes entre a equipe.',
      image: '/images/zapzop.png',
      tags: ['WordPress', 'PHP', 'JavaScript', 'API (Mercadopago)'],
      link: '#',
    },
    {
      title: 'Software de Consulta de CPF',
      description: 'Software em Python que se conecta à APIBrasil para consulta de dados de CPF. Aceita CPF único ou planilha Excel com múltiplos CPFs, retornando dados organizados em planilha. Inclui sistema de controle de saldo.',
      image: '/images/consulta.png',
      tags: ['Python', 'API', 'Excel'],
      link: 'https://github.com/gustavocristovam/SoftwareApiBrasil',
    },
    {
      title: 'BlackJack',
      description: 'Um BlackJack feito totalmente em Java, utilizando conceitos de POO (Programação Orientada a Objetos).',
      image: '/images/bj.jpg',
      tags: ['Java'],
      link: 'https://github.com/gustavocristovam/BlackJack',
    },
    {
      title: 'Galeria CarloMagnum',
      description: 'Uma galeria online de fotos de eventos e festas, permitindo aos visitantes visualizar e adquirir registros fotográficos. O site inclui opções de fotos gratuitas e pagas, oferecendo uma experiência visual única e acessível ao público.',
      image: '/images/galeria.png',
      tags: ['WordPress', 'WooCommerce', 'HTML', 'PHP', 'JavaScript', 'CSS'],
      link: 'https://galeria.carlomagnum.com.br',
    },
    {
      title: 'Landing Page Cosméticos',
      description: 'Desenvolvi uma landing page otimizada para conversão do produto Fios Fortes, com design estratégico, copy persuasivo e carregamento rápido. O formulário de captura de leads possui automação via n8n, salvando os contatos em uma planilha. A página é totalmente responsiva e otimizada para SEO.',
      image: '/images/landing.png',
      tags: ['WordPress', 'ElementorPro'],
      link: 'https://gustavocristovam.dev/landing-page/',
    },
    {
      title: 'ApexHealth Back-end',
      description: 'Implementação completa dos formulários de Login, Registro e Redefinição de Senha, integrados a uma API externa desenvolvida em PHP. Inclusão do Google reCAPTCHA em todas as etapas do processo para garantir maior segurança e proteção contra bots.',
      image: '/images/ApexHealth.png',
      tags: ['WordPress', 'API', 'PHP'],
      link: 'https://apexwealth.uk/log-in/',
    },
    {
      title: 'CarloMagnum',
      description: 'A CarloMagnum é uma plataforma de notícias voltada para eventos, com foco especial em festas. O site oferece informações atualizadas sobre festas e entretenimento, incluindo fotos e vídeos, para manter o público informado sobre os eventos mais recentes e relevantes.',
      image: '/images/carlomagnum.png',
      tags: ['WordPress', 'HTML', 'PHP', 'JavaScript', 'CSS'],
      link: 'https://carlomagnum.com.br',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-dark-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Principais <span className="text-primary-500">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="bg-primary-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink
                      className="text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      size={20}
                    />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
