const request = require('supertest');
const { createApp } = require('../src/app');

const app = createApp();

describe('Text Utils API', () => {
  describe('GET /health', () => {
    it('returns ok status', async () => {
      const res = await request(app).get('/health');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('ok');
      expect(typeof res.body.uptime).toBe('number');
    });
  });

  describe('GET /reverse/:text', () => {
    it('reverses the input text', async () => {
      const res = await request(app).get('/reverse/devops');
      expect(res.status).toBe(200);
      expect(res.body.output).toBe('spoved');
    });
  });

  describe('GET /uppercase/:text', () => {
    it('uppercases the input text', async () => {
      const res = await request(app).get('/uppercase/hello');
      expect(res.status).toBe(200);
      expect(res.body.output).toBe('HELLO');
    });
  });

  describe('GET /palindrome/:text', () => {
    it('detects a palindrome', async () => {
      const res = await request(app).get('/palindrome/arara');
      expect(res.status).toBe(200);
      expect(res.body.isPalindrome).toBe(true);
    });

    it('detects a non-palindrome', async () => {
      const res = await request(app).get('/palindrome/devops');
      expect(res.status).toBe(200);
      expect(res.body.isPalindrome).toBe(false);
    });

    it('ignores case and punctuation', async () => {
      const res = await request(app).get('/palindrome/A%20man,%20a%20plan,%20a%20canal:%20Panama');
      expect(res.status).toBe(200);
      expect(res.body.isPalindrome).toBe(true);
    });
  });

  describe('Unknown routes', () => {
    it('returns 404', async () => {
      const res = await request(app).get('/does-not-exist');
      expect(res.status).toBe(404);
    });
  });
});
