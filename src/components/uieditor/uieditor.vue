<script>
/* eslint-disable */
import layout from "../layout/Layout.vue"
import section from "../tools/section.vue"
import row from "../tools/row.vue"
import column from "../tools/column.vue"
import text from "../tools/text.vue"
import image from "../tools/image.vue"
// Asi se importan las marcas de Vuetify

let listComponents = {
  "layout":[layout,0],
}

export default {
  data(){
    return {
      comps:[
        {
          tag:section,
          options:{
            style:{
              margin:"2px",
              border:'2px solid blue'
            },
            props: {
              component_class: 'section'
            },
            key:'layout_1'
          }
        },
        {
          tag:row,
          options:{
            style:{
              margin:"2px",
              border:'2px solid green',
              display:"flex"
            },
            props: {
              component_class: 'row'
            },
            key:'layout_2'
          },
          parent:'layout_1'
        },
        {
          tag:column,
          options:{
            style:{
              margin:"2px",
              border:'2px solid purple',
              width:"50%"
            },
            props: {
              component_class: 'column'
            },
            key:'layout_3'
          },
          parent:'layout_2'
        },{
          tag:text,
          options:{
            style:{
              margin:"2px",
              border:'2px solid gray',
              "text-align":"center"
            },
            props: {
              text: 'Titulo',
              tag: 'h1',
              component_class:''
            },
            key:'layout_4'
          },
          parent:'layout_3'
        },
        {
          tag:text,
          options:{
            style:{
              margin:"2px",
              border:'2px solid gray',
              "text-align":"justify"
            },
            props: {
              text: 'Lorem Ipsum',
              tag: 'p',
              component_class:''
            },
            key:'layout_5'
          },
          parent:'layout_3'
        },
        {
          tag:column,
          options:{
            style:{
              margin:"2px",
              border:'2px solid purple',
              width:"50%"
            },
            props: {
              component_class: 'column'
            },
            key:'layout_6'
          },
          parent:'layout_2'
        },
        {
          tag:image,
          options:{
            style:{
              margin:"2px",
              border:'2px solid gray'
            },
            props: {
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVdtGpmhREzXtuB9vwpzrTNFX3zOQYCQ_kF5PZHZ7OS9FDskV',
              name: 'Imagen_1',
              component_class:'image'
            },
            key:'layout_7'
          },
          parent:'layout_6'
        }
      ]
    }
  },
  render(createElement){
    var addchildrens = (children) => {
      return children.map((node) => {
        let childrens = this.comps.filter(i => i.parent === node.options.key) 
        return createElement(node.tag,
          JSON.parse(JSON.stringify(node.options)),
          childrens.length > 0 ? addchildrens(childrens):''
        )
      })
    }
    return createElement(layout,this.comps.map((val)=>{
      if(val.parent == undefined || val.parent == ""){
        let childrens = this.comps.filter(i => i.parent === val.options.key)
        return createElement(val.tag, JSON.parse(JSON.stringify(val.options)),
          childrens.length > 0 ? addchildrens(childrens):''
        )
      }
    }))
  },
  methods:{
    addElement(evt){
      // let listComponents = {
      //   "layout":[layout,0],
      //   "toolbar":[toolbar,0],
      //   "subtoolbar":[subtoolbar,0],
      //   "footer":[footer,0]
      // }
      listComponents[evt.tag][1] += 1
      //evt.tag+'_'+listComponents[evt.tag][1]
      //example layout_1
      let elementkey = `${evt.tag}_${listComponents[evt.tag][1]}` 
      let instanceVue = listComponents[evt.tag][0]
      //console.log("key",elementkey)
      evt.options.key = elementkey
      evt.options.props.idname = elementkey
      this.comps.push({
        tag:instanceVue,
        options:evt.options,
        parent: evt.parent === undefined ? "" : evt.parent
      })
    },
    removeElement(evt){
      let i = this.comps.findIndex(j => j.options.key === evt.keyname)
      this.comps.splice(i,1)
    }
  }
}
</script>