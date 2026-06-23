import fs from 'fs';
import path from 'path';

const traverse = (dir: string) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = content
        .replace(/<Grid item xs={([^}]+)} md={([^}]+)} key={([^}]+)}>/g, '<Grid size={{ xs: $1, md: $2 }} key={$3}>')
        .replace(/<Grid item xs={([^}]+)} md={([^}]+)}>/g, '<Grid size={{ xs: $1, md: $2 }}>')
        .replace(/<Grid item xs={([^}]+)} sm={([^}]+)} md={([^}]+)} key={([^}]+)}>/g, '<Grid size={{ xs: $1, sm: $2, md: $3 }} key={$4}>')
        .replace(/<Grid item xs={([^}]+)} sm={([^}]+)}>/g, '<Grid size={{ xs: $1, sm: $2 }}>')
        .replace(/<Grid item xs={([^}]+)} lg={([^}]+)} sx={([^>]+)}>/g, '<Grid size={{ xs: $1, lg: $2 }} sx={$3}>')
        .replace(/<Grid item xs={([^}]+)} lg={([^}]+)}>/g, '<Grid size={{ xs: $1, lg: $2 }}>')
        .replace(/<Grid item xs={([^}]+)}>/g, '<Grid size={{ xs: $1 }}>');
      
      if (content !== modified) {
        fs.writeFileSync(fullPath, modified);
        console.log('Fixed', fullPath);
      }
    }
  }
};
traverse('./src/components/');
