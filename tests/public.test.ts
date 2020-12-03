import shellac from 'shellac'

describe('public installation', () => {
  it('should be installable', async () => {
    await shellac`
      $ echo "Hello, world!"
      stdout >> ${echo => {
        expect(echo).toBe('Hello, world!')
      }}
    `
  })
})
