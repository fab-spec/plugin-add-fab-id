const {default: shellac} = require('shellac')

describe('plugin', () => {
  it('should be installable', async () => {
    await shellac`
      $ echo "Hello, world!"
      stdout >> ${(echo) => {
        expect(echo).toBe('Hello, world!')
      }}
    `
  })
})
