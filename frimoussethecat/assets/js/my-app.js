import { ref } from 'vue'
import MyButton from './my-button.js'

export default {
    components: {
        MyButton
    },
    props: {
    },
    setup(props) {
    },
    template: `
    <div>
        test:
        <my-button /> 
    </div>
    `
}
