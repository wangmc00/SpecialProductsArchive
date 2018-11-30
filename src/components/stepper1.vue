<template>
    <div style="margin-top: 3.5rem;width:127rem;">
        <v-stepper v-show=specialArchiveShow1  :style="{width: autoWidth+'px','margin-left': autoWidth*0.025+'px'}">
            <v-stepper-header>
                <v-stepper-step step="1">上传待归档数据</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="2">填写归档信息</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">确认归档信息</v-stepper-step>
            </v-stepper-header>
        </v-stepper>

      <v-stepper v-show=specialArchiveShow2 value="2" :style="{width: autoWidth+'px','margin-left':autoWidth*0.025+'px'}">
        <v-stepper-header>
          <v-stepper-step step="1" complete>上传待归档数据</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2">填写归档信息</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">确认归档信息</v-stepper-step>
        </v-stepper-header>
      </v-stepper>

      <v-stepper v-show=specialArchiveShow3 value="3" :style="{width: autoWidth+'px','margin-left':autoWidth*0.025+'px'}">
        <v-stepper-header>
          <v-stepper-step step="1" complete>上传待归档数据</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2" complete>填写归档信息</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">确认归档信息</v-stepper-step>
        </v-stepper-header>
      </v-stepper>

    </div>
</template>

<script>
    export default {
      name: "stepper1",

      data () {
        return {

        }
      },
      computed: {
        specialArchiveShow1 :function(){
      return this.$store.state.specialArchiveShow1
        },
        specialArchiveShow2 :function(){
          return this.$store.state.specialArchiveShow2
        },
        specialArchiveShow3 :function(){
          return this.$store.state.specialArchiveShow3
        },
        autoWidth () {
          //alert( this.$store.state.specialArchiveClientWidth1);
          return this.$store.state.specialArchiveClientWidth1 *0.95
        }
      }
    }
</script>

<style scoped>

</style>
