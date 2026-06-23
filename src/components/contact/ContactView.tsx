import { Box, Container, Typography, Grid, Card, TextField, MenuItem, Button, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import ForumIcon from '@mui/icons-material/Forum';
import HubIcon from '@mui/icons-material/Hub';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import ArchitectureIcon from '@mui/icons-material/Architecture';

export default function ContactView() {
  return (
    <Box sx={{ pt: 15, pb: 20 }}>
      
      <Box sx={{ position: 'absolute', top: '10%', left: '10%', width: '40%', height: '400px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '10%', width: '30%', height: '300px', background: 'rgba(3, 181, 211, 0.1)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none' }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8}>
          
          <Grid size={{ xs: 12, lg: 5 }} sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Box>
              <Box sx={{ display: 'inline-block', px: 2, py: 0.5, borderRadius: 4, bgcolor: '#1c1f2a', border: '1px solid rgba(255,255,255,0.1)', color: 'secondary.main', fontSize: '0.75rem', letterSpacing: 1.5, mb: 4, textTransform: 'uppercase' }}>
                Initialize Connection
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
                Let's build something <Box component="span" sx={{ background: 'linear-gradient(to right, #b4c5ff, #4cd7f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>extraordinary.</Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem' }}>
                Deploy your vision with high-performance engineering. Drop your project specs below and our architecture team will respond within 24 hours.
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box className="glass-panel" sx={{ p: 4, borderRadius: 3 }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: '#1c1f2a', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <EmailIcon sx={{ color: 'primary.light' }} />
                  </Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 1, textTransform: 'uppercase' }}>Direct Line</Typography>
                  <Typography sx={{ mt: 1, fontWeight: 500 }}>hello@imapdev.io</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box className="glass-panel" sx={{ p: 4, borderRadius: 3 }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: '#1c1f2a', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <TerminalIcon sx={{ color: '#4edea3' }} />
                  </Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 1, textTransform: 'uppercase' }}>HQ / Operations</Typography>
                  <Typography sx={{ mt: 1, fontWeight: 500 }}>Remote Native</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Global Distribution</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Box className="glass-panel" sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 1, textTransform: 'uppercase', display: 'block', mb: 2 }}>Connect to Network</Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {[<CodeIcon key="code" />, <ForumIcon key="forum" />, <HubIcon key="hub" />].map((icon, i) => (
                      <Box key={i} sx={{ p: 1.5, borderRadius: 2, bgcolor: '#1c1f2a', border: '1px solid rgba(255,255,255,0.05)', color: 'text.primary', cursor: 'pointer', '&:hover': { color: 'primary.light', borderColor: 'primary.main' } }}>
                        {icon}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, lg: 7 }}>
            <Box className="glass-panel" sx={{ p: { xs: 4, md: 6 }, borderRadius: 4 }}>
              <Box sx={{ mb: 6, pb: 4, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>Transmission Protocol</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Secure, encrypted connection to our project managers.</Typography>
              </Box>

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField 
                    fullWidth 
                    label="DEVELOPER / CLIENT NAME"
                    variant="outlined"
                    placeholder="John Doe"
                    slotProps={{
                      htmlInput: { shrink: true } as any,
                      inputLabel: { shrink: true, sx: { color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 } },
                      input: {
                        startAdornment: <InputAdornment position="start"><PersonIcon fontSize="small" /></InputAdornment>,
                        sx: { bgcolor: 'rgba(255,255,255,0.02)', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } } 
                      }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField 
                    fullWidth 
                    label="RETURN ADDRESS (EMAIL)"
                    variant="outlined"
                    placeholder="john@example.com"
                    slotProps={{
                      inputLabel: { shrink: true, sx: { color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 } },
                      input: {
                        startAdornment: <InputAdornment position="start"><EmailIcon fontSize="small" /></InputAdornment>,
                        sx: { bgcolor: 'rgba(255,255,255,0.02)', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } } 
                      }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    select
                    fullWidth
                    label="PROJECT ARCHITECTURE"
                    defaultValue=""
                    slotProps={{
                      inputLabel: { shrink: true, sx: { color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 } },
                      input: {
                        startAdornment: <InputAdornment position="start"><ArchitectureIcon fontSize="small" /></InputAdornment>,
                        sx: { bgcolor: 'rgba(255,255,255,0.02)', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } } 
                      }
                    }}
                  >
                    <MenuItem value="" disabled>Select project scope...</MenuItem>
                    <MenuItem value="web">Web App Development</MenuItem>
                    <MenuItem value="mobile">Mobile / Native App</MenuItem>
                    <MenuItem value="cloud">Cloud Infrastructure</MenuItem>
                    <MenuItem value="ai">AI Integration</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField 
                    fullWidth 
                    multiline
                    rows={5}
                    label="SYSTEM REQUIREMENTS / PAYLOAD"
                    variant="outlined"
                    placeholder="Describe the technical requirements, stack preferences, and goals of your project..."
                    slotProps={{
                      inputLabel: { shrink: true, sx: { color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 } },
                      input: {
                        sx: { bgcolor: 'rgba(255,255,255,0.02)', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } } 
                      }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ py: 2, background: 'linear-gradient(to right, #2563eb, #03b5d3)', color: '#fff', fontSize: '1rem', '&:hover': { transform: 'scale(1.02)' }, transition: 'transform 0.2s' }}
                  >
                    Execute Transmission
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
