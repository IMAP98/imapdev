import { Box, Container, Typography, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import UpdateIcon from '@mui/icons-material/Update';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import DnsIcon from '@mui/icons-material/Dns';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BackupIcon from '@mui/icons-material/Backup';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GroupsIcon from '@mui/icons-material/Groups';
import BoltIcon from '@mui/icons-material/Bolt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const FAQ = [
  { q: '¿Cómo se calculan las cotizaciones personalizadas?', a: 'Analizamos los requerimientos funcionales, integraciones de terceros, volumen de tráfico esperado y el stack tecnológico deseado. Presentamos un documento técnico detallado con horas estimadas por cada módulo.' },
  { q: '¿Las horas de soporte no utilizadas se acumulan?', a: 'En el Plan Professional y Enterprise, hasta el 20% de las horas no utilizadas pueden transferirse al mes siguiente. Esto permite flexibilidad para meses con mayor carga de trabajo.' },
  { q: '¿Qué stacks tecnológicos cubren sus planes?', a: 'Somos especialistas en ecosistemas JavaScript/TypeScript (React, Node.js, Next.js), Python (Django, FastAPI), arquitecturas Cloud (AWS, Azure, GCP) y bases de datos SQL/NoSQL modernas.' },
  { q: '¿Puedo cambiar de plan en cualquier momento?', a: 'Sí, los planes pueden escalarse o reducirse mensualmente con un aviso de 15 días. Esto le permite ajustar sus costos operativos según el ciclo de vida de su producto.' }
];

