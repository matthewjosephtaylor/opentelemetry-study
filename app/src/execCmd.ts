import { exec } from "child_process";


export const execCmd = (cmd: string) => {
  const cp = exec(cmd);
  cp.stdout?.addListener("data", (chunk) => {
    process.stdout.write(chunk);
  });
  cp.stderr?.addListener("data", (chunk) => {
    process.stderr.write(chunk);
  });
  return new Promise((resolve, reject) => {
    cp.on("error", (error) => reject(error));
    cp.on("exit", (code) => {
      if (code === null || code === undefined || code !== 0) {
        reject(new Error(`Error code: ${code} from: '${cmd}'`));
        return;
      }
      resolve(code);
    });
  });
};
