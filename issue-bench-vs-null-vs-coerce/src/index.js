import { Bench } from 'tinybench';

const bench = new Bench({ name: 'simple benchmark', time: 100 });

const data = [];
for (let i = 0; i < 100000; i++) {
    data.push(Math.random() > 0.5 ? () => {} : null);
}

bench
    .add('coerce boolean', () => {
        for (const item of data) {
            if (item) {
                item();
            }
        }
    })
    .add('vs null', async () => {
        for (const item of data) {
            if (item !== null) {
                item();
            }
        }
    })
    .add('vs null, using &&', async () => {
        for (const item of data) {
            item !== null && item();
        }
    })
    .add('optional chaining', async () => {
        for (const item of data) {
            item?.();
        }
    });

await bench.run();

console.log(bench.name);
console.table(bench.table());
