import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({}).extend({
  rules: {
    'no-undef': 'off'
  }
})
