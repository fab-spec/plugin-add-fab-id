import { FABRuntime } from '@fab/core'

const DEFAULT_ARGS = {
  header: 'X-FAB-ID',
}

export default ({ Router, ServerContext }: FABRuntime, args = {}) => {
  const { header } = {
    ...DEFAULT_ARGS,
    ...args,
  }

  Router.interceptResponse(async (response) => {
    response.headers.set(header, ServerContext.bundle_id)
    return response
  })
}
