import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function HeroSection() {
  return (
    <Box sx={{ position: 'relative', pt: { xs: 15, md: 20 }, pb: { xs: 10, md: 15 }, overflow: 'hidden' }} className="grid-bg">
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '500px',
          height: '500px',
          background: 'rgba(180, 197, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 8, alignItems: 'center' }}>
          <Box sx={{ flex: { xs: '1 1 100%', lg: '1 1 55%' }, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: '999px', border: '1px solid rgba(76, 215, 246, 0.3)', width: 'fit-content', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(12px)' }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'secondary.main', animation: 'pulse 2s infinite' }} />
              <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 500, fontFamily: 'monospace' }}>
                High-Performance Engineering
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, color: 'text.primary' }}>
              Desarrollamos el Futuro,{' '}
              <Box component="span" sx={{ background: 'linear-gradient(to right, #b4c5ff, #4cd7f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Juntos.
              </Box>
            </Typography>
            
            <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: '800px', lineHeight: 1.6 }}>
              Construimos arquitectura de software escalable y experiencias digitales premium que impulsan el crecimiento de empresas visionarias. Velocidad, precisión y diseño de vanguardia.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
              <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />} sx={{ background: 'linear-gradient(to right, #2563eb, #03b5d3)', color: '#fff', py: 1.5, px: 4 }}>
                Explorar Proyectos
              </Button>
              <Button variant="outlined" size="large" sx={{ py: 1.5, px: 4, color: 'text.primary', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)' } }}>
                Ver Servicios
              </Button>
            </Box>
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', lg: '1 1 45%' }, width: '100%' }}>
            <Box className="glass-panel" sx={{ p: 3, borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ background: '#171b26', borderRadius: 2, p: 3 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffb4ab' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#4edea3' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#4cd7f6' }} />
                </Box>
                <Typography component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.875rem', color: 'text.secondary', overflowX: 'auto' }}>
<span style={{ color: '#4cd7f6' }}>const</span> <span style={{ color: '#b4c5ff' }}>future</span> = <span style={{ color: '#4cd7f6' }}>await</span> <span style={{ color: '#4edea3' }}>IMAPDEV</span>.<span style={{ color: '#b4c5ff' }}>build</span>({`{`}
  <span style={{ color: '#dfe2f1' }}>performance:</span> <span style={{ color: '#4cd7f6' }}>true</span>,
  <span style={{ color: '#dfe2f1' }}>scalable:</span> <span style={{ color: '#4cd7f6' }}>true</span>,
  <span style={{ color: '#dfe2f1' }}>design:</span> <span style={{ color: '#4edea3' }}>'premium'</span>
{`}`});

<span style={{ color: '#b4c5ff' }}>console</span>.<span style={{ color: '#4cd7f6' }}>log</span>(<span style={{ color: '#4edea3' }}>'Ready to launch.'</span>);
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
