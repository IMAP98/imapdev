import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

const TESTIMONIALS = [
  {
    quote: "La capacidad de IMAPDEV para transformar conceptos complejos en una plataforma robusta y escalable superó nuestras expectativas. Su enfoque en el rendimiento es simplemente excepcional.",
    name: "Alejandro Rivera",
    title: "CTO, TechVision Dynamics",
    color: "primary.light"
  },
  {
    quote: "Buscábamos un partner que entendiera tanto el código como el diseño premium. IMAPDEV nos entregó una solución que no solo es rápida, sino visualmente impactante.",
    name: "Sofía Montes",
    title: "Founder, Nexus Cloud Solutions",
    color: "#4edea3"
  }
];

export default function TestimonialsSection() {
  return (
    <Box sx={{ py: 15, position: 'relative', zIndex: 10 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ color: 'text.primary', fontWeight: 700, mb: 2 }}>
            Testimonios de Éxito
          </Typography>
          <Box sx={{ width: 80, height: 4, background: 'linear-gradient(to right, #b4c5ff, #4cd7f6)', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Grid container spacing={4}>
          {TESTIMONIALS.map((testimonial, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <Card className="glass-panel" sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s', '&:hover': { borderColor: testimonial.color, boxShadow: `0 0 20px ${testimonial.color}20` } }}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {[1,2,3,4,5].map(star => (
                      <StarIcon key={star} sx={{ color: '#facc15', fontSize: '1.25rem' }} />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.primary', flexGrow: 1, lineHeight: 1.8 }}>
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                    <Avatar sx={{ bgcolor: `${testimonial.color}20`, color: testimonial.color, border: `1px solid ${testimonial.color}40`, width: 48, height: 48 }}>
                      <PersonIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: testimonial.color, fontWeight: 600, lineHeight: 1.2 }}>{testimonial.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'monospace', mt: 0.5 }}>{testimonial.title}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
