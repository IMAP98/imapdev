import { Box, Container, Typography, Grid } from '@mui/material';

const STATS = [
  { value: '+20', label: 'PROYECTOS EXITOSOS', color: 'primary.light' },
  { value: '+5', label: 'AÑOS DE EXPERIENCIA', color: 'secondary.main' },
  { value: '95+', label: 'LIGHTHOUSE SCORE', color: '#4edea3' },
];

export default function StatsSection() {
  return (
    <Box sx={{ py: 8, bgcolor: 'rgba(23, 27, 38, 0.5)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 10 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {STATS.map((stat, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <Box sx={{ 
                textAlign: 'center', 
                p: 2,
                borderRight: { md: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' },
                borderBottom: { xs: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none', md: 'none' }
              }}>
                <Typography variant="h2" sx={{ color: stat.color, mb: 1, fontWeight: 800 }}>
                  {stat.value}
                </Typography>
                <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: '2px' }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
