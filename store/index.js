export const state = () => ({
    locales: ['en-US', 'zh-CN'],
    locale: 'en-US'
  })
  
  export const mutations = {
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
  }
  