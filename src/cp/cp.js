import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./src/cp/files/script.js', ...args]);

    child.stdout.on('data', (data) => {
        console.log(`Child says: ${data.toString()}`);
    });

    child.stdin.end();
};

spawnChildProcess(process.argv.slice(2));
