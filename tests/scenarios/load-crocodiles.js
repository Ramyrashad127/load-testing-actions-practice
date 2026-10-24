import { getPublicCrocodiles } from '../helpers/api-helpers.js';
import { sleep } from 'k6';

export function runCrocodileScenario() {
  getPublicCrocodiles();
  // Simulate user pausing before their next action
  sleep(1); 
}