import shellac from 'shellac'
import { dir } from 'tmp-promise'

describe('public installation', () => {
  it('should be installable', async () => {
    const cwd = (await dir({ unsafeCleanup: true })).path

    await shellac.in(cwd)`
      $ npm init -y
      $ yarn add @fab/plugin-add-fab-id
      $ echo '${JSON.stringify({
        plugins: {
          '@fab/plugin-add-fab-id': {}
        }
      })}' > fab.config.json5
      
      $ cat fab.config.json5
      stdout >> ${console.log}
      
      $ npx fab build
      stdout >> ${console.log}
    `
  })
})
