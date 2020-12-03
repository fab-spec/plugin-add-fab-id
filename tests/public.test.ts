import shellac from 'shellac'
import { dir } from 'tmp-promise'

describe('public installation', () => {
  it('should be installable', async () => {
    const cwd = (await dir({ unsafeCleanup: true })).path

    await shellac`
      in ${cwd} {
        $ npm init -y
        $$ npx fab init --empty -y
  
        $ yarn add @fab/plugin-add-fab-id
  
        $ echo '${JSON.stringify({
          plugins: {
            '@fab/plugin-add-fab-id': {}
          }
        })}' > fab.config.json5
        
        $$ npx fab build
        stdout >> ${build => expect(build).toMatch('Typecheck passed.')}
        
        $ ls -l
        stdout >> ${files => expect(files).toMatch('fab.zip')}
      }
    `

    /*
      Syntax:
        $ my command here
          executes commands
        $$ my command here
          executes and streams logs while the test runs

        stdout >> ${ str => ... }
          gives you 'str' as the output of the most recent command
        stdout >> var_name
          makes the shellac command return { var_name: latest_stdout } instead

        ^ both these work for stderr too

        in ${ dir } { ... }
          lets you change dir for a series of commands

        ^ This last one has an alias of shellac.in(dir)` ... `

        await ${ async () => { ... } }
          lets you pause the script while you do some dank JS

        // single-line-comments
          JS-style single-line comments work
    */

  }, 50000)
})
