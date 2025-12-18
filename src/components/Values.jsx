import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Handshake, Heart, ShieldCheck, Users } from 'lucide-react';
import './Values.css';

const values = [
  {
    icon: Handshake,
    title: 'Respeito',
    description: 'Tratamos cada pessoa com dignidade, consideração e empatia, valorizando sua individualidade e necessidades.'
  },
  {
    icon: Heart,
    title: 'Gentileza',
    description: 'Acreditamos que um atendimento gentil faz toda diferença na experiência de cuidado com a saúde.'
  },
  {
    icon: ShieldCheck,
    title: 'Paz e harmonia',
    description: 'Mantemos um ambiente tranquilo e acolhedor, propício para o bem-estar de todos.'
  },
  {
    icon: Users,
    title: 'Bom relacionamento',
    description: 'Cultivamos relações saudáveis e transparentes com pacientes, profissionais e colaboradores.'
  }
];

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section section-alt values" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Nossos valores</span>
          <h2 className="section-title">
            Nossos <span className="text-orange">princípios</span> e compromissos
          </h2>
          <p className="section-subtitle">
            Na Clínica Bicalho, nossos valores fundamentam cada atendimento e cada interação
          </p>
        </motion.div>

        <motion.div
          className="values-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                className="value-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="value-icon-wrapper">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="values-note"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            <em>
              Nossos funcionários são treinados para manter a harmonia e o respeito em todos os momentos. 
              Desvios de conduta ou eventuais problemas devem ser comunicados educadamente à gerência 
              para as devidas providências. Valorizamos seu feedback!
            </em>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
