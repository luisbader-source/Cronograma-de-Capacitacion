/**
 * Componente de Encabezado optimizado para Email
 * Compatible con la mayoría de clientes de correo (Gmail, Outlook, etc.)
 */

interface EmailHeaderProps {
  title?: string;
  subtitle?: string;
  showDate?: boolean;
}

export default function EmailHeader({ 
  title = "Cronograma de Capacitacion", 
  subtitle = "Universidad de Cordoba - Semana del 23 al 27 de febrero de 2026",
  showDate = true 
}: EmailHeaderProps) {
  const currentDate = new Date().toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <table 
      width="100%" 
      border={0} 
      cellSpacing={0} 
      cellPadding={0}
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <tr>
        <td align="center" style={{ padding: '20px 0' }}>
          <table 
            width="100%" 
            border={0} 
            cellSpacing={0} 
            cellPadding={0}
            style={{ maxWidth: '600px', width: '100%' }}
          >
            <tr>
              <td align="center" style={{ paddingBottom: '15px' }}>
                {/* Logo Universidad */}
                <img
                  src="https://tu-dominio.com/logo-unicordoba.png"
                  alt="Universidad de Cordoba"
                  width="180"
                  height="80"
                  style={{
                    display: 'block',
                    maxWidth: '150px',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </td>
            </tr>
            <tr>
              <td align="center" style={{ paddingBottom: '10px' }}>
                <h1
                  style={{
                    color: '#1f2937',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    margin: '0',
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: '1.2'
                  }}
                >
                  {title}
                </h1>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ paddingBottom: '8px' }}>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '14px',
                    margin: '0',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  {subtitle}
                </p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <p
                  style={{
                    color: '#9ca3af',
                    fontSize: '12px',
                    margin: '0',
                    fontStyle: 'italic',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  Un legado de transformación social
                </p>
              </td>
            </tr>
            {showDate && (
              <tr>
                <td align="center" style={{ paddingTop: '15px' }}>
                  <div
                    style={{
                      backgroundColor: '#1B7D3D',
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      display: 'inline-block',
                      fontSize: '12px',
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    {currentDate}
                  </div>
                </td>
              </tr>
            )}
          </table>
        </td>
      </tr>
    </table>
  );
}

// Versión HTML pura para copiar y pegar
export const EmailHeaderHTML = `
<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-bottom: 1px solid #e5e7eb; font-family: Arial, sans-serif;">
  <tr>
    <td align="center" style="padding: 20px 0;">
      <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">
        <tr>
          <td align="center" style="padding-bottom: 15px;">
            <img src="https://tu-dominio.com/logo-unicordoba.png" alt="Universidad de Cordoba" width="180" height="80" style="display: block; max-width: 180px; height: auto;">
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-bottom: 10px;">
            <h1 style="color: #1f2937; font-size: 24px; font-weight: bold; margin: 0; font-family: Arial, sans-serif;">Cronograma de Capacitacion</h1>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-bottom: 8px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0; font-family: Arial, sans-serif;">Universidad de Cordoba - Semana del 23 al 27 de febrero de 2026</p>
          </td>
        </tr>
        <tr>
          <td align="center">
            <p style="color: #9ca3af; font-size: 12px; margin: 0; font-style: italic; font-family: Arial, sans-serif;">Un legado de transformación social</p>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-top: 15px;">
            <div style="background-color: #1B7D3D; color: #ffffff; padding: 8px 16px; border-radius: 4px; display: inline-block; font-size: 12px; font-family: Arial, sans-serif;">
              ${new Date().toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;
