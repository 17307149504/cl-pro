import Vue from 'vue';
import { Menu, MenuItem, Input, Button, Rate, Tag} from 'element-ui';
let ary = [Menu, MenuItem, Input, Button, Rate, Tag];
ary.forEach( item => {
    Vue.use(item)
})
