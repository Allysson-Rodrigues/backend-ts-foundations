import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('🚀 Server flying on port ' + PORT);
  console.log('🌍 Environment: ' + process.env.NODE_ENV);
});
