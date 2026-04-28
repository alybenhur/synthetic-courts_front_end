import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    blueprint: md3,
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            primary:    '#00d632',
            secondary:  '#00a828',
            accent:     '#ffd700',
            error:      '#FF5252',
            warning:    '#FB8C00',
            info:       '#2196F3',
            success:    '#00d632',
            background: '#F5F7FA',
            surface:    '#FFFFFF',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary:          '#00d632',
            secondary:        '#00a828',
            accent:           '#ffd700',
            error:            '#FF5252',
            warning:          '#FB8C00',
            info:             '#64B5F6',
            success:          '#00d632',
            background:       '#080c14',
            surface:          '#0d1120',
            'surface-variant':'#111827',
            'on-surface':     '#e8eaf0',
            'on-background':  '#e8eaf0',
          },
        },
      },
    },
    defaults: {
      VBtn:      { rounded: 'lg' },
      VCard:     { rounded: 'lg' },
      VTextField:{ variant: 'outlined', density: 'comfortable' },
      VSelect:   { variant: 'outlined', density: 'comfortable' },
      VTextarea: { variant: 'outlined', density: 'comfortable' },
    },
  })
  app.vueApp.use(vuetify)
})
