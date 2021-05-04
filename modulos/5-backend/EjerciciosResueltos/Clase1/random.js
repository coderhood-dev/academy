const random = require('random');

for (let i = 0; i < 10; i++) {
    const randomInteger = random.int(1, 100);
    console.log(randomInteger);
}