import shellac from 'shellac'
import { dir } from 'tmp-promise'
import * as path from 'path'

describe('@fab/plugin-add-fab-id', () => {
  it('should be installable from NPM', async () => {
    const cwd = (await dir({ unsafeCleanup: true })).path

    await shellac.in(cwd)`
      $ npm init -y
      $$ npx fab init --empty -y

      $$ yarn add @fab/plugin-add-fab-id

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

  it('should be buildable locally', async () => {
    const cwd = (await dir({ unsafeCleanup: true })).path

    await shellac.in(cwd)`
      $ npm init -y
      $$ npx fab init --empty -y

      $ echo '${JSON.stringify({
        plugins: {
          [path.join(__dirname, 'index.ts')]: {}
        }
      })}' > fab.config.json5
      
      $$ cat fab.config.json5
      
      $$ yarn fab build
      stdout >> ${build => expect(build).toMatch('Typecheck passed.')}
      
      $ ls -l
      stdout >> ${files => expect(files).toMatch('fab.zip')}
    `
  }, 500000)
})
