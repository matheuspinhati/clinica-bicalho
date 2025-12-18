import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Phone, Stethoscope } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section cta" ref={ref}>
      <div className="cta-bg">
        <div className="cta-pattern"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="cta-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Stethoscope size={18} />
            <span>Agende sua consulta</span>
          </motion.div>

          <h2 className="cta-title">
            Sua saúde merece <span>atenção especializada</span>
          </h2>
          
          <p className="cta-description">
            Agende agora sua consulta na Clínica Bicalho e tenha acesso a cuidados 
            médicos de qualidade em um ambiente acolhedor.
          </p>

          <div className="cta-buttons">
            <motion.a
              href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={20} />
              Agendar agora
            </motion.a>
            
            <motion.a
              href="tel:3432279025"
              className="btn btn-outline-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={20} />
              Ligar agora
            </motion.a>
            
            <motion.a
              href="#especialidades"
              className="btn btn-outline-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Stethoscope size={20} />
              Conhecer especialidades
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

