/**
 * Componente de Footer optimizado para Email y Móviles
 * Compatible con la mayoría de clientes de correo (Gmail, Outlook, etc.)
 * Optimizado para visualización en celulares
 */

interface EmailFooterProps {
  showCintiaLogo?: boolean;
  customMessage?: string;
}

export default function EmailFooter({ 
  showCintiaLogo = true,
  customMessage 
}: EmailFooterProps) {
  return (
    <table 
      width="100%" 
      border={0} 
      cellSpacing={0} 
      cellPadding={0}
      style={{
        backgroundColor: '#f9fafb',
        borderTop: '1px solid #e5e7eb',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <tr>
        <td align="center" style={{ padding: '30px 20px 20px' }}>
          <table 
            width="100%" 
            border={0} 
            cellSpacing={0} 
            cellPadding={0}
            style={{ maxWidth: '600px' }}
          >
            {/* Sección principal del footer */}
            <tr>
              <td align="center" style={{ paddingBottom: '20px' }}>
                <table 
                  width="100%" 
                  border={0} 
                  cellSpacing={0} 
                  cellPadding={0}
                >
                  <tr>
                    {/* Logo CINTIA - Visible en desktop, oculto en móvil si es necesario */}
                    {showCintiaLogo && (
                      <td 
                        align="center" 
                        style={{ 
                          paddingBottom: '15px',
                          display: 'block',
                          width: '100%'
                        }}
                      >
                        <img
                          src="https://tu-dominio.com/logo-cintia.png"
                          alt="CINTIA - Centro de Innovacion en TIC"
                          width="140"
                          height="60"
                          style={{
                            display: 'block',
                            maxWidth: '140px',
                            height: 'auto',
                            margin: '0 auto'
                          }}
                        />
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td align="center">
                      <table 
                        width="100%" 
                        border={0} 
                        cellSpacing={0} 
                        cellPadding={0}
                      >
                        <tr>
                          <td align="center" style={{ paddingBottom: '10px' }}>
                            <h3
                              style={{
                                color: '#1f2937',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                margin: '0',
                                fontFamily: 'Arial, sans-serif'
                              }}
                            >
                              Centro de Innovacion en TIC para Apoyo a la Academia
                            </h3>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style={{ paddingBottom: '15px' }}>
                            <p
                              style={{
                                color: '#6b7280',
                                fontSize: '13px',
                                margin: '0',
                                lineHeight: '1.4',
                                fontFamily: 'Arial, sans-serif'
                              }}
                            >
                              © 2026 Universidad de Cordoba. Cronograma de Capacitacion para Estudiantes.
                            </p>
                          </td>
                        </tr>
                        {customMessage && (
                          <tr>
                            <td align="center" style={{ paddingBottom: '15px' }}>
                              <p
                                style={{
                                  color: '#1B7D3D',
                                  fontSize: '12px',
                                  margin: '0',
                                  fontStyle: 'italic',
                                  fontFamily: 'Arial, sans-serif'
                                }}
                              >
                                {customMessage}
                              </p>
                            </td>
                          </tr>
                        )}
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            {/* Divider */}
            <tr>
              <td align="center" style={{ paddingBottom: '15px' }}>
                <table 
                  width="80%" 
                  border={0} 
                  cellSpacing={0} 
                  cellPadding={0}
                >
                  <tr>
                    <td 
                      style={{
                        borderTop: '1px solid #d1d5db',
                        height: '1px',
                        fontSize: '1px',
                        lineHeight: '1px'
                      }}
                    >
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            {/* Información de contacto y redes sociales */}
            <tr>
              <td align="center">
                <table 
                  width="100%" 
                  border={0} 
                  cellSpacing={0} 
                  cellPadding={0}
                >
                  <tr>
                    <td align="center" style={{ paddingBottom: '10px' }}>
                      <p
                        style={{
                          color: '#9ca3af',
                          fontSize: '11px',
                          margin: '0',
                          fontFamily: 'Arial, sans-serif'
                        }}
                      >
                        Plataforma de Capacitacion Institucional
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <table 
                        border={0} 
                        cellSpacing={0} 
                        cellPadding={0}
                      >
                        <tr>
                          <td style={{ padding: '0 5px' }}>
                            <a
                              href="https://www.unicordoba.edu.co"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-block',
                                backgroundColor: '#1B7D3D',
                                color: '#ffffff',
                                padding: '8px 12px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontSize: '11px',
                                fontFamily: 'Arial, sans-serif'
                              }}
                            >
                              Sitio Web
                            </a>
                          </td>
                          <td style={{ padding: '0 5px' }}>
                            <a
                              href="mailto:soporte@unicordoba.edu.co"
                              style={{
                                display: 'inline-block',
                                backgroundColor: '#6b7280',
                                color: '#ffffff',
                                padding: '8px 12px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontSize: '11px',
                                fontFamily: 'Arial, sans-serif'
                              }}
                            >
                              Contacto
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            {/* Información legal */}
            <tr>
              <td align="center" style={{ paddingTop: '20px' }}>
                <p
                  style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    margin: '0',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  Si no deseas recibir estos correos, puedes responder con "SUSCRIBIRSE" o "CANCELAR"
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}

// Versión HTML pura para copiar y pegar
export const EmailFooterHTML = `
<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9fafb; border-top: 1px solid #e5e7eb; font-family: Arial, sans-serif;">
  <tr>
    <td align="center" style="padding: 30px 20px 20px;">
      <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px;">
        <tr>
          <td align="center" style="padding-bottom: 20px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" style="padding-bottom: 15px; display: block; width: 100%;">
                  <img src="https://tu-dominio.com/logo-cintia.png" alt="CINTIA - Centro de Innovacion en TIC" width="140" height="60" style="display: block; max-width: 140px; height: auto; margin: 0 auto;">
                </td>
              </tr>
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
`;
