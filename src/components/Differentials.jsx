import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building2, 
  UserCheck, 
  HandHeart, 
  CreditCard, 
  MapPin, 
  CalendarCheck 
} from 'lucide-react';
import './Differentials.css';

const differentials = [
  {
    icon: Building2,
    title: 'Atendimento multiespecialidades',
    description: 'Mais de 20 especialidades médicas em um único lugar, facilitando seu acesso a cuidados integrados e completos.',
    color: 'orange'
  },
  {
    icon: UserCheck,
    title: 'Profissionais qualificados',
    description: 'Equipe multidisciplinar com mais de 50 especialistas competentes e experientes, selecionados criteriosamente.',
    color: 'navy'
  },
  {
    icon: HandHeart,
    title: 'Ambiente acolhedor',
    description: 'Infraestrutura completa com consultórios equipados em ambiente harmonioso, limpo e confortável.',
    color: 'orange'
  },
  {
    icon: CreditCard,
    title: 'Diversos convênios',
    description: 'Atendemos os principais planos de saúde e também oferecemos opção de atendimento particular com valores acessíveis.',
    color: 'navy'
  },
  {
    icon: MapPin,
    title: 'Duas unidades',
    description: 'Localização estratégica em Uberlândia: Morada da Colina e Santa Mônica, facilitando seu acesso.',
    color: 'orange'
  },
  {
    icon: CalendarCheck,
    title: 'Agendamento simplificado',
    description: 'Marque sua consulta de forma rápida e prática via WhatsApp, telefone ou diretamente no site.',
    color: 'navy'
  }
];

const Differentials = () => {
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
    <section className="section differentials" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Nossos diferenciais</span>
          <h2 className="section-title">
            Por que escolher a <span className="text-orange">Clínica Bicalho</span>?
          </h2>
        </motion.div>

        <motion.div
          className="differentials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              className={`differential-card differential-${item.color}`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={`differential-icon icon-${item.color}`}>
                <item.icon size={28} />
              </div>
              <h3 className="differential-title">{item.title}</h3>
              <p className="differential-description">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;

