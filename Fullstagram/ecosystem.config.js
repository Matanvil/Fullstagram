module.exports = {
  apps : [{
    script: 'npm run dev',
    cwd: './apps/Backend'
  },
  {
    script: 'npm run dev',
    cwd: './apps/Frontend'
  },
  {
    script: 'npm run dev',
    cwd: './apps/db'
  }],
};
