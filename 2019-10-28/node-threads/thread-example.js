const { spawn } = require('child_process');

const ls = spawn('say', ['hello', 'friends', 'how', 'are', 'you']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

setTimeout(() => {
  process.exit(0);
}, 1000);