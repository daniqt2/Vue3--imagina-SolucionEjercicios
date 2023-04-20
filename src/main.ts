import './style.css'

import App from './App.vue'
import { createApp } from 'vue'
import { highlightDirective } from './directives/focus.directives'

const app = createApp(App)

app.directive('highlight', highlightDirective)
app.mount('#app')
