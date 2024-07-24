import {exec} from 'child_process';

function killProcessOnPort(port: number) {
  const command = `lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`Process on port ${port} was killed`);
  });
}

// Example usage
killProcessOnPort(3400);
