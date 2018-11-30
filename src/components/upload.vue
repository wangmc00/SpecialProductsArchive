<template>

  <div style="background-color: white;width:103rem" :style="{'width':autoWidth+'px','height':autoHeight+'px','margin-top':  2+'rem','margin-left':autoWidth*0.025+'px' }" v-show=showthis>

    <v-dialog v-model="dialog1" width="500">
      <v-card>
        <v-card-title class="headline primary white--text  "  primary-title>操作提示
        </v-card-title>
        <v-card-text primary style="margin-top: 50px;  text-align:center;height: 120px;font-size: 20px">上传过程中禁止操作!
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog1 = false">关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" width="500">
      <v-card>
        <v-card-title class="headline primary white--text  "  primary-title>操作提示
        </v-card-title>
        <v-card-text primary style="margin-top: 50px;  text-align:center;height: 120px;font-size: 20px">上传文件必须为.zip类型!
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog2 = false">关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      <div v-if=showAll>
        <div  style="height:1rem;width:5rem;background:#FFF;text-align:center" > </div>
        <div class="dropbox p-3"  @click="changeFn()" :style="{'width':autoWidth*0.35+'px','height':autoHeight*0.4+'px','margin-top':autoHeight*0.15+'px' }" style="height:15rem;width:25rem;background:#EDEDED;margin:auto;margin-top: 5rem;text-align:center" >
            <input id="files" ref="chaFile" style="display: none" type="file" @change="importFile()" />
            <img src="../assets/upload.png" :style="{'width':autoHeight*0.1+'px','margin-top':autoHeight*0.1+'px' }" style="width:4rem;margin-top:3rem" />
            <h1 class=" font-weight-light" style="font-size:1.5rem;font-family:'微软雅黑'">
               点击或拖拽上传zip文件
            </h1>
            <h1 class=" font-weight-light" style="font-size:1rem;font-family:'微软雅黑'">
                支持扩展名.zip
            </h1>

        </div>
        <div v-if="showPrise">
            <h1  class=" font-weight-light" :style="{'margin-left':autoWidth*0.325+'px'}" style="font-size:1.2rem;margin-top:0rem;">
                <span style="float: left" id="aaaaa" ref="aaaaa">{{message}}</span>
              <span style="float:right;color: #ff0000;margin-top: 0rem":style="{'margin-right':autoWidth*0.325+'px'}">
           <img @click="chaFile" src="../assets/cha1.jpg"   style="width:1.2rem;" /> </span>
            </h1>

        <v-progress-linear v-model="valueDeterminate" :style="{'width':autoWidth*0.35+'px','margin-left':autoWidth*0.325+'px'}" style="float: left; width: 25rem;margin:0 auto"

        ></v-progress-linear>
        </div>


        <div class="text-xs-center" style="margin-top: 8rem">
            <v-btn
              :style="{'width':autoWidth*0.05+'px','height':autoWidth*0.02+'px'}"
                    :loading="loading"
                    :disabled=disabled1
                    color="primary"
                    class="white--text"
                    @click.native="loader = 'loading'"
                    @click="upload()"
                    round

            >
                上传
            </v-btn>


        </div>
      </div>
      <div  v-else=showAll style="margin-left: 12rem;overflow-y:auto; max-height:5rem ">
        <v-treeview  v-model="tree" :open="open" open-all=true :items="items"  activatable item-key="name" style=" position:absolute;width: 30rem" >

          <template slot="prepend" slot-scope="{ item, open, leaf }">
            <div v-if="item.children==null">
              <img src="../assets/file.png" style="width:1.5rem;" />
            </div>
            <div v-else>
              <img src="../assets/folder.png"   style=" margin-left:0rem;width:1.5rem;height: 1.5rem;" @click="aa(item)"/>
              <img src="../assets/folder11.png"   style=" position:absolute;margin-top:-2rem;width:25rem;height: 1.8rem;" @click="aa(item)"/>
            </div>
          </template>


        </v-treeview>
      </div>

  </div>
</template>

