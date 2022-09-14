const ip = { adress: '192.168.0.2', mask: '255.255.255.0' }

console.log(ip)
console.log(ip.adress)
console.log(ip['adress'])
console.log(ip.mask)
console.log(ip['mask'])

ip.version = 'v6'
console.log(ip)
console.log(ip.version)

ip.version = 'v4'
console.log(ip)
console.log(ip.version)

delete ip.version
console.log(ip)
console.log(ip.version)