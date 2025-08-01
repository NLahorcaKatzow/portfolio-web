// Configuración de EmailJS
// Para configurar EmailJS:
// 1. Ve a https://www.emailjs.com/ y crea una cuenta
// 2. Crea un servicio de email (Gmail, Outlook, etc.)
// 3. Crea una plantilla de email
// 4. Reemplaza los valores de abajo con tus credenciales

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_v8z45gd', // Reemplaza con tu Service ID
  TEMPLATE_ID: 'template_5ixd10v', // Reemplaza con tu Template ID
  PUBLIC_KEY: 'kUWm7f6rYQg3HNSbG' // Reemplaza con tu Public Key
};

// Ejemplo de plantilla de EmailJS:
/*
Plantilla HTML sugerida para EmailJS:

Hola {{to_name}},

Has recibido un nuevo mensaje de contacto desde tu portfolio:

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portfolio web.
*/ 