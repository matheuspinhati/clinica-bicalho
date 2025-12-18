import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, FileText, TestTube, AlertCircle } from 'lucide-react';
import './Support.css';

const supportUnits = [
  {
    name: 'Unidade Morada da Colina',
    whatsapp: '(34) 99693-4335',
    whatsappLink: 'https://wa.me/5534996934335'
  },
  {
    name: 'Unidade Santa Mônica',
    whatsapp: '(34) 99696-2498',
    whatsappLink: 'https://wa.me/5534996962498'
  }
];

const supportItems = [
  { icon: FileText, text: 'Dúvidas sobre receitas' },
  { icon: FileText, text: 'Laudos médicos' },
  { icon: TestTube, text: 'Pedidos de exames' }
];

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section section-alt support" ref={ref}>
      <div className="container">
        <motion.div
          className="support-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="support-header">
            <span className="section-label">Suporte ao paciente</span>
            <h2 className="section-title">
              Precisa de ajuda com <span className="text-orange">receitas, laudos ou exames</span>?
            </h2>
            <p className="support-subtitle">
              Nossa equipe está disponível via WhatsApp para auxiliar você
            </p>
          </div>

          <div className="support-services">
            {supportItems.map((item, index) => (
              <motion.div
                key={index}
                className="support-service"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <item.icon size={20} className="support-service-icon" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="support-units">
            {supportUnits.map((unit, index) => (
              <motion.a
                key={index}
                href={unit.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="support-unit-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="support-unit-icon">
                  <MessageCircle size={24} />
                </div>
                <div className="support-unit-info">
                  <span className="support-unit-name">{unit.name}</span>
                  <span className="support-unit-number">{unit.whatsapp}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="support-notes"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="support-note">
              <AlertCircle size={18} />
              <span>Procedimentos estéticos, cirúrgicos e dermatológicos: contato exclusivo Unidade Morada da Colina</span>
            </div>
            <div className="support-note">
              <AlertCircle size={18} />
              <span>Atendimento apenas via WhatsApp (não atendemos ligações nestes números)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;

