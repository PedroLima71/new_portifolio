import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { db } from '../firebase.config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Video } from '../types';
import VideoCarousel from '../components/VideoCarousel';
import CommentsSection from '../components/CommentsSection';
import ContactSection from '../components/ContactSection';
import VideoModal from '../components/VideoModal';
import WhatsAppButton from '../components/WhatsAppButton';
import { mockVideos } from '../mockData';
import PedroImg from '../images/Pedro.jpeg';
import brunoImg from '../images/bruno.jpeg';
import italaImg from '../images/italaSurf.jpeg';
import janainaImg from '../images/janaina.jpeg';
import karinaImg from '../images/karina.jpeg';
import leoImg from '../images/leo.jpeg';
import jenniferImg from '../images/jannifer.jpeg';

const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [creatorsIndex, setCreatorsIndex] = useState(0);

  const creators = [
    { name: 'Bruno', img: brunoImg, bio: 'Criador de Conteúdo', insta: 'https://www.instagram.com/bruno' },
    { name: 'Itala Surf', img: italaImg, bio: 'Criadora de Conteúdo', insta: 'https://www.instagram.com/italasurf' },
    { name: 'Janaina', img: janainaImg, bio: 'Criadora de Conteúdo', insta: 'https://www.instagram.com/janaina' },
    { name: 'Karina', img: karinaImg, bio: 'Criadora de Conteúdo', insta: 'https://www.instagram.com/karina' },
    { name: 'Leo', img: leoImg, bio: 'Criador de Conteúdo', insta: 'https://www.instagram.com/leo' },
    { name: 'Jennifer', img: jenniferImg, bio: 'Criadora de Conteúdo', insta: 'https://www.instagram.com/jennifer' },
  ];

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const q = query(collection(db, 'portfolio'));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        const portfolioId = querySnapshot.docs[0].id;
        const videosQuery = query(
          collection(db, `portfolio/${portfolioId}/videos`),
          where('ativo', '==', true)
        );
        const videosSnapshot = await getDocs(videosQuery);
        const videosData = videosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Video[];
        setVideos(videosData);
      } else {
        // Se não houver dados no Firebase, usar dados mockados
        setVideos(mockVideos);
      }
    } catch (error) {
      console.error('Erro ao carregar vídeos, usando dados de teste:', error);
      // Se houver erro ao conectar ao Firebase, usar dados mockados
      setVideos(mockVideos);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const nextCreator = () => {
    setCreatorsIndex((prev) => (prev + 1) % creators.length);
  };

  const prevCreator = () => {
    setCreatorsIndex((prev) => (prev - 1 + creators.length) % creators.length);
  };

  return (
    <main>
      <VideoModal
        video={selectedVideo}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="animate-fadeInUp">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Pedro Henrique
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Edição de vídeos<span className="text-yellow-300 font-semibold"></span> <span className="text-yellow-400 font-semibold">que converte
                  e vendem.</span>
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Já editei para algum dos maiores players do mercado.
                Você encontrou seu editor de video. Disciplina métodos e foco em resultados.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/40 backdrop-blur border border-yellow-400/20 rounded-lg p-4 text-center hover:border-yellow-400/50 hover:bg-slate-800/60 transition-all">
                  <p className="text-3xl font-bold text-yellow-300">+600 </p>
                  <p className="text-gray-400">clientes satisfeitos</p>
                </div>
                <div className="bg-slate-800/40 backdrop-blur border border-yellow-400/20 rounded-lg p-4 text-center hover:border-yellow-400/50 hover:bg-slate-800/60 transition-all">
                  <p className="text-3xl font-bold text-yellow-400">100%</p>
                  <p className="text-gray-400">Qualidade</p>
                </div>
                <div className="bg-slate-800/40 backdrop-blur border border-yellow-400/20 rounded-lg p-4 text-center hover:border-yellow-400/50 hover:bg-slate-800/60 transition-all">
                  <p className="text-3xl font-bold text-amber-400">∞</p>
                  <p className="text-gray-400">Criatividade</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap w-full">
                <div className="w-full sm:max-w-[520px]">
                  <WhatsAppButton
                    variant="primary"
                    size="medium"
                    text="Falar com Pedro"
                    className="w-full mr-2"
                  />
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-slideIn max-w-2xl mx-auto lg:mx-0">
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all group aspect-video">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src="/videos/Motion PH.mp4"
                >
                  Seu navegador não suporta vídeo HTML5
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-lg blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10">
          {loading ? (
            <div className="py-16 text-center">
              <p className="text-gray-400">Carregando vídeos...</p>
            </div>
          ) : (
            <VideoCarousel videos={videos} onVideoSelect={handleVideoSelect} />
          )}
        </div>
      </section>

      {/* Creators Section */}
      <section id="creators" className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative golden elements */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/15 to-transparent rounded-full blur-3xl" />

        {/* Golden accent lines */}
        <div className="absolute top-40 right-0 w-1 h-40 bg-gradient-to-b from-yellow-400 to-transparent opacity-30" />
        <div className="absolute bottom-40 left-0 w-1 h-40 bg-gradient-to-t from-amber-400 to-transparent opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-40 h-1 bg-gradient-to-r from-yellow-400 to-transparent opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest text-yellow-600 uppercase">Nossos Clientes</span>
            </div>
            <h2 className="text-2xl lg:text-5xl font-black mb-8 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 bg-clip-text text-transparent tracking-tight">
              Grandes criadores confiam no nosso trabalho.
              O próximo pode ser você.
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 mx-auto mb-8 rounded-full" />
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              A confiança de grandes nomes valida o nosso trabalho.
              Pronto para ser o próximo?
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${creatorsIndex * 100}%)`
                }}
              >
                {creators.map((creator, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="group">
                      <div className="relative mb-8 w-full h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-yellow-400 transition-all duration-500 shadow-xl hover:shadow-3xl hover:shadow-yellow-400/40">
                        <img
                          src={creator.img}
                          alt={creator.name}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                          {creator.name}
                        </h3>
                        <p className="text-lg text-gray-500 mb-6">{creator.bio}</p>
                        <a
                          href={creator.insta}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-bold px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg text-lg"
                        >
                          <span>Instagram</span>
                          <ArrowRight size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevCreator}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-bold p-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-110"
            >
              <ArrowRight size={24} className="rotate-180" />
            </button>
            <button
              onClick={nextCreator}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-bold p-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-110"
            >
              <ArrowRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-12">
              {creators.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCreatorsIndex(index)}
                  className={`transition-all duration-300 rounded-full ${index === creatorsIndex
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 w-8 h-3'
                      : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-20">
            <p className="text-lg text-gray-600 font-light">
              Quer se juntar a esses criadores?
              <span className="block mt-2 text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Vamos crescer juntos!
              </span>
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent text-center">
            Sobre Pedro
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Foto */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl opacity-20 blur-2xl" />
                <div className="relative w-full h-full bg-slate-800/60 backdrop-blur border-4 border-yellow-400/30 rounded-2xl flex items-center justify-center overflow-hidden group hover:border-yellow-400/70 transition-all">
                  <img
                    src={PedroImg}
                    alt="Pedro Lima"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-6">
                    <p className="text-yellow-300 font-bold text-xl">Pedro Lima</p>
                    <p className="text-gray-300 text-sm mt-1">Criador & Editor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto sobre */}
            <div className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                Comecei minha jornada profissional aos <span className="text-yellow-300 font-semibold">15 anos</span>, trabalhando em uma hamburgueria. Após um ano e meio, tornei-me <span className="text-yellow-400 font-semibold">sócio do negócio</span> e, com estratégias bem definidas, ajudei a empresa a crescer de um faturamento anual de <span className="text-yellow-300 font-semibold">R$100 mil para mais de R$700 mil</span>.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                Atualmente, aplico <span className="text-yellow-300 font-semibold">mentalidade de crescimento</span> e <span className="text-yellow-400 font-semibold">estratégia</span> nos meus projetos. Trabalho com edição de vídeos, criando conteúdos dinâmicos e envolventes, sempre guiados por <span className="text-amber-400 font-semibold">storytelling</span> e adaptados aos objetivos de cada cliente.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                Meu foco é <span className="text-yellow-300 font-semibold">potencializar a presença digital</span> dos meus parceiros, contribuindo para <span className="text-yellow-300 font-semibold">aumento de autoridade, engajamento e faturamento</span>.
              </p>

              <div className="pt-4 border-t border-yellow-400/30">
                <p className="text-lg text-yellow-200 font-semibold italic">
                  "Se você procura alguém que entende de crescimento, estratégia e resultados, estou aqui para ajudar."
                </p>
              </div>

              <div className="pt-8">
                <WhatsAppButton
                  variant="secondary"
                  size="large"
                  text="🚀 Vamos Crescer Juntos - Fale Comigo!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Comments Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4">


          {/* Comments Section */}
          <div className="mt-16 border-t border-yellow-400/30 pt-16">
            <CommentsSection />
          </div>

          {/* CTA Section Before Contact */}
          <div className="mt-20 relative rounded-3xl p-8 md:p-14 text-center 
  bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-yellow-300/20
  border border-yellow-400/40
  shadow-[0_0_60px_-15px_rgba(250,204,21,0.45)]">

            {/* brilho decorativo */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
    from-yellow-400/10 via-transparent to-amber-500/10 pointer-events-none" />

            <h3 className="relative text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Pronto para transformar seu conteúdo?
            </h3>

            <p className="relative text-lg text-gray-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Não perca mais tempo. Vamos criar vídeos que vendem, engajam e geram resultados
              reais para o seu negócio.
            </p>

            <div className="relative flex justify-center">
              <WhatsAppButton
                variant="primary"
                size="large"
                text="✨ Quero Começar Meu Projeto Agora!"
                className="px-10 py-4 text-lg font-semibold
        bg-gradient-to-r from-yellow-400 to-amber-500
        hover:from-yellow-300 hover:to-amber-400
        shadow-lg shadow-yellow-500/30
        transition-all duration-300"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
};

export default Home;
