import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Heart
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const specialties = [
    'Cardiologia', 'Dermatologia', 'Endocrinologia', 
    'Ginecologia', 'Neurologia', 'Ortopedia', 
    'Pediatria', 'Psiquiatria'
  ];

  const quickLinks = [
    { href: '#sobre', label: 'Sobre nós' },
    { href: '#especialidades', label: 'Especialidades' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#convenios', label: 'Convênios' },
    { href: '#unidades', label: 'Unidades' },
    { href: '#contato', label: 'Contato' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-col footer-about">
            <img src="/logo-white.png" alt="Clínica Bicalho" className="footer-logo" />
            <p className="footer-description">
              Centro médico multiespecialidades com mais de 50 profissionais qualificados, 
              dedicados a oferecer atendimento de excelência em Uberlândia.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/grupoclinicabicalho/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Links úteis</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="footer-col">
            <h4 className="footer-title">Especialidades</h4>
            <ul className="footer-links">
              {specialties.map((specialty, index) => (
                <li key={index}>
                  <a href="#especialidades">{specialty}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-title">Contato</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <div>
                  <span className="contact-label">Central de Atendimento</span>
                  <a href="tel:3432279025">(34) 3227-9025</a>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <div>
                  <span className="contact-label">Morada da Colina</span>
                  <span>R. Prof. Chafi Ayub Jacob, 114</span>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <div>
                  <span className="contact-label">Santa Mônica</span>
                  <span>R. Francisco Vicente Ferreira, 580</span>
                </div>
              </div>
              <div className="contact-item">
                <Clock size={18} className="contact-icon" />
                <div>
                  <span className="contact-label">Horário</span>
                  <span>Seg a Sex: 08h às 18h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>
              © {currentYear} Clínica Bicalho - Todos os direitos reservados
            </p>
            <p className="footer-company-info uppercase">
              Bicalho Assessoria Médica Ltda Me - CNPJ 21.067.383/0001-95
            </p>
          </div>
          <p className="footer-made">
            Feito com <Heart size={14} className="heart-icon" /> em Uberlândia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

