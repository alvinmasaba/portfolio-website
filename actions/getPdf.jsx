import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const file = path.join(process.cwd(), 'actions', 'CV.pdf');
  const fileContent = fs.readFileSync(file);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="CV.pdf"');
  return res.end(fileContent);
}
