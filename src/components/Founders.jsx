import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Founders.css';

const founders = [
  {
    name: 'Dra. Andreia Bicalho',
    role: 'Cofundadora e Diretora Médica',
    bio: 'Médica formada pela Universidade Federal de Uberlândia, com mais de 15 anos de experiência em saúde da mulher. Sua visão sempre foi criar um espaço onde pacientes se sintam acolhidos e bem cuidados.'
  },
  {
    name: 'Dr. Saul Moraes',
    role: 'Cofundador e Diretor Administrativo',
    bio: 'Formado pela Universidade Federal de Minas Gerais, Saul tem dedicado sua carreira à cardiologia preventiva e ao cuidado integral do paciente, unindo excelência médica e gestão humanizada.'
  }
];

const Founders = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section founders" ref={ref}>
      <div className="container">
        <div className="founders-wrapper">
          <motion.div
            className="founders-image-side"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img src="/founders.jpg" alt="Dra. Andreia Bicalho e Dr. Saul Moraes - Fundadores da Clínica Bicalho" loading="lazy" />
          </motion.div>

          <motion.div
            className="founders-content-side"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="founders-label">Nossa história</span>
            <h3 className="founders-title">
              Conheça nossos <span className="text-orange">fundadores</span>
            </h3>
            <p className="founders-intro">
              A Clínica Bicalho nasceu do sonho de dois profissionais apaixonados por cuidar de pessoas.
            </p>

            <div className="founders-list">
              {founders.map((founder, index) => (
                <div key={index} className="founder-item">
                  <h4 className="founder-name">{founder.name}</h4>
                  <span className="founder-role">{founder.role}</span>
                  <p className="founder-bio">{founder.bio}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
