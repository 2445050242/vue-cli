<template>
  <div>
    <draggable v-model="tags" :move="getdata" @update="datadragEnd">
      <transition-group>
        <div v-for="element in tags" :key="element.id" class="drag-div">
          {{element.name}}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
//  import puppeteer from 'puppeteer'
  export default {
    data () {
      return {
        tags:[
          {
            name:'1',
            id:1
          },
          {
            name:'2',
            id:2
          },
          {
            name:'3',
            id:3
          },
        ],
      }
    },
    components: {
      draggable
    },
    created(){
    },
    methods:{
      getdata (evt) {
        console.log(evt.draggedContext.element.id)
      },
      datadragEnd (evt) {
        console.log('拖动前的索引 :' + evt.oldIndex)
        console.log('拖动后的索引 :' + evt.newIndex)
        console.log(this.tags)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .drag-div{
    background: gray;
    width: 300px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 10px;
    margin: 50px;
    text-align: center;
    line-height: 50px;
  }
</style>
