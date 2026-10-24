import { runCrocodileScenario } from './scenarios/load-crocodiles.js';

export const options = {
  stages: [
        {duration: '5s', target: 5},
        {duration: '5s', target: 5},
        {duration: '5s', target:0}
    ],
  thresholds: {
    http_req_duration: ['p(95)<20'], 
    http_req_failed: ['rate<0.01'],   
  },
};

export default function () {
  runCrocodileScenario();
}