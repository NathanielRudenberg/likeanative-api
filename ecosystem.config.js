module.exports = {
  apps: [{
    name: "Like A Native API",
    script: "./app.js",
    instances: "max",
    exec_mode: "cluster",
    env: {
      NODE_ENV: "production",
    }
  }]
}