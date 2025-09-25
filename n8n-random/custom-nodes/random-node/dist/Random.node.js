"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            group: ['transform'],
            version: 1,
            description: 'True Random Number Generator',
            defaults: { name: 'Random' },
            inputs: ['main'],
            outputs: ['main'],
            icon: 'file:random.svg',
            properties: [
                {
                    displayName: 'Min',
                    name: 'min',
                    type: 'number',
                    default: 1,
                    required: true,
                },
                {
                    displayName: 'Max',
                    name: 'max',
                    type: 'number',
                    default: 60,
                    required: true,
                },
            ],
        };
    }
    async execute() {
        const min = this.getNodeParameter('min', 0);
        const max = this.getNodeParameter('max', 0);
        const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;
        const { data } = await axios.get(url, { responseType: 'text' });
        return [[{ json: { randomNumber: parseInt(data.trim(), 10) } }]];
    }
}
module.exports = { Random };
//# sourceMappingURL=Random.node.js.map