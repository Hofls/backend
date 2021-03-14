// package.json -> "cross-env": "^7.0.2"
// "launch-dev": "cross-env NODE_PROFILE='dev' npm run launch",
// "launch": "node src/main.js",

if (process.env.NODE_PROFILE === "dev") {
    console.log('dev profile!')
} else {
    console.log('default profile!')
}