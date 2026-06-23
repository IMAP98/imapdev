import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NAV_ITEMS } from '../../constants/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main', fontWeight: 'bold' }}>
        IMAPDEV
      </Typography>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={item.href}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ background: 'rgba(15, 19, 29, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 800, color: 'primary.light', letterSpacing: '-1px' }}>
              IMAPDEV
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {NAV_ITEMS.map((item) => (
                <Button key={item.label} href={item.href} sx={{ color: 'text.secondary', '&:hover': { color: 'primary.light' } }}>
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ background: 'linear-gradient(to right, #2563eb, #03b5d3)', color: '#fff', '&:hover': { opacity: 0.9 } }}>
                Get Started
              </Button>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'primary.light' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: '#0f131d' } }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
