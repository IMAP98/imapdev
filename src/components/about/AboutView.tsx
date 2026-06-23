import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import SearchIcon from '@mui/icons-material/Search';
import DevicesIcon from '@mui/icons-material/Devices';
import SecurityIcon from '@mui/icons-material/Security';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const REASONS = [
  {
    icon: <SpeedIcon fontSize="large" sx={{ color: 'primary.light' }} />,
    color: 'primary.light',
    bgColor: 'rgba(180, 197, 255, 0.1)',
    title: 'Rendimiento Orientado',
    desc: 'Optimizamos cada byte. Desde la carga inicial hasta la interactividad, aplicamos técnicas de vanguardia para asegurar que tu aplicación responda en milisegundos.',
    cols: 2
  },
  {
    icon: <SearchIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    color: 'secondary.main',
    bgColor: 'rgba(76, 215, 246, 0.1)',
    title: 'Optimización SEO',
    desc: 'Estructura semántica, metadatos dinámicos y Core Web Vitals perfectos. Construimos para que los motores de búsqueda te encuentren.',
    cols: 1
  },
  {
    icon: <DevicesIcon fontSize="large" sx={{ color: '#4edea3' }} />,
    color: '#4edea3',
    bgColor: 'rgba(78, 222, 163, 0.1)',
    title: 'Diseño Responsive',
    desc: 'Experiencias fluidas en cualquier pantalla. Implementamos arquitecturas mobile-first para garantizar consistencia visual en todos los dispositivos.',
    cols: 1
  },
  {
    icon: <SecurityIcon fontSize="large" sx={{ color: '#ffb4ab' }} />,
    color: '#ffb4ab',
    bgColor: 'rgba(255, 180, 171, 0.1)',
    title: 'Seguridad Robusta',
    desc: 'Protección por diseño. Implementamos cifrado E2E y sanitización estricta para proteger tus datos contra amenazas.',
    cols: 1
  },
  {
    icon: <ArchitectureIcon fontSize="large" sx={{ color: '#0053db' }} />,
    color: '#0053db',
    bgColor: 'rgba(0, 83, 219, 0.1)',
    title: 'Arquitectura Escalable',
    desc: 'Diseñamos sistemas preparados para crecer. Desde microservicios hasta despliegues en la nube elásticos, tu infraestructura evolucionará.',
    cols: 1
  }
];

export default function AboutView() {
  return (
    <Box sx={{ pt: 15, pb: 20 }}>
      
      <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3, pointerEvents: 'none' }} />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center', mb: 20 }}>
          <Box sx={{ flex: 1, pr: { md: 4 } }}>
            <Box sx={{ display: 'inline-flex', px: 2, py: 0.5, borderRadius: 4, bgcolor: 'rgba(180, 197, 255, 0.1)', border: '1px solid rgba(180, 197, 255, 0.2)', color: 'primary.light', fontSize: '0.875rem', mb: 3 }}>
              Nuestra Visión
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, background: 'linear-gradient(to right, #b4c5ff, #4cd7f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Ingeniería que Impulsa el Futuro
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem', lineHeight: 1.8 }}>
              En IMAPDEV, no solo escribimos código; construimos arquitecturas digitales resilientes. Creemos en el desarrollo orientado al rendimiento, donde cada línea de código contribuye a una experiencia de usuario impecable y a un crecimiento escalable. Nuestra pasión es transformar ideas complejas en soluciones tecnológicas elegantes y eficientes.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box className="glass-panel" sx={{ p: 2, borderRadius: 4, position: 'relative' }}>
              <Box sx={{ position: 'absolute', inset: -20, background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', zIndex: -1 }} />
              <Box sx={{ width: '100%', aspectRatio: '1', bgcolor: '#171b26', borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(76,215,246,0.1) 0%, transparent 100%)' }} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>¿Por qué elegirnos?</Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            Nuestros pilares fundamentales garantizan que cada proyecto no solo cumpla, sino que supere los estándares de la industria moderna.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {REASONS.map((reason, i) => (
            <Grid size={{ xs: 12, md: reason.cols === 2 ? 8 : 4 }} key={i}>
              <Card className="glass-panel" sx={{ height: '100%', p: 2, transition: 'box-shadow 0.3s', '&:hover': { boxShadow: `0 0 20px ${reason.bgColor}` } }}>
                <CardContent>
                  <Box sx={{ width: 64, height: 64, borderRadius: 2, bgcolor: reason.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, border: `1px solid ${reason.color}40` }}>
                    {reason.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>{reason.title}</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{reason.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
