import shellac from 'shellac'
import { dir } from 'tmp-promise'

describe('@fab/plugin-add-fab-id', () => {
  it('should be installable from NPM', async () => {
    const cwd = (await dir({ unsafeCleanup: true })).path

    await shellac.in(cwd)`
      $ npm init -y
      $$ npx fab init --empty -y

      $ yarn add @fab/plugin-add-fab-id

      $ echo '${JSON.stringify({
        plugins: {
          '@fab/plugin-add-fab-id': {}
        }
      })}' > fab.config.json5
      
      $$ yarn fab build
      stdout >> ${build => expect(build).toMatch('Typecheck passed.')}
      
      $ ls -l
      stdout >> ${files => expect(files).toMatch('fab.zip')}
    `
  }, 500000)
})
