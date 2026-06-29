import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const STATS = [
  { value: '+10', label: 'PROYECTOS EXITOSOS', color: 'primary.light' },
  { value: '+5', label: 'AÑOS DE EXPERIENCIA', color: 'secondary.main' },
  { value: '100%', label: 'CLIENTES SATISFECHOS', color: '#4edea3' },
];

type AnimatedStatValueProps = {
  value: string;
  start: boolean;
  duration?: number;
};

function AnimatedStatValue({ value, start, duration = 3200 }: AnimatedStatValueProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = Number(value.replace(/\D/g, ''));
  const prefix = value.startsWith('+') ? '+' : '';
  const suffix = value.endsWith('%') ? '%' : '';

  useEffect(() => {
    if (!start) {
      return;
    }

    let animationFrameId = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(targetValue * easedProgress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, start, targetValue]);

  return <>{prefix}{displayValue}{suffix}</>;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldStartAnimation) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldStartAnimation]);

  return (
    <Box ref={sectionRef} sx={{ py: 8, bgcolor: 'rgba(23, 27, 38, 0.5)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 10 }}>
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
                  <AnimatedStatValue value={stat.value} start={shouldStartAnimation} />
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
