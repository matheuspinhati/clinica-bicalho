import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Stethoscope, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Entre em contato',
    description: 'Ligue, mande WhatsApp ou agende direto pelo site. Nossa equipe está pronta para ajudar!'
  },
  {
    number: '02',
    icon: Stethoscope,
    title: 'Escolha a especialidade',
    description: 'Informe sua necessidade e o convênio. Apresentaremos os profissionais disponíveis.'
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Selecione o horário',
    description: 'Escolha entre as opções de data e horário que melhor se adequam à sua rotina.'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Confirme seu agendamento',
    description: 'Pronto! Sua consulta está marcada. Receba todas as orientações para o dia.'
  }
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section how-it-works" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Como funciona</span>
          <h2 className="section-title">
            Veja como é simples <span className="text-orange">agendar sua consulta</span>
          </h2>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon-wrapper">
                  <step.icon size={24} className="step-icon" />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="how-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Agendar agora
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