export default function PricingView() {
  return (
    <Box sx={{ pt: 15, pb: 20 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 20, position: 'relative' }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(180, 197, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', zIndex: -1 }} />
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 2, display: 'block', mb: 2 }}>Pricing & Support</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, mb: 4, lineHeight: 1.1 }}>
            Ingeniería a Medida.<br/>
            <Box component="span" sx={{ background: 'linear-gradient(to right, #b4c5ff, #4cd7f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Soporte Evolutivo.</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem', mb: 6 }}>
            Mientras que cada desarrollo se cotiza de forma personalizada según su complejidad técnica, nuestros planes mensuales garantizan que su infraestructura mantenga un rendimiento óptimo y seguridad de vanguardia.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" sx={{ py: 1.5, px: 4 }}>Ver Planes de Soporte</Button>
            <Button variant="outlined" size="large" sx={{ py: 1.5, px: 4, color: 'text.primary', borderColor: 'rgba(255,255,255,0.2)' }}>Solicitar Cotización</Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mb: 20 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>El Modelo Híbrido IMAPDEV</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Combinamos la flexibilidad del desarrollo por proyecto con la estabilidad de un mantenimiento continuo.</Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className="glass-panel" sx={{ p: 4, height: '100%', position: 'relative', overflow: 'hidden' }}>
              <ArchitectureIcon sx={{ position: 'absolute', top: 20, right: 20, fontSize: 160, opacity: 0.05 }} />
              <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: 'rgba(180, 197, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <ArchitectureIcon sx={{ color: 'primary.light' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Desarrollo Bajo Cotización</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 4 }}>Inversión inicial para el diseño, arquitectura y despliegue de su solución personalizada. Cada proyecto se analiza para ofrecer una estimación precisa basada en requerimientos específicos.</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {['Auditoría Técnica Inicial', 'Stack Tecnológico a Medida', 'Hitos de Entrega Definidos'].map(item => (
                  <Typography key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.875rem' }}><CheckCircleIcon fontSize="small" sx={{ color: 'secondary.main' }}/> {item}</Typography>
                ))}
              </Box>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className="glass-panel" sx={{ p: 4, height: '100%', position: 'relative', overflow: 'hidden' }}>
              <UpdateIcon sx={{ position: 'absolute', top: 20, right: 20, fontSize: 160, opacity: 0.05 }} />
              <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: 'rgba(76, 215, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <UpdateIcon sx={{ color: 'secondary.main' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Suscripción de Soporte</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 4 }}>Mantenga su ventaja competitiva con actualizaciones constantes, parches de seguridad proactivos y optimización de infraestructura continua.</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {['Mantenimiento Preventivo', 'Tiempo de Respuesta Garantizado', 'Monitoreo de Performance 24/7'].map(item => (
                  <Typography key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.875rem' }}><CheckCircleIcon fontSize="small" sx={{ color: '#4edea3' }}/> {item}</Typography>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'rgba(23, 27, 38, 0.5)', py: 15, mb: 20 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Nuestros Planes de Soporte</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Escalabilidad técnica para empresas en cualquier etapa de crecimiento.</Typography>
          </Box>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            
            <Grid size={{ xs: 12, md: 4 }}>
              <Card className="glass-panel" sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant="caption" sx={{ color: 'secondary.main', letterSpacing: 1, textTransform: 'uppercase', mb: 2, display: 'block' }}>Plan Essentials</Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mb: 2 }}>
                  <Typography variant="h4">$</Typography>
                  <Typography variant="h2" sx={{ fontWeight: 800 }}>450</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>/mes</Typography>
                </Box>
                <Typography sx={{ color: 'text.secondary', mb: 4 }}>Ideal para MVPs y plataformas de baja carga.</Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 6, flexGrow: 1 }}>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ScheduleIcon sx={{ color: 'primary.light' }}/> 5 horas de desarrollo/mes</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><SpeedIcon sx={{ color: 'primary.light' }}/> 24h tiempo de respuesta</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><SecurityIcon sx={{ color: 'primary.light' }}/> Parches básicos de seguridad</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DnsIcon sx={{ color: 'primary.light' }}/> Monitoreo de disponibilidad</Typography>
                </Box>
                <Button variant="outlined" fullWidth sx={{ color: 'text.primary', borderColor: 'rgba(255,255,255,0.2)', py: 1.5 }}>Seleccionar Plan</Button>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card className="glass-panel" sx={{ p: 4, display: 'flex', flexDirection: 'column', position: 'relative', borderColor: 'primary.main', transform: { md: 'scale(1.05)' }, zIndex: 2 }}>
                <Box sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', bgcolor: 'primary.main', px: 2, py: 0.5, borderRadius: 4, fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Más Popular</Box>
                <Typography variant="caption" sx={{ color: 'primary.light', letterSpacing: 1, textTransform: 'uppercase', mb: 2, display: 'block', mt: 1 }}>Plan Professional</Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mb: 2 }}>
                  <Typography variant="h4">$</Typography>
                  <Typography variant="h2" sx={{ fontWeight: 800 }}>1,200</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>/mes</Typography>
                </Box>
                <Typography sx={{ color: 'text.secondary', mb: 4 }}>Optimizado para negocios en escalamiento activo.</Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 6, flexGrow: 1 }}>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ScheduleIcon sx={{ color: 'primary.main' }}/> 15 horas de desarrollo/mes</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><SpeedIcon sx={{ color: 'primary.main' }}/> 8h tiempo de respuesta</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ShowChartIcon sx={{ color: 'primary.main' }}/> Optimización de performance</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><BackupIcon sx={{ color: 'primary.main' }}/> Auditoría de backups mensual</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><AutoGraphIcon sx={{ color: 'primary.main' }}/> Reporte de métricas mensual</Typography>
                </Box>
                <Button variant="contained" fullWidth sx={{ py: 1.5 }}>Comenzar Ahora</Button>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card className="glass-panel" sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant="caption" sx={{ color: '#4edea3', letterSpacing: 1, textTransform: 'uppercase', mb: 2, display: 'block' }}>Plan Enterprise</Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>Custom</Typography>
                </Box>
                <Typography sx={{ color: 'text.secondary', mb: 4 }}>Infraestructuras críticas y alta demanda.</Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 6, flexGrow: 1 }}>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><GroupsIcon sx={{ color: '#4edea3' }}/> Ingeniero dedicado</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><BoltIcon sx={{ color: '#4edea3' }}/> SLA 4h respuesta inmediata</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><RocketLaunchIcon sx={{ color: '#4edea3' }}/> Prioridad absoluta en despliegue</Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><AllInclusiveIcon sx={{ color: '#4edea3' }}/> Horas ilimitadas/Bolsa dinámica</Typography>
                </Box>
                <Button variant="outlined" fullWidth sx={{ color: 'text.primary', borderColor: 'rgba(255,255,255,0.2)', py: 1.5 }}>Hablar con Sales</Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mb: 20 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>Preguntas Frecuentes</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {FAQ.map((faq, i) => (
            <Accordion key={i} className="glass-panel" sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, borderRadius: '12px !important', overflow: 'hidden' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />} sx={{ p: { xs: 2, md: 3 } }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 3, color: 'text.secondary', lineHeight: 1.6 }}>
                <Typography>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      
      <Container maxWidth="xl">
        <Box className="glass-panel" sx={{ bgcolor: 'rgba(37, 99, 235, 0.1)', p: { xs: 6, md: 10 }, borderRadius: 6, textAlign: 'center', position: 'relative', overflow: 'hidden', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
          <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5 }} />
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>¿Listo para escalar su infraestructura?</Typography>
            <Typography sx={{ color: 'text.secondary', mb: 6, maxWidth: 600, mx: 'auto', fontSize: '1.125rem' }}>Solicite una consultoría técnica gratuita para evaluar su proyecto y recibir una cotización a medida adaptada a sus objetivos de negocio.</Typography>
            <Button variant="contained" size="large" sx={{ py: 2, px: 6, bgcolor: 'primary.light', color: 'primary.dark', '&:hover': { bgcolor: '#fff' } }}>
              Solicitar Cotización Personalizada
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
