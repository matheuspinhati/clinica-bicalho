import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import './Specialties.css';

const specialtiesList = [
  { name: 'Angiologia', icon: '🫀' },
  { name: 'Cardiologia', icon: '❤️' },
  { name: 'Cirurgia Geral', icon: '🏥' },
  { name: 'Clínica Geral', icon: '👨‍⚕️' },
  { name: 'Coloproctologia', icon: '🩺' },
  { name: 'Dermatologia', icon: '✨' },
  { name: 'Endocrinologia', icon: '🧬' },
  { name: 'Gastroenterologia', icon: '🔬' },
  { name: 'Geriatria', icon: '👴' },
  { name: 'Ginecologia e Obstetrícia', icon: '👶' },
  { name: 'Homeopatia', icon: '🌿' },
  { name: 'Neurologia', icon: '🧠' },
  { name: 'Nutrição', icon: '🥗' },
  { name: 'Nutrologia', icon: '💊' },
  { name: 'Ortopedia', icon: '🦴' },
  { name: 'Otorrinolaringologia', icon: '👂' },
  { name: 'Pediatria', icon: '🧒' },
  { name: 'Psicologia', icon: '🧘' },
  { name: 'Psiquiatria', icon: '🧠' },
  { name: 'Reumatologia', icon: '🦵' },
  { name: 'Urologia', icon: '🩻' },
];

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecialties = specialtiesList.filter(spec =>
    spec.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="especialidades" className="section section-alt specialties" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Especialidades</span>
          <h2 className="section-title">
            Nossas <span className="text-orange">especialidades médicas</span>
          </h2>
          <p className="section-subtitle">
            Contamos com especialistas nas principais áreas da medicina para cuidar de você e sua família
          </p>
        </motion.div>

        <motion.div
          className="specialties-search"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar especialidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </motion.div>

        <motion.div
          className="specialties-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredSpecialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="specialty-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="specialty-icon">{specialty.icon}</span>
              <span className="specialty-name">{specialty.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {filteredSpecialties.length === 0 && (
          <div className="no-results">
            <p>Nenhuma especialidade encontrada para "{searchTerm}"</p>
          </div>
        )}

        <motion.div
          className="specialties-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Agendar consulta
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialties;

