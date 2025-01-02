import React from 'react';
import '../../assets/css/aboutService.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShieldAlt, faClock, faTags } from '@fortawesome/free-solid-svg-icons';

function AboutService() {
  const services = [
    {
      icon: faTruck,
      title: "Fast Delivery",
      description: "Get your orders delivered to your doorstep quickly and reliably.",
    },
    {
      icon: faShieldAlt,
      title: "Secure Shopping",
      description: "Shop with confidence, knowing your information is safe with us.",
    },
    {
      icon: faClock,
      title: "24/7 Support",
      description: "Our team is here to assist you around the clock, anytime you need.",
    },
    {
      icon: faTags,
      title: "Best Deals",
      description: "Enjoy unbeatable prices and exclusive discounts on all products.",
    },
  ];

  return (
    <div className="about-service">
      <h2>About Our Service</h2>
      <div className="service-blocks">
        {services.map((service, index) => (
          <div key={index} className="service-block">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutService;