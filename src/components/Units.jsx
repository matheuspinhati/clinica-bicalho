import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation } from 'lucide-react';
import './Units.css';

const units = [
  {
    name: 'Unidade Morada da Colina',
    address: 'Rua Professor Chafi Ayub Jacob, 114',
    neighborhood: 'Morada da Colina - Uberlândia/MG',
    phone: '(34) 3227-9025',
    whatsapp: '(34) 99638-9025',
    hours: 'Segunda a Sexta: 08h às 18h',
    mapUrl: 'https://maps.google.com/?q=Rua+Professor+Chafi+Ayub+Jacob+114+Morada+da+Colina+Uberlandia',
    featured: true
  },
  {
    name: 'Unidade Santa Mônica',
    address: 'Rua Francisco Vicente Ferreira, 580',
    neighborhood: 'Santa Mônica - Uberlândia/MG',
    phone: '(34) 3227-9025',
    whatsapp: '(34) 99638-9025',
    hours: 'Segunda a Sexta: 08h às 18h',
    mapUrl: 'https://maps.google.com/?q=Rua+Francisco+Vicente+Ferreira+580+Santa+Monica+Uberlandia',
    featured: false
  }
];

const Units = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="unidades" className="section units" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Localização</span>
          <h2 className="section-title">
            Visite nossas <span className="text-orange">unidades</span> em Uberlândia
          </h2>
        </motion.div>

        <div className="units-grid">
          {units.map((unit, index) => (
            <motion.div
              key={index}
              className={`unit-card ${unit.featured ? 'unit-featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {unit.featured && (
                <span className="unit-badge">Principal</span>
              )}
              
              <h3 className="unit-name">{unit.name}</h3>
              
              <div className="unit-info">
                <div className="unit-info-item">
                  <MapPin size={20} className="unit-icon" />
                  <div>
                    <p className="unit-address">{unit.address}</p>
                    <p className="unit-neighborhood">{unit.neighborhood}</p>
                  </div>
                </div>

                <div className="unit-info-item">
                  <Phone size={20} className="unit-icon" />
                  <div>
                    <p className="unit-label">Telefone</p>
                    <a href={`tel:${unit.phone.replace(/\D/g, '')}`} className="unit-value">
                      {unit.phone}
                    </a>
                  </div>
                </div>

                <div className="unit-info-item">
                  <MessageCircle size={20} className="unit-icon" />
                  <div>
                    <p className="unit-label">WhatsApp</p>
                    <a 
                      href={`https://wa.me/55${unit.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="unit-value"
                    >
                      {unit.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="unit-info-item">
                  <Clock size={20} className="unit-icon" />
                  <div>
                    <p className="unit-label">Horário de funcionamento</p>
                    <p className="unit-value">{unit.hours}</p>
                  </div>
                </div>
              </div>

              <div className="unit-actions">
                <a
                  href="https://app.clinicando.med.br/agendamento?t=c&i=OFc4NjRMd1ZVOERDcHN6OG12Sklydz09&utm_source=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageCircle size={18} />
                  Agendar
                </a>
                <a
                  href={unit.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Navigation size={18} />
                  Como chegar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Units;

