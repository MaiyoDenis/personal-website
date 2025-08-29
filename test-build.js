import { createServer } from 'node:http';
import { readFile } from 'node:fs';
import { join, extname } from 'node:path';
import { exec } from 'node:child_process';

// First, build without the base path for testing
console.log('Building for local testing...');
exec('vite build --base=/', (error, _stdout, _stderr) => {
  if (error) {
    console.error('Build error:', error);
    return;
  }
  
  console.log('极速加速器/maiyo-portfolio/srcBuild completed');
  console.log('Starting test server...');
  
  const server = createServer((req, res) => {
    let filePath = join(process.cwd(), 'dist', req.url === '/' ? 'index.html' : req.url);
    
    readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      
      const ext = extname(filePath);
      let contentType = 'text/html';
      
      if (ext === '.js') contentType = 'application/javascript';
      if (ext === '.css') contentType = '极速加速器/maiyo-portfolio/srctext/css';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
  
  server.listen(3001, () => {
    console.log('Test server running on http://localhost:3001');
    console.log('This is a local test - the actual GitHub Pages deployment will work correctly');
  });
});
