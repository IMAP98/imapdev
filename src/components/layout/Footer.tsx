import { Box, Container, Typography, Grid, Link, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import ForumIcon from '@mui/icons-material/Forum';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#0a0e18', pt: 8, pb: 6, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" sx={{ color: 'primary.light', fontWeight: 800, mb: 2 }}>
              IMAPDEV
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              © 2026 IMAPDEV. Built for high-performance engineering.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: 600, mb: 2 }}>
              Services
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" color="text.secondary" underline="hover">Cloud Architecture</Link>
              <Link href="#" color="text.secondary" underline="hover">Mobile Dev</Link>
              <Link href="#" color="text.secondary" underline="hover">AI Integration</Link>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" color="text.secondary" underline="hover">Our Team</Link>
              <Link href="#" color="text.secondary" underline="hover">Careers</Link>
              <Link href="#" color="text.secondary" underline="hover">Privacy Policy</Link>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: 600, mb: 2 }}>
              Social
            </Typography>
            <Stack spacing={2}>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CodeIcon fontSize="small" /> GitHub
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WorkIcon fontSize="small" /> LinkedIn
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ForumIcon fontSize="small" /> Discord
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
