import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../blocks/Components/Button/Button';
import { EMAILJS_CONFIG } from '../config/emailjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configuración de EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Nicolas Lahorca'
      };

      // Enviar email usando EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email enviado exitosamente:', formData);
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      alert('¡Mensaje enviado exitosamente! Te responderé pronto.');
    } catch (error) {
      console.error('Error al enviar email:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-theme-text mb-3">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-theme-surface/60 backdrop-blur-md border border-theme-border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent transition-all duration-200"
            placeholder="Tu nombre completo"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-theme-text mb-3">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-theme-surface/60 backdrop-blur-md border border-theme-border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent transition-all duration-200"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-theme-text mb-3">
          Asunto *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-theme-surface/60 backdrop-blur-md border border-theme-border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent transition-all duration-200"
          placeholder="¿En qué puedo ayudarte?"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-theme-text mb-3">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-theme-surface/60 backdrop-blur-md border border-theme-border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Cuéntame sobre tu proyecto o consulta..."
        />
      </div>
      
      <div className="flex justify-end pt-4">
        <Button.Primary 
          type="submit" 
          disabled={isSubmitting}
          className="min-w-[140px] px-8"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button.Primary>
      </div>
    </form>
  );
};

export default ContactForm; 