import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckIcon from '@mui/icons-material/Check';

const PIPELINE_STEPS = [
  { num: '01', title: 'Descubrimiento', desc: 'Análisis de requisitos y arquitectura.' },
  { num: '02', title: 'Diseño', desc: 'Prototipado de alta fidelidad y UX flows.' },
  { num: '03', title: 'Desarrollo', desc: 'Ingeniería ágil con sprints.' },
  { num: '04', title: 'Lanzamiento', desc: 'QA riguroso y despliegue CI/CD.' },
  { num: '05', title: 'Soporte', desc: 'Mantenimiento y monitoreo.' }
];

export default function ServicesView() {
  return (
    <Box sx={{ pt: 15, pb: 20 }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center', mb: 15 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: '999px', bgcolor: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)', mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'primary.main', animation: 'pulse 2s infinite' }} />
              <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 600, letterSpacing: '1px' }}>
                ENGINEERING EXCELLENCE
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Arquitectura de <Box component="span" sx={{ background: 'linear-gradient(to right, #b4c5ff, #4cd7f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Alto Rendimiento</Box>
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem' }}>
              Transformamos ideas complejas en ecosistemas digitales escalables. Nos especializamos en desarrollo web a medida, diseño de interfaces inmersivas y optimización extrema.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, width: '100%', aspectRatio: '4/3', borderRadius: 4, overflow: 'hidden', position: 'relative' }} className="glass-panel">
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(37,99,235,0.2) 0%, transparent 100%)' }} />
          </Box>
        </Box>

        <Box sx={{ mb: 15 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Áreas de Experiencia</Typography>
          <Typography sx={{ color: 'text.secondary', mb: 6 }}>Soluciones de ingeniería enfocadas en rendimiento y escalabilidad.</Typography>
          
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card className="glass-panel" sx={{ p: 3, height: '100%', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', right: -40, top: -40, width: 150, height: 150, bgcolor: 'primary.main', opacity: 0.1, filter: 'blur(50px)', borderRadius: '50%' }} />
                <CardContent sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: '#1c1f2a', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', mb: 3 }}>
                    <CodeIcon sx={{ color: 'primary.light' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Desarrollo Web Custom</Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 4, flex: 1 }}>Arquitecuras desacopladas, SPAs de alto rendimiento y ecosistemas empresariales. Construimos sistemas robustos que escalan con tu negocio.</Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {['Arquitectura Escalable', 'APIs REST/GraphQL', 'Sistemas Distribuidos'].map(t => (
                      <Box key={t} sx={{ px: 2, py: 0.5, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', color: 'text.secondary' }}>{t}</Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card className="glass-panel" sx={{ p: 3, height: '100%', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', right: -40, bottom: -40, width: 150, height: 150, bgcolor: 'secondary.main', opacity: 0.1, filter: 'blur(50px)', borderRadius: '50%' }} />
                <CardContent sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: '#1c1f2a', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', mb: 3 }}>
                    <DesignServicesIcon sx={{ color: 'secondary.light' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Diseño UI/UX</Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 4, flex: 1 }}>Interfaces inmersivas diseñadas para la retención y la conversión. Sistemas de diseño coherentes.</Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {['Design Systems', 'Figma', 'Prototipos'].map(t => (
                      <Box key={t} sx={{ px: 2, py: 0.5, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', color: 'text.secondary' }}>{t}</Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Card className="glass-panel" sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: '#1c1f2a', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', mb: 3 }}>
                      <SpeedIcon sx={{ color: '#4edea3' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Optimización de Rendimiento</Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 3 }}>Auditorías profundas, Core Web Vitals, optimización de assets, y estrategias de caché para tiempos de carga sub-segundo.</Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                      <Typography sx={{ color: '#4edea3', display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.875rem' }}><CheckIcon fontSize="small"/> 100/100 Lighthouse</Typography>
                      <Typography sx={{ color: '#4edea3', display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.875rem' }}><CheckIcon fontSize="small"/> SEO Técnico</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ flex: { md: '0 0 300px' }, width: '100%' }}>
                    <Box sx={{ bgcolor: '#0a0e18', p: 3, borderRadius: 2, border: '1px solid rgba(255,255,255,0.05)' }}>
                      <Typography component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'text.secondary', overflowX: 'auto' }}>
{`import { optimize } from '@core';

const init = async () => {
  await optimize({
    edgeCaching: true,
    bundleSize: 'minimal'
  });
  console.log('Ready.');
};`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Process */}
        <Box sx={{ mb: 15, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Nuestro Proceso</Typography>
          <Typography sx={{ color: 'text.secondary', mb: 10, maxWidth: 600, mx: 'auto' }}>Un flujo de trabajo riguroso e iterativo diseñado para entregar software de grado empresarial.</Typography>
          
          <Grid container spacing={4} sx={{ position: 'relative' }}>
            <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: 40, left: '10%', right: '10%', height: '1px', bgcolor: 'rgba(255,255,255,0.2)' }} />
            {PIPELINE_STEPS.map((step, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={i}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                  <Box className="glass-panel" sx={{ width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, fontSize: '1.25rem', fontWeight: 700, color: i % 2 === 0 ? 'primary.light' : 'secondary.main', border: `1px solid ${i % 2 === 0 ? 'rgba(180,197,255,0.3)' : 'rgba(76,215,246,0.3)'}`, bgcolor: '#0f131d' }}>
                    {step.num}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>{step.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{step.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="glass-panel" sx={{ p: 6, borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5 }} />
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Stack Tecnológico</Typography>
            <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 2 }}>Las herramientas que impulsan nuestra ingeniería</Typography>
          </Box>
          <Grid container spacing={6} sx={{ position: 'relative', zIndex: 1 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 1, mb: 3 }}>Frontend & UI</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map(t => (
                   <Box key={t} className="glass-panel" sx={{ px: 2, py: 1, borderRadius: 1.5, fontSize: '0.875rem' }}>{t}</Box>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 1, mb: 3 }}>Backend & APIs</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB'].map(t => (
                   <Box key={t} className="glass-panel" sx={{ px: 2, py: 1, borderRadius: 1.5, fontSize: '0.875rem' }}>{t}</Box>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 1, mb: 3 }}>Cloud & Infraestructura</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Terraform'].map(t => (
                   <Box key={t} className="glass-panel" sx={{ px: 2, py: 1, borderRadius: 1.5, fontSize: '0.875rem' }}>{t}</Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}
