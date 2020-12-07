import Vue from 'vue'

// UI
import Intro from '@/components/UI/Intro'
import Message from '@/components/UI/Message'
import PostsList from '@/components/Blog/PostsList'


// Controls
import AppButton from '@/components/UI/Controls/Button'
import AppInput from '@/components/UI/Controls/Input'
import AppTextarea from '@/components/UI/Controls/Textarea'
import AppMarkdown from '@/components/UI/Controls/Markdown'



// UI
Vue.component('Message', Message)
Vue.component('Intro', Intro)
Vue.component('PostsList', PostsList)

// Controls
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextarea', AppTextarea)
Vue.component('AppMarkdown', AppMarkdown)


