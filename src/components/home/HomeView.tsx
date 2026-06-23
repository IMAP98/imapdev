import { Box } from '@mui/material';
import HeroSection from '../home/HeroSection';
import StatsSection from '../home/StatsSection';
import TestimonialsSection from '../home/TestimonialsSection';

export default function HomeView() {
  return (
    <Box>
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
    </Box>
  );
}
