import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import './Insurance.css';

const insuranceList = [
  'Amil',
  'Cassi',
  'BRF',
  'Cemig Saúde',
  'Fundação Libertas',
  'Fundação Real Grandeza',
  'FUNDAFFEMG',
  'Fusex',
  'Geap',
  'IPSM',
  'Plamedh',
  'Postal Saúde',
  'Pró-Saúde',
  'RN Saúde',
  'Saúde Caixa',
  'Sermed',
  'SulAmérica',
  'Unimed Nacional',
  'Unimed Uberlândia',
  'Usi Saúde',
  'Vale Saúde',
  'Vitallis'
];

const Insurance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="convenios" className="section section-alt insurance" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Convênios</span>
          <h2 className="section-title">
            <span className="text-orange">Convênios</span> aceitos
          </h2>
          <p className="section-subtitle">
            Trabalhamos com os principais planos de saúde. Consulte a disponibilidade para sua especialidade
          </p>
        </motion.div>

        <motion.div
          className="insurance-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {insuranceList.map((insurance, index) => (
            <motion.div
              key={index}
              className="insurance-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Shield size={18} className="insurance-icon" />
              <span>{insurance}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="insurance-note"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AlertCircle size={20} />
          <p>
            <strong>Observação:</strong> A cobertura pode variar de acordo com a especialidade e o profissional. 
            Consulte-nos para confirmar a disponibilidade do seu plano.
          </p>
        </motion.div>

        <motion.div
          className="insurance-particular"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="particular-content">
            <h3>Atendimento particular</h3>
            <p>Não possui convênio? Oferecemos atendimento particular com valores acessíveis.</p>
          </div>
          <a
            href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Consultar valores
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Insurance;

