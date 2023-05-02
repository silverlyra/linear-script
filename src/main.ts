import {LinearClient} from '@linear/sdk'
import {core, run} from 'github-script-action'

async function main(): Promise<void> {
  const token = core.getInput('linear-token', {required: true})
  const auth = token.startsWith('lin_api_')
    ? {apiKey: token}
    : {accessToken: token}
  const linear = new LinearClient(auth)

  await run({linear})
}

main()
