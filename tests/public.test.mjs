import test from 'ava'
import shellac from 'shellac'

test('plugin should be installable', async (t) => {
  await shellac`
    $ echo "Hello, world!"
    stdout >> ${(echo) => {
      t.is(echo, 'Hello, world!')
    }}
  `
})
