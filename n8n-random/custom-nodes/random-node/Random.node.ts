import type { IExecuteFunctions } from 'n8n-workflow';
import type { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
const axios = require('axios');

class Random implements INodeType {

  description: INodeTypeDescription = {
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

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const min = this.getNodeParameter('min', 0) as number;
    const max = this.getNodeParameter('max', 0) as number;

    const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;
    const { data } = await axios.get(url, { responseType: 'text' });
return [[{ json: { randomNumber: parseInt(data.trim(), 10) } }]];
  }
  
}
module.exports = { Random };
