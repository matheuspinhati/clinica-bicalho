import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, ShieldCheck } from 'lucide-react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Quem somos</span>
            <h2 className="section-title">
              Bem-vindo à <span className="text-orange">Clínica Bicalho</span>
            </h2>
            
            <p className="about-text">
              Somos um centro médico multiespecialidades com mais de <strong>50 profissionais</strong> altamente 
              qualificados, prontos para cuidar da sua saúde e bem-estar. Nossa missão é facilitar o 
              acesso a cuidados de qualidade, oferecendo atendimento acolhedor, ágil e humanizado.
            </p>
            
            <p className="about-text">
              Trabalhamos em esquema de parceria com nossos profissionais, garantindo autonomia nas 
              agendas e total dedicação ao que realmente importa: <strong>você</strong>. Aqui, burocracias ficam 
              conosco, enquanto especialistas e pacientes se concentram no que é essencial.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <Heart size={24} />
                </div>
                <div className="about-feature-content">
                  <h4>Atendimento humanizado</h4>
                  <p>Cuidado com empatia e respeito em cada consulta</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <Users size={24} />
                </div>
                <div className="about-feature-content">
                  <h4>Equipe multidisciplinar</h4>
                  <p>Profissionais de diversas especialidades integrados</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <ShieldCheck size={24} />
                </div>
                <div className="about-feature-content">
                  <h4>Confiança e segurança</h4>
                  <p>Ambiente seguro e acolhedor para sua saúde</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-images-grid">
              <motion.div 
                className="about-image-large"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img src="/fachada.jpg" alt="Fachada - Clínica Bicalho" />
                <div className="about-image-overlay">
                  <span>Nossa clínica em Uberlândia</span>
                </div>
              </motion.div>
              
              <div className="about-image-row">
                <motion.div 
                  className="about-image-small"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <img src="/hall.jpg" alt="Sala de espera - Clínica Bicalho" />
                </motion.div>
                <motion.div 
                  className="about-image-small"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <img src="/hall2.jpg" alt="Recepção - Clínica Bicalho" />
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="about-stats-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="about-stats-item">
                <span className="about-stats-number">50+</span>
                <span className="about-stats-label">Profissionais</span>
              </div>
              <div className="about-stats-item">
                <span className="about-stats-number">20+</span>
                <span className="about-stats-label">Especialidades</span>
              </div>
              <div className="about-stats-item">
                <span className="about-stats-number">15+</span>
                <span className="about-stats-label">Anos de história</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

