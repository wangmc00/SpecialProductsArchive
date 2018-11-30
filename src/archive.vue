<template>
    <v-app style="background:#F0F2F5">
        <v-toolbar app style=" height:1.5rem;margin-top: 4.6rem">
            <v-toolbar-title  style="height:2rem;margin-top: -3.5rem">
                <span class="font-weight-dark" style="font-size: 1rem" >产品归档  /  </span>
                <span class="font-weight-dark" style="font-size: 1rem">专题产品归档</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-btn
               flat
               href="https://github.com/vuetifyjs/vuetify/releases/latest"
               target="_blank"
             >
               <span class="mr-2">Latest Release</span>
               <v-icon>open_in_new</v-icon>
             </v-btn>
             -->




        <!--  <v-content>
            <HelloWorld/>
          </v-content>
       -->

        </v-toolbar>
            <stepper1/>


      <div >

            <div stlye="float:left" >
                <upload/>

            </div>
            <div stlye="float:bottom">
                <commonInfo/>
            </div>




      </div>

    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import stepper1 from './components/stepper1'
    import upload from './components/upload'
    import CommonInfo from "./components/commonInfo";


    export default {
        name: 'App',
        components: {

            CommonInfo,
            HelloWorld,
            stepper1,
            upload

        },
        data () {
            return {
                //
            }
        },
      mounted () {
        window.addEventListener('scroll', this.handleScroll)
      },
      methods: {
        handleScroll () {
          this.$store.commit('setspecialArchiveScrollTop1', window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
        }
      },
      destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>

<style scoped>

</style>
