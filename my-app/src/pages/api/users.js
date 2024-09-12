export default function handler(req, res) {

  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(process.cwd(), 'public', 'user_list.json');
  const jsonData = fs.readFileSync(filePath
  );
  const data = JSON.parse(jsonData);
  res.status(200).json(data);
  }
  