<script>
    import axios from 'axios';
    var selectedFile;
    //import MenuIcon from "vue-material-design-icons/Menu.vue"

    //import Qs from 'qs'
    //import uploadButton from "./uploadButton";
    export default {
        name: 'upload',
        components: {
          //MenuIcon
            //uploadButton
        },
        data () {
          return {
           // aaa:48,
            disabled1:true,
            showthis:true,
            valueDeterminate: 0,
            showPrise: false,
            showAll: true,
            file: document.getElementById("file"),
            message: "",
            message_length:0,
            loader: null,
            loading: false,
            loading2: false,
            loading3: false,
            loading4: false,
            suss: 0,
            open: ['public'],
            files: {
              html: 'mdi-language-html5',
              js: 'mdi-nodejs',
              json: 'mdi-json',
              md: 'mdi-markdown',
              pdf: '../assets/upload.png',
              png: 'mdi-file-image',
              txt: 'mdi-file-document-outline',
              xls: 'mdi-file-excel'
            },
            tree: [],
            items: [],
            filename:"",
            uploadStatus:false,
          dialog1:false,
            dialog2:false


            //filename:""
          }
        },


        methods: {

            changeFn: function () {
                //alert("aa");
                // `this` 在方法里指向当前 Vue 实例
              if(this.uploadStatus==true)
              {
                //alert("上传过程中禁止操作");
                this.dialog1=true;
              }
              else {
                this.chaFile();
                files.click();
              }//this.showPrise=true;
                // `event` 是原生 DOM 事件

            },
          chaFile: function () {

            if(this.uploadStatus==true)
            {
              //alert("上传过程中禁止操作");
              this.dialog1=true;
            }
            else {
              this.$refs.chaFile.value = '';
              this.message = "";
              this.showPrise = false;
              this.disabled1 = true;
              //alert(this.$refs.aaaaa.offsetWidth);

            }

          },
            upload:function () {
              //alert("aaa");
              this.uploadStatus=true;
               //  selectedFile = document.getElementById("files").files[0];//获取读取的File对象
                let param = new FormData()  // 创建form对象
                param.append('file', selectedFile, selectedFile.name)  // 通过append向form对象添加数据
                param.append('chunk', '0') // 添加form表单中其他数据
                param.append('archivePersonnel', '111') // 添加form表单中其他数据
                 var config1 = {
                    onUploadProgress: progressEvent => {
                        this.valueDeterminate = (progressEvent.loaded / progressEvent.total * 80)
                        //this.progress = complete
                    }
                }
                // 添加请求头
                axios.post('http://192.168.20.7:8079/uploadThemeticProduct', param,config1)
                    .then(resp => {
                    //alert(resp.data.message);
                    this.suss=1;
                        this.valueDeterminate=100;
                        this.showAll=false;
                     // this.$store.show = false;
                      this.$store.commit('changeSpecialArchiveShow',1);
                      this.$store.commit('specialArchiveFileInfoChange',resp.data.data);
                      this.showthis=false;
                        for(var i=0;i<resp.data.data.directory.length;i++)
                        {
                          this.items.push({name:resp.data.data.directory[i].directoryName,children:[]});
                          for(var j=0;j<resp.data.data.directory[i].fileListInDirectory.length;j++)
                          {
                            this.items[i].children.push({name:resp.data.data.directory[i].fileListInDirectory[j]})
                          }
                        }
                      for(var i=0;i<resp.data.data.file.length;i++)
                      {

                        this.items.push({name:resp.data.data.file[i]});
                      }
                        //alert(this.items);
                      this.uploadStatus=false;
                }).catch(err => {             //
                  this.uploadStatus=false;
                    alert('请求失败：'+err.status+','+err.statusText);

                });


            },
          onDrag: function (e) {
            e.stopPropagation();
            e.preventDefault();
          },
          onDrop: function (e) {
            e.stopPropagation();
            e.preventDefault();
            e.stopPropagation();
            e.preventDefault();
            if(this.uploadStatus==true)
            {
              //alert("上传过程中禁止操作")
              this.dialog1=true;
            }
            else {
              this.chaFile();

              selectedFile = e.dataTransfer.files[0]

              //this.fileReader(selectedFile);
              if (selectedFile != null) {
                var filename = selectedFile.name;
                // alert(filename);

                var fileTyle = filename.substring(filename.lastIndexOf("."));

                if (fileTyle == ".zip") {
                  //alert(filename);
                  this.message = filename;
                  this.showPrise = true;
                  this.disabled1 = false;
                }
                else {
                  //alert("上传文件必须为zip类型")
                  this.dialog2=true;
                }
                // `event` 是原生 DOM 事件
              }
            }
          },
            importFile: function () {
            //alert("aa");
              //var selectedFile1=document.getElementById("files").files[0];

                 selectedFile = document.getElementById("files").files[0];//获取读取的File对象
              if(selectedFile!=null) {
               // alert("aa");
                var filename = selectedFile.name;
                var fileTyle = filename.substring(filename.lastIndexOf("."));

                if (fileTyle == ".zip") {
                  //alert(filename);
                  this.message = filename;
                  this.showPrise = true;
                  this.disabled1 = false;
                }
                else {
                  //alert("上传文件必须为zip类型")
                  this.dialog2=true;
                }
                // `event` 是原生 DOM 事件
              }

            },
          aa: function (a) {
             // alert(this.items);
            //alert( this.items.indexOf(a,0));
            var index=this.items.indexOf(a,0);
            this.$store.commit('specialInfoShowChange',index);
            //alert(a);
          }

        },
        watch: {
            loader () {
                const l = this.loader
                this[l] = !this[l]

                //setTimeout(() => (this[l] = false), 3000)

               // this.loader = null
            },
            suss:{
                handler(){
                    //alert("aa");
                    const l = this.loader
                    this[l] = !this[l]
                    this.loader = null

                }
            }
        },
      mounted: function () {
        var dropbox = document.querySelector('.dropbox');
        dropbox.addEventListener('dragenter', this.onDrag, false);
        dropbox.addEventListener('dragover', this.onDrag, false);
        dropbox.addEventListener('drop', this.onDrop, false);
      },
      computed: {
        autoTop () {
          //alert(this.$store.state.specialArchiveScrollTop1);
          //if(this.$store.state.specialArchiveScrollTop1>100)
         // {
           // this.aaa=54;
           // return this.$store.state.specialArchiveScrollTop1 +140;
         // }
         // else {
            //this.aaa=48;
            return this.$store.state.specialArchiveScrollTop1 + 140
        //  }
        },
        autoWidth () {
          //this.aaa=(this.$store.state.specialArchiveClientWidth1-1519)/175*(-1)-3.2;
          //alert(this.$store.state.specialArchiveClientWidth1);
          //alert((this.$store.state.specialArchiveClientWidth1-1519)/14.795+103);
          //return (this.$store.state.specialArchiveClientWidth1-1519)/14.795+103
          return this.$store.state.specialArchiveClientWidth1*0.95
        },
        autoHeight () {
          return this.$store.state.specialArchiveClientHeight1 -240;
        }
      }
    }
</script>

<style>
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
