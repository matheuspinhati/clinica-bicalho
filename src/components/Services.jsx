import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ArrowUpRight, 
  Activity, 
  Scissors, 
  Sparkles, 
  Droplets,
  Heart,
  CircleDot,
  Baby
} from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Activity,
    title: 'Bioimpedância de Alta Precisão',
    description: 'Avaliação corporal detalhada com a melhor tecnologia do mercado: balança InBody para análise completa da composição corporal.',
    tag: 'Popular'
  },
  {
    icon: Scissors,
    title: 'Pequenas Cirurgias Ambulatoriais',
    description: 'Realizamos procedimentos cirúrgicos de menor porte com segurança e conforto em nossas instalações.',
    tag: null
  },
  {
    icon: Sparkles,
    title: 'Harmonização Facial e Íntima',
    description: 'Procedimentos estéticos com nossa equipe especializada em dermatologia para realçar sua beleza natural.',
    tag: 'Estética'
  },
  {
    icon: Droplets,
    title: 'Tratamentos Dermatológicos',
    description: 'Cuidados avançados para tratamento da qualidade da pele com protocolos modernos e eficazes.',
    tag: null
  },
  {
    icon: Heart,
    title: 'Procedimentos Capilares',
    description: 'Tratamentos especializados para saúde e estética dos cabelos com técnicas avançadas.',
    tag: null
  },
  {
    icon: CircleDot,
    title: 'Tratamento de Varizes',
    description: 'Injeções esclerosantes com angiologista especializado para tratamento eficaz de varizes.',
    tag: null
  },
  {
    icon: Baby,
    title: 'Saúde da Mulher',
    description: 'Inserção de DIU e exames como Papanicolau (citologia uterina) em ambiente seguro e acolhedor.',
    tag: 'Ginecologia'
  }
];

const Services = () => {
  const ref = useRef(null);
  const gridRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!gridRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - gridRef.current.offsetLeft);
    setScrollLeft(gridRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !gridRef.current) return;
    e.preventDefault();
    const x = e.pageX - gridRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    gridRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="servicos" className="section services" ref={ref}>
      <div className="services-bg">
        <div className="services-glow services-glow-1"></div>
        <div className="services-glow services-glow-2"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Serviços</span>
          <h2 className="section-title text-white">
            Além das consultas, oferecemos uma gama de <span className="text-orange">serviços completa</span> para o seu bem-estar.
          </h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          className={`services-grid ${isDragging ? 'dragging' : ''}`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={!isDragging ? { 
                y: -8, 
                transition: { duration: 0.3, ease: "easeOut" }
              } : {}}
            >
              {service.tag && (
                <span className="service-tag">{service.tag}</span>
              )}
              
              <div className="service-icon-wrapper">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <a
                href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
                target="_blank"
                rel="noopener noreferrer"
                className="service-cta"
              >
                <span>Agendar agora</span>
                <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
