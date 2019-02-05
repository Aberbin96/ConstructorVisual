import uieditor from "./uieditor.vue"

export default {
  components:{
    'uieditor' : uieditor
  },
  data(){
    return{
      hidden : false
    }
  },
  methods:{
    addElement(evt){
      this.$refs.ui.addElement(evt)
    }
  }
}