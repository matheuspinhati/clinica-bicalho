import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'Quais convênios vocês aceitam?',
    answer: 'Trabalhamos com mais de 20 convênios diferentes. A cobertura varia de acordo com a especialidade e o profissional. Entre em contato para confirmar se seu plano atende na especialidade desejada.'
  },
  {
    question: 'Como faço para agendar uma consulta?',
    answer: 'É simples! Entre em contato via WhatsApp, telefone ou através do nosso site. Nossa equipe irá auxiliá-lo em todo o processo.'
  },
  {
    question: 'Vocês atendem particular?',
    answer: 'Sim! Além dos convênios, oferecemos atendimento particular com valores acessíveis.'
  },
  {
    question: 'Posso escolher o profissional?',
    answer: 'Sim! Se você já conhece o profissional que deseja consultar, basta informar no agendamento.'
  },
  {
    question: 'Qual a diferença entre as duas unidades?',
    answer: 'Ambas oferecem infraestrutura completa. Alguns profissionais atendem em unidades específicas - consulte a disponibilidade ao agendar.'
  },
  {
    question: 'Vocês atendem aos sábados?',
    answer: 'Alguns profissionais atendem aos sábados. Consulte a disponibilidade na especialidade desejada.'
  }
];

const FAQItem = ({ faq, index, isOpen, onClick }) => {
  return (
    <motion.div
      className={`faq-item ${isOpen ? 'faq-open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button className="faq-question" onClick={onClick}>
        <span>{faq.question}</span>
        <motion.div
          className="faq-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="contato" className="section faq" ref={ref}>
      <div className="container">
        <div className="faq-grid">
          <motion.div
            className="faq-header"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">FAQ</span>
            <h2 className="section-title">
              Dúvidas <span className="text-orange">frequentes</span>
            </h2>
            <p className="faq-description">
              Encontre respostas para as perguntas mais comuns. Se precisar de mais informações, 
              entre em contato conosco.
            </p>
            <div className="faq-contact">
              <HelpCircle size={24} className="faq-contact-icon" />
              <div>
                <span className="faq-contact-label">Ainda tem dúvidas?</span>
                <a
                  href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="faq-contact-link"
                >
                  Agende sua consulta
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="faq-list"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

