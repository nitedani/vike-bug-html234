import type { Config } from 'vike/types'

export default {
  clientRouting: false,
  meta: {
    Page: {
      env: {
        server: true,
        client: false
      }
    }
  }
} satisfies Config
