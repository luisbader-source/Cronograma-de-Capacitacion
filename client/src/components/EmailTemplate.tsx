/**
 * Template completo de Email optimizado para Móviles
 * Combina header y footer con diseño responsive
 */

import EmailHeader from './EmailHeader';
import EmailFooter from './EmailFooter';

interface EmailTemplateProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showDate?: boolean;
  showCintiaLogo?: boolean;
  customFooterMessage?: string;
}

export default function EmailTemplate({
  children,
  title = "Cronograma de Capacitacion",
  subtitle = "Universidad de Cordoba - Semana del 23 al 27 de febrero de 2026",
  showDate = true,
  showCintiaLogo = true,
  customFooterMessage
}: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Contenedor principal del email */}
      <table 
        width="100%" 
        border={0} 
        cellSpacing={0} 
        cellPadding={0}
        style={{
          backgroundColor: '#ffffff',
          maxWidth: '100%',
          margin: '0',
          padding: '0'
        }}
      >
        <tr>
          <td>
            {/* Header */}
            <EmailHeader 
              title={title}
              subtitle={subtitle}
              showDate={showDate}
            />
            
            {/* Contenido principal */}
            <table 
              width="100%" 
              border={0} 
              cellSpacing={0} 
              cellPadding={0}
              style={{
                backgroundColor: '#ffffff',
                fontFamily: 'Arial, sans-serif'
              }}
            >
              <tr>
                <td align="center" style={{ padding: '20px 15px' }}>
                  <table 
                    width="100%" 
                    border={0} 
                    cellSpacing={0} 
                    cellPadding={0}
                    style={{ maxWidth: '600px' }}
                  >
                    <tr>
                      <td style={{ 
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: '#374151',
                        fontFamily: 'Arial, sans-serif'
                      }}>
                        {children}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            {/* Footer */}
            <EmailFooter 
              showCintiaLogo={showCintiaLogo}
              customMessage={customFooterMessage}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

// Versión HTML pura para copiar y pegar en servicios de email
export const EmailTemplateHTML = (content: string, options: {
  title?: string;
  subtitle?: string;
  showDate?: boolean;
  showCintiaLogo?: boolean;
  customFooterMessage?: string;
} = {}) => {
  const {
    title = "Cronograma de Capacitacion",
    subtitle = "Universidad de Cordoba - Semana del 23 al 27 de febrero de 2026",
    showDate = true,
    showCintiaLogo = true,
    customFooterMessage
  } = options;

  const currentDate = new Date().toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #ffffff;">
    
    <!-- Header -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-bottom: 1px solid #e5e7eb; font-family: Arial, sans-serif;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">
                    <tr>
                        <td align="center" style="padding-bottom: 15px;">
                            <img src="https://tu-dominio.com/logo-unicordoba.png" alt="Universidad de Cordoba" width="180" height="80" style="display: block; max-width: 150px; width: 100%; height: auto;">
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-bottom: 10px;">
                            <h1 style="color: #1f2937; font-size: 20px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; line-height: 1.2;">${title}</h1>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-bottom: 8px;">
                            <p style="color: #6b7280; font-size: 14px; margin: 0; font-family: Arial, sans-serif;">${subtitle}</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <p style="color: #9ca3af; font-size: 12px; margin: 0; font-style: italic; font-family: Arial, sans-serif;">Un legado de transformación social</p>
                        </td>
                    </tr>
                    ${showDate ? `
                    <tr>
                        <td align="center" style="padding-top: 15px;">
                            <div style="background-color: #1B7D3D; color: #ffffff; padding: 8px 16px; border-radius: 4px; display: inline-block; font-size: 12px; font-family: Arial, sans-serif;">
                                ${currentDate}
                            </div>
                        </td>
                    </tr>
                    ` : ''}
                </table>
            </td>
        </tr>
    </table>

    <!-- Contenido Principal -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; font-family: Arial, sans-serif;">
        <tr>
            <td align="center" style="padding: 20px 15px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px;">
                    <tr>
                        <td style="font-size: 14px; line-height: 1.5; color: #374151; font-family: Arial, sans-serif;">
                            ${content}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!-- Footer -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9fafb; border-top: 1px solid #e5e7eb; font-family: Arial, sans-serif;">
        <tr>
            <td align="center" style="padding: 30px 20px 20px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px;">
                    <tr>
                        <td align="center" style="padding-bottom: 20px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                ${showCintiaLogo ? `
                                <tr>
                                    <td align="center" style="padding-bottom: 15px; display: block; width: 100%;">
                                        <img src="https://tu-dominio.com/logo-cintia.png" alt="CINTIA - Centro de Innovacion en TIC" width="140" height="60" style="display: block; max-width: 140px; height: auto; margin: 0 auto;">
                                    </td>
                                </tr>
                                ` : ''}
                                <tr>
                                    <td align="center">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center" style="padding-bottom: 10px;">
                                                    <h3 style="color: #1f2937; font-size: 16px; font-weight: bold; margin: 0; font-family: Arial, sans-serif;">Centro de Innovacion en TIC para Apoyo a la Academia</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding-bottom: 15px;">
                                                    <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.4; font-family: Arial, sans-serif;">© 2026 Universidad de Cordoba. Cronograma de Capacitacion para Estudiantes.</p>
                                                </td>
                                            </tr>
                                            ${customFooterMessage ? `
                                            <tr>
                                                <td align="center" style="padding-bottom: 15px;">
                                                    <p style="color: #1B7D3D; font-size: 12px; margin: 0; font-style: italic; font-family: Arial, sans-serif;">${customFooterMessage}</p>
                                                </td>
                                            </tr>
                                            ` : ''}
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-bottom: 15px;">
                            <table width="80%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="border-top: 1px solid #d1d5db; height: 1px; font-size: 1px; line-height: 1px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 10px;">
                                        <p style="color: #9ca3af; font-size: 11px; margin: 0; font-family: Arial, sans-serif;">Plataforma de Capacitacion Institucional</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding: 0 5px;">
                                                    <a href="https://www.unicordoba.edu.co" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: #1B7D3D; color: #ffffff; padding: 8px 12px; border-radius: 4px; text-decoration: none; font-size: 11px; font-family: Arial, sans-serif;">Sitio Web</a>
                                                </td>
                                                <td style="padding: 0 5px;">
                                                    <a href="mailto:soporte@unicordoba.edu.co" style="display: inline-block; background-color: #6b7280; color: #ffffff; padding: 8px 12px; border-radius: 4px; text-decoration: none; font-size: 11px; font-family: Arial, sans-serif;">Contacto</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-top: 20px;">
                            <p style="color: #d1d5db; font-size: 10px; margin: 0; font-family: Arial, sans-serif;">Si no deseas recibir estos correos, puedes responder con "SUSCRIBIRSE" o "CANCELAR"</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>
</html>
  `;
};
