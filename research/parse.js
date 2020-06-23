const spawnSync = require('child_process').spawnSync
const fs = require('fs')

const out = spawnSync('sh', ['./typescript-jquery-sample.sh'], { encoding: 'utf-8' })

console.log('stdout', out.stdout.toString())
console.log('error', out.error)
console.log('stderr', out.stderr.toString())

fs.writeFileSync('./test-result.json', out.stdout.toString())