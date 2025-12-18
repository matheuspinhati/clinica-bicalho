import { motion } from 'framer-motion';
import { 
  Calendar, 
  Stethoscope, 
  ArrowRight, 
  HeartHandshake,
  UserCheck,
  CreditCard
} from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Pattern */}
      <div className="hero-bg">
        <div className="hero-bg-pattern"></div>
        <div className="hero-bg-gradient"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Stethoscope size={18} />
            Centro Médico Multiespecialidades
          </motion.span>

          <h1 className="hero-title">
            Cuidado integral com você em{' '}
            <span className="highlight">mais de 20 especialidades</span> médicas
          </h1>

          <p className="hero-description">
            Agende sua consulta com especialistas qualificados em nossas duas unidades 
            em Uberlândia. Atendemos diversos convênios e particular.
          </p>

          <div className="hero-buttons">
            <motion.a
              href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar size={20} />
              Agendar consulta
            </motion.a>
            <motion.a
              href="#especialidades"
              className="btn btn-outline btn-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Nossas especialidades
              <ArrowRight size={20} />
            </motion.a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">50+</span>
              <span className="hero-stat-label">Profissionais</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">20+</span>
              <span className="hero-stat-label">Especialidades</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">2</span>
              <span className="hero-stat-label">Unidades</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="hero-card-stack">
            <motion.div
              className="hero-card hero-card-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-card-icon hero-card-icon-orange">
                <HeartHandshake size={22} strokeWidth={1.5} />
              </div>
              <div className="hero-card-text">
                <span className="hero-card-title">Atendimento Humanizado</span>
                <span className="hero-card-desc">Cuidado com respeito e empatia</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-card hero-card-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <div className="hero-card-icon hero-card-icon-navy">
                <UserCheck size={22} strokeWidth={1.5} />
              </div>
              <div className="hero-card-text">
                <span className="hero-card-title">Equipe Qualificada</span>
                <span className="hero-card-desc">Especialistas experientes</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-card hero-card-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <div className="hero-card-icon hero-card-icon-orange">
                <CreditCard size={22} strokeWidth={1.5} />
              </div>
              <div className="hero-card-text">
                <span className="hero-card-title">Diversos Convênios</span>
                <span className="hero-card-desc">E atendimento particular</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Role para explorar</span>
      </motion.div>
    </section>
  );
};

export default Hero;
