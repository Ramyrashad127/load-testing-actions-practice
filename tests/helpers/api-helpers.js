import http from 'k6/http';
import { check, group } from 'k6';

export function getPublicCrocodiles() {
  group('Fetch public crocodiles API', () => {
    const res = http.get('https://test-api.k6.io/public/crocodiles/')
    
    check(res, {
      'status is 200': (r) => r.status === 200,
    });
})
}