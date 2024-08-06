const fs = require('fs');

fs.rm('./theme/dist/css/dist', { recursive: true, force: true }, (err) => {
  if (err) {
    console.error('Error removing directory:', err);
  } else {
    console.log('scss duplicated files removed successfully');
  }
});