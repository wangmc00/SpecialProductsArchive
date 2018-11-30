<template>
  <v-form ref="form" v-model="valid" >

    <v-dialog v-model="dialog1" width="500">
      <v-card>
        <v-card-title class="headline primary white--text  "  primary-title>操作提示
        </v-card-title>
        <v-card-text primary style="margin-top: 50px;  text-align:center;height: 120px;font-size: 20px">请完善必填项信息!
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
        <v-card-title class="headline primary white--text  "  primary-title>成功提示
        </v-card-title>
        <v-card-text primary style="margin-top: 50px;  text-align:center;height: 120px;font-size: 20px">提交成功!
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog2 = false">关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div v-show=!specialArchiveShow1 :style="{'width':autoWidth+'px','margin-top':  2+'rem','margin-left':autoWidth*0.025+'px','min-height':autoHeight+'px' }" style=" background:#FFF;text-align:center" >
      <div  style="width: 50rem;height:1rem;margin-left: 10rem;background:#FFF;text-align:center"></div>
      <div style="float: left">
      <v-toolbar color="white" class="elevation-1 mt-2" :style="{'width':autoWidth*0.45+'px','margin-left':autoWidth*0.03+'px'}"  style="margin-left: 2rem">
        <v-toolbar-title>专题基本信息</v-toolbar-title>
        <v-spacer ></v-spacer>
      </v-toolbar>
      <div class="elevation-1" :style="{'width':autoWidth*0.45+'px','margin-left':autoWidth*0.03+'px','height':autoHeight-200+'px'}"  style="overflow-x:hidden;overflow-y:auto;width:48rem;margin-left: 2rem">

        <div>
         <v-textarea name="input-7-1" label="请输入专题描述" :style="{'width':autoWidth*0.405+'px','margin-left':autoWidth*0.0225+'px','margin-top':25+'px'}" v-model="productDescription" value="" rows="1" style="margin-top: 0rem;"></v-textarea>
    </div>


        <div class="term-text2" :style="{'margin-left':autoWidth*0.4275-30+'px','width':autoWidth*0+'px'}" style="margin-top: 0rem" ><span style="color: #ff0000;">
          <v-autocomplete  style="z-index: 3; width:0.01rem;"  :items="itemsDeliveryObject" v-model="selectDeliveryObject1"
                                  label="" placeholder="Select..."  @mousedown="mousedownDeliveryObject1" @change="selectDeliveryObjectChange1" ></v-autocomplete> </span></div>
            <v-text-field v-model="selectDeliveryObject" :style="{'width':autoWidth*0.405+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-top: -1.75rem;z-index: 1; float: left" label="请输入或选择交付对象"></v-text-field>


        <div class="term-text2" :style="{'margin-left':autoWidth*0.4275-30+'px','width':autoWidth*0+'px'}" style="margin-top: 0rem" ><span style="color: #ff0000;">
           <v-autocomplete  style=" z-index: 3;width:0.01rem;" ref="country" :items="itemsServiceObject" v-model="selectServiceObject1"
                           label="Country" placeholder="Select..." required @mousedown="mousedownServiceObject1" @change="selectServiceObjectChange1" ></v-autocomplete> </span></div>
            <v-text-field v-model="selectServiceObject" :style="{'width':autoWidth*0.405+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-top: -1.75rem;z-index: 1; float: left" label="请输入或选择服务对象"></v-text-field>



            <v-menu :style="{'width':autoWidth*0.2025+'px','margin-left':autoWidth*0.0225+'px'}" style="float: left" v-model="menu2" :close-on-content-click="false" full-width max-width="290">
              <v-text-field slot="activator" v-model="date"  label="选择交付日期" readonly></v-text-field>
              <v-date-picker v-model="date" locale="zh-cn" @change="menu2 = false"></v-date-picker>
            </v-menu>
            <v-menu :style="{'width':autoWidth*0.2025+'px'}" style="float: left" ref="menu" :close-on-content-click="false" v-model="menu3" :nudge-right="40" :return-value.sync="time" lazy transition="scale-transition"
                    offset-y full-width max-width="290px" min-width="290px">
              <v-text-field slot="activator" v-model="time" label="选择交付时间" prepend-icon="access_time" readonly
              ></v-text-field>
              <v-time-picker v-if="menu3" v-model="time" full-width @change="$refs.menu.save(time)"></v-time-picker>
            </v-menu>


      <div style="margin-top: 0rem">
      <div class="term-text2" :style="{'margin-left':autoWidth*0.0125+'px','width':autoWidth*0.01+'px'}" style="" ><span style="color: #ff0000;">* </span></div>

              <v-combobox  :rule="rules" :style="{'width':autoWidth*0.405+'px','margin-left':autoWidth*0+'px'}" style="margin-top: 0rem;width:40rem;"  v-model="select" :items="items" label="选择一级行业" multiple chips @change="aa">
                <template slot="selection" slot-scope="data">
                  <v-chip  :selected="data.selected" :disabled="data.disabled" :key="JSON.stringify(data.item)" class="v-chip--select-multi"   @input="data.parent.selectItem(data.item)">
                    <v-avatar  class="accent white--text"  v-text="data.item.slice(0, 1).toUpperCase()"></v-avatar>
                    {{ data.item }}
                  </v-chip>
                </template>
              </v-combobox>

        <div v-show="nong" >
          <div class="term-text" :style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="color:#FFFFFF; font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/nong.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}" style="margin-top: 0rem" v-model="selectNong" :items="itemsNong" label="选择农业二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="lin" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/lin.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}" style="width:35.25rem;margin-top: 0rem" v-model="selectLin" :items="itemsLin" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="shui" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/shui.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectShui" :items="itemsShui" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="hai" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/hai.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectHai" :items="itemsHai" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="sheng" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/sheng.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectSheng" :items="itemsSheng" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="guo" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/guo.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectGuo" :items="itemsGuo" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="jiao" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/jiao.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectJiao" :items="itemsJiao" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="dian" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/dian.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectDian" :items="itemsDian" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="zhu" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/zhu.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectZhu" :items="itemsZhu" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="cheng" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/cheng.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectCheng" :items="itemsCheng" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="zi" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/zi.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectZi" :items="itemsZi" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="di" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/di.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectDi" :items="itemsDi" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="ye" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/ye.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectYe" :items="itemsYe" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="shi" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/shi.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectShi" :items="itemsShi" label="选择二级行业" multiple chips></v-combobox>
        </div>
        <div v-show="qi" >
          <div class="term-text":style="{'width':autoWidth*0.02+'px','margin-left':autoWidth*0.0225+'px'}" style="margin-left: 1.6rem;color:#FFFFFF;font-size:1.2rem;font-family:'微软雅黑'"><img src="../assets/qi.png" style="width:2.5rem;margin-top:0rem" /></div>
          <v-combobox :style="{'width':autoWidth*0.385+'px','margin-left':autoWidth*0+'px'}"style="width:35.25rem;margin-top: 0rem" v-model="selectQi" :items="itemsQi" item-value="itemsQi1" label="选择二级行业" multiple chips></v-combobox>
        </div>
      </div>
      </div>


      </div>
      <!--   <hr style="border:1px dashed #C0C0C0; height:1px;width: 50rem;margin-left: 8rem">
         <v-expansion-panel v-model="panel" expand>
           <v-expansion-panel-content
             v-for="(item,i) in this.$store.state.specialArchiveFileInfo.directory.length"
             :key="i"
           >
             <div slot="header">{{this.$store.state.specialArchiveFileInfo.directory[i].singleTempId}}</div>
             <v-card>
               <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
             </v-card>
           </v-expansion-panel-content>
         </v-expansion-panel>

         <div class="text-xs-center mb-3">{{ panel }}</div>
         -->
      <div v-show=!specialArchiveShow1 style="float: right">
      <v-toolbar  color="white" class="elevation-1 mt-2" :style="{'width':autoWidth*0.45+'px','margin-right':autoWidth*0.03+'px'}" style=" margin-top: 15rem;margin-left: 2rem">
        <v-toolbar-title>多期产品信息</v-toolbar-title>
        <v-spacer ></v-spacer>
      </v-toolbar>
    <v-expansion-panel  v-model="panel" expand v-if=infoShow :style="{'width':autoWidth*0.45+'px','margin-right':autoWidth*0.03+'px','height':autoHeight-200+'px'}"  style="overflow-x:hidden;overflow-y:auto;height: 21rem; margin-left:2rem;width:48rem">
        <v-expansion-panel-content v-for="(item,i) in $store.state.specialArchiveFileInfo.directory.length" :key="i">
          <div style="font-size: 20px" slot="header">{{$store.state.specialArchiveFileInfo.directory[i].directoryName}}</div>

          <!--
                   <v-expansion-panel  style="margin-top: 2rem;margin-left:8rem;width:50rem">
                     <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                       <div slot="header">{{$store.state.specialArchiveFileInfo.directory[i].singleTempId}}</div>
                    -->
          <div class="term-text2" :style="{'margin-left':autoWidth*0.0125+'px','width':autoWidth*0.01+'px'}" style="" ><span style="color: #ff0000;">* </span></div>

            <v-select  :items="itemsSatellite" v-model=Satellite[i] :rules="rules" label="选择采集卫星" :style="{'width':autoWidth*0.405+'px','margin-left':autoWidth*0+'px'}"></v-select>

          <div class="term-text2" :style="{'margin-left':autoWidth*0.0125+'px','width':autoWidth*0.01+'px'}" style="" ><span style="color: #ff0000;">* </span></div>

            <v-select :items="itemsSensor" :rules="rules" v-model=Sensor[i] label="选择传感器" :style="{'width':autoWidth*0.405+'px','margin-left':autoWidth*0+'px'}"></v-select>

          <div class="term-text2" :style="{'margin-left':autoWidth*0.0125+'px','width':autoWidth*0.01+'px'}" style="" ><span style="color: #ff0000;">* </span></div>


           <v-menu v-model=datemenu[i] :style="{'width':autoWidth*0.2025+'px','margin-left':autoWidth*0+'px'}" style="float: left"  :close-on-content-click="false" full-width max-width="290">
             <v-text-field slot="activator" :rules="rules" v-model=date1[i]  label="选择采集日期" readonly></v-text-field>
             <v-date-picker v-model=date1[i] locale="zh-cn" @input="datemenu[i] = false"></v-date-picker>
           </v-menu>
           <v-menu ref="menu1" :close-on-content-click="false" v-model=timemenu[i] :nudge-right="40" :return-value.sync=time1[i] lazy transition="scale-transition"
                   offset-y full-width max-width="290px" min-width="290px" :style="{'width':autoWidth*0.2025+'px'}" style="float: left">
             <v-text-field slot="activator" :rules="rules" v-model=time1[i] label="选择采集时间" prepend-icon="access_time" readonly
             ></v-text-field>
             <v-time-picker v-if=timemenu[i]   v-model=time1[i] full-width @change="$refs.menu1[i].save(time1[i])"></v-time-picker>
           </v-menu>

          <div class="term-text2" :style="{'margin-left':autoWidth*0.0125+'px','width':autoWidth*0.01+'px'}" style="" ><span style="color: #ff0000;">* </span></div>

                <v-text-field v-model=productionPersonnel[i] :rules="rules" :style="{'width':autoWidth*0.405+'px','margin-left':autoWidth*0+'px'}" label="生产人员"></v-text-field>
          <div class="term-text2" :style="{'margin-left':autoWidth*0.0125+'px','width':autoWidth*0.01+'px'}" style="" ><span style="color: #ff0000;">* </span></div>

          <v-menu v-model=datemenu1[i] :style="{'width':autoWidth*0.405+'px','margin-left':autoWidth*0+'px'}"  :close-on-content-click="false" full-width max-width="290">
            <v-text-field slot="activator" :rules="rules" v-model=date2[i]  label="选择生产日期" readonly></v-text-field>
            <v-date-picker v-model=date2[i] locale="zh-cn"@input="datemenu1[i] = false"></v-date-picker>
          </v-menu>


        </v-expansion-panel-content>
      </v-expansion-panel>



    </div>
      <div class="text-xs-center" style="margin-top: 2rem">
        <v-btn style="margin-top: 30px" :style="{'width':autoWidth*0.08+'px','height':autoWidth*0.02+'px'}" :disabled="dialog" :loading="dialog" class="white--text" color="primary" @click="submit" round>提交</v-btn>
        <v-dialog v-model="dialog" hide-overlay persistent width="500">
          <v-card color="primary" dark>
            <v-card-text>正在提交
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
  </div>

  </v-form>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "commonInfo",

      data () {
        return {

          valid:false, // 表单校验结果标记
          rules:[
            value => !!value || '此项为必填项.'
          ],
          aaaa:0,
          nong:false, lin:false, shui:false, hai:false, sheng:false,
          guo:false, jiao:false, dian:false, zhu:false, cheng:false,
          zi:false, di:false, ye:false, shi:false, qi:false,
          datemenu:[false,false,false,false,false],
          date1:[new Date().toISOString().substr(0, 10),new Date().toISOString().substr(0, 10),new Date().toISOString().substr(0, 10),new Date().toISOString().substr(0, 10)],
          datemenu1:[false,false,false,false,false],
          date2:[new Date().toISOString().substr(0, 10),new Date().toISOString().substr(0, 10),new Date().toISOString().substr(0, 10),new Date().toISOString().substr(0, 10)],
          Satellite:['','','','',''],
          Sensor:['','','','',''],
          productionPersonnel:['','','','',''],
          industryError:true,
          satelliteErrors:[false,true,false,false,false],
          timemenu:[false,false,false,false,false],
          time1:[null,null,null,null,null],
          menuaa:[false,false,false,false,false] ,
          select: [],
          specialArchiveFileInfo1:[],
          infoShow:false,
          panel: [false],
          selectNong: [],selectLin: [],selectShui: [],selectHai: [],selectSheng: [],
          selectGuo: [],selectJiao: [],selectDian: [],selectZhu: [],selectCheng: [],
          selectZi: [],selectDi: [],selectYe: [],selectShi: [],selectQi: [],
          items: ['农业', '林业', '水利', '海洋', '生态环保', '国土', '交通', '电力', '住建', '城市', '自然灾害', '地形地貌', '夜光', '视频', '其他行业',],
          itemsNong: ['农业资源调查', '作物长势', '墒情监测/旱情评价', '农业病虫害', '作物品质', '农业气象', '农业灾害', '作物估产', '农业工程设施', '农业生态环境', '其他'],
          itemsLin: ['森林类型提取', '森林生物量/碳储量/蓄积量估算', '森林火灾防控与预警', '森林病虫害防治', '野生动植物生境适宜性评价', '自然保护区', '其他'],
          itemsShui: ['地表水资源', '水质检测', '水土保持', '水深库容', '航道提取', '灌区', '水利设施', '其他'],
          itemsHai: ['海洋水色检测', '海洋灾害监测', '海水渔业检测', '海上目标检测', '海岛海岸带检测', '其他'],
          itemsSheng: ['水质检测', '大气气溶胶光学厚度监测', '生态环境评价', '荒漠化监测', '秸秆焚烧监测', '其他'],
          itemsGuo: ['土地利用分类', '土地督察与执法', '矿产资源调查', '地质灾害', '其他'],
          itemsJiao: ['道路规划', '路网检测', '道路设施检测', '道路灾害监测', '航道环境监测', '机场规划建设', '其他'],
          itemsDian: ['电网工程规划设施', '电网工程建筑施工', '运行监测', '其他'],
          itemsZhu: ['变化检测', '违法建筑执法', '违法建筑建筑执法', '特定目标识别', '其他'],
          itemsCheng: ['城市规划', '园林绿地', '其他'],
          itemsZi: ['地震', '火灾', '洪涝', '干旱', '冰雹', '其他'],
          itemsDi: ['数字表面模型', '数字高程模型', '其他'],
          itemsYe: ['灯光色彩分类', '灯光强度分级', '城市住房空置率估算', '城市功能区划分', '城市灯光发展指数', '其他'],
          itemsShi: ['动目标检测', '其他'],
          itemsQi: ['海关', '安全', '其他'],
          itemsQi1: [1,2,3],
          itemsSatellite:[ 'JL101A','JL103B','JL104B','JL105B','JL106B','JL107B','JL108B'],
          itemsSensor:['A型','B型','C型'],
          selectDeliveryObject:'',
          selectDeliveryObject1:'',
          selectServiceObject:'',
          selectServiceObject1:'',
          itemsDeliveryObject:[],
          itemsDeliveryObject1:[],
          itemsServiceObject:[],
          itemsServiceObject1:[],
          newArr:[],
          newArr1:[],
          date: new Date().toISOString().substr(0, 10),
          menu11: false,
          menu2: false,
          time: null,
          menu3: false,
          menu4: false,
          dialog: false,
          productDescription:'',
          dialog1: false,
          dialog2: false
        }
        },
      mounted:function(){
        this.getClientName();
        this.getDeliverName();
      },
    methods: {
          getClientName:function(){
            axios.get('http://192.168.20.7:8079/getClientNameList', {
              params: {
                clientName: ""
              }
            })
              .then( response => {
                //alert(response.data.data);
                this.itemsServiceObject = response.data.data;
                //alert(this.itemsServiceObject);
                this.itemsServiceObject1 = response.data.data;
               // alert(this.itemsServiceObject1);

              }).catch(function (error) {
                alert(error);
              });
          },
      getDeliverName:function(){
        axios.get('http://192.168.20.7:8079/getDeliverNameList', {
          params: {
            deliverName: ""
          }
        })
          .then (response=> {

            //alert(response.data.data);
           // aaa=response.data.data;
            //alert(aaa);
            this.itemsDeliveryObject=response.data.data;
            //alert(this.itemsDeliveryObject);
            this.itemsDeliveryObject1=response.data.data;
            //alert(this.itemsDeliveryObject1);
            //alert(itemsDeliveryObject1);
          })
          .catch(function (error) {
            alert(error);
          });
      },
      mousedownDeliveryObject1:function()
      {//alert("aa");
        if(this.selectDeliveryObject!='') {
          this.itemsDeliveryObject = [];
          this.itemsDeliveryObject = this.itemsDeliveryObject1;
          this.newArr = this.itemsDeliveryObject.filter(item => item.indexOf(this.selectDeliveryObject) >= 0);
          if (this.newArr.length != 0) {
            this.itemsDeliveryObject = this.newArr;
          }
          else {
            this.itemsDeliveryObject = [];
          }
        }
        else{ this.itemsDeliveryObject = this.itemsDeliveryObject1;

        }
      },
      selectDeliveryObjectChange1:function()
      {
        //alert("dd");
        //alert("aa");
        this.selectDeliveryObject= this.selectDeliveryObject1;
        //this.itemsDeliveryObject= [];
      },
      mousedownServiceObject1:function()
      {
        if(this.selectServiceObject!='') {
          this.itemsServiceObject = [];
          this.itemsServiceObject = this.itemsServiceObject1;
          this.newArr1 = this.itemsServiceObject.filter(item => item.indexOf(this.selectServiceObject) >= 0);
          if (this.newArr1.length != 0) {
            this.itemsServiceObject = this.newArr1;
          }
          else {
            this.itemsServiceObject = [];
          }
        }
        else{ this.itemsServiceObject = this.itemsServiceObject1;

        }
      },

      selectServiceObjectChange1:function()
      {
        this.selectServiceObject= this.selectServiceObject1;
        //this.itemsServiceObject= [];
      },

        aa: function () {

          //this.select.contains("农业")
          //alert(this.select.indexOf("农业"));
          //alert(this.$store.state.specialArchiveFileInfo.directory.length);
          //alert("aa");

          if(this.select.indexOf("农业")!=-1) {this.nong=true;} else {this.nong=false;}
          if(this.select.indexOf("林业")!=-1) {this.lin=true;} else {this.lin=false;}
          if(this.select.indexOf("水利")!=-1) {this.shui=true;} else {this.shui=false;}
          if(this.select.indexOf("海洋")!=-1) {this.hai=true;} else {this.hai=false;}
          if(this.select.indexOf("生态环保")!=-1) {this.sheng=true;} else {this.sheng=false;}
          if(this.select.indexOf("国土")!=-1) {this.guo=true;} else {this.guo=false;}
          if(this.select.indexOf("交通")!=-1) {this.jiao=true;} else {this.jiao=false;}
          if(this.select.indexOf("电力")!=-1) {this.dian=true;} else {this.dian=false;}
          if(this.select.indexOf("住建")!=-1) {this.zhu=true;} else {this.zhu=false;}
          if(this.select.indexOf("城市")!=-1) {this.cheng=true;} else {this.cheng=false;}
          if(this.select.indexOf("自然灾害")!=-1) {this.zi=true;} else {this.zi=false;}
          if(this.select.indexOf("地形地貌")!=-1) {this.di=true;} else {this.di=false;}
          if(this.select.indexOf("夜光")!=-1) {this.ye=true;} else {this.ye=false;}
          if(this.select.indexOf("视频")!=-1) {this.shi=true;} else {this.shi=false;}
          if(this.select.indexOf("其他行业")!=-1) {this.qi=true;} else {this.qi=false;}
          //alert(this.date1[1]);
          //alert(this.$store.state.specialArchiveFileInfo.directory);


        },
      submit:function () {

if(this.select=="")
{
  this.valid=false;
}
       // alert(this.valid);
        if(this.valid==true){

          this.$store.commit('changeSpecialArchiveShow',2);
        this.dialog = true;
        //alert(this.productDescription);
        var industry= [];
        if(this.nong==true) {
          if (this.selectNong.length != 0) {
            for (var i = 0; i < this.selectNong.length; i++) {
              switch (this.selectNong[i]) {
                case "农业资源调查":
                  industry.push({level1: 1, level2: 1})
                  break;
                case "作物长势":
                  industry.push({level1: 1, level2: 2})
                  break;
                case "墒情监测/旱情评价":
                  industry.push({level1: 1, level2: 3})
                  break;
                case "农业病虫害":
                  industry.push({level1: 1, level2: 4})
                  break;
                case "作物品质":
                  industry.push({level1: 1, level2: 5})
                  break;
                case "农业气象":
                  industry.push({level1: 1, level2: 6})
                  break;
                case "农业灾害":
                  industry.push({level1: 1, level2: 7})
                  break;
                case "作物估产":
                  industry.push({level1: 1, level2: 8})
                  break;
                case "农业工程设施":
                  industry.push({level1: 1, level2: 9})
                  break;
                case "农业生态环境":
                  industry.push({level1: 1, level2: 10})
                  break;
                case "其他":
                  industry.push({level1: 1, level2: 11})
                  break;
              }
            }
          }
          else{ industry.push({level1: 1, level2: 0})}
        }
        if(this.lin==true)
        {
        if(this.selectLin.length!=0)
        {
          for(var i=0;i<this.selectLin.length;i++)
          {
            switch (this.selectLin[i])
            {
              case "森林类型提取":
                industry.push({		level1: 2, level2: 1})
                break;
              case "森林生物量/碳储量/蓄积量估算":
                industry.push({		level1:2, level2: 2})
                break;
              case "森林火灾防控与预警":
                industry.push({		level1:2, level2: 3})
                break;
              case "森林病虫害防治":
                industry.push({		level1: 2, level2: 4})
                break;
              case "野生动植物生境适宜性评价":
                industry.push({		level1:2, level2: 5})
                break;
              case "自然保护区":
                industry.push({		level1:2, level2: 6})
                break;
              case "其他":
                industry.push({		level1:2, level2: 7})
                break;
            }
          }
        }

        else{ industry.push({level1: 2, level2: 0})}
        }
        if(this.shui==true)
        {
        if(this.selectShui.length!=0)
        {
          for(var i=0;i<this.selectShui.length;i++)
          {
            switch (this.selectShui[i])
            {
              case "地表水资源":
                industry.push({		level1: 3, level2: 1})
                break;
              case "水质检测":
                industry.push({		level1:3, level2: 2})
                break;
              case "水土保持":
                industry.push({		level1:3, level2: 3})
                break;
              case "水深库容":
                industry.push({		level1: 3, level2: 4})
                break;
              case "航道提取":
                industry.push({		level1:3, level2: 5})
                break;
              case "灌区":
                industry.push({		level1:3, level2: 6})
                break;
              case "水利设施":
                industry.push({		level1:3, level2: 7})
                break;
              case "其他":
                industry.push({		level1:3, level2: 8})
                break;
            }
          }
        }
        else{ industry.push({level1: 3, level2: 0})}
        }
          if(this.hai==true)
          {
        if(this.selectHai.length!=0)
        {
          for(var i=0;i<this.selectHai.length;i++)
          {
            switch (this.selectHai[i])
            {
              case "海洋水色检测":
                industry.push({		level1: 4, level2: 1})
                break;
              case "海洋灾害检测":
                industry.push({		level1: 4, level2: 2})
                break;
              case "海洋渔业检测":
                industry.push({		level1: 4, level2: 3})
                break;
              case "海洋目标检测":
                industry.push({		level1: 4, level2: 4})
                break;
              case "海岛海岸带监测":
                industry.push({		level1: 4, level2: 5})
                break;
              case "其他":
                industry.push({		level1: 4, level2: 6})
                break;
            }
          }
        }
        else{ industry.push({level1: 4, level2: 0})}
          }
          if(this.sheng==true)
          {
        if(this.selectSheng.length!=0)
        {
          for(var i=0;i<this.selectSheng.length;i++)
          {
            switch (this.selectSheng[i])
            {
              case "水质检测":
                industry.push({		level1: 5, level2: 1})
                break;
              case "大气气溶胶光学厚度监测":
                industry.push({		level1: 5, level2: 2})
                break;
              case "生态环境评价":
                industry.push({		level1: 5, level2: 3})
                break;
              case "荒漠化监测":
                industry.push({		level1: 5, level2: 4})
                break;
              case "秸秆焚烧检测":
                industry.push({		level1: 5, level2: 5})
                break;
              case "其他":
                industry.push({		level1: 5, level2: 6})
                break;
            }
          }
        }
        else{ industry.push({level1: 5, level2: 0})}
          }
          if(this.guo==true)
          {
        if(this.selectGuo.length!=0)
        {
          for(var i=0;i<this.selectGuo.length;i++)
          {
            switch (this.selectGuo[i])
            {
              case "土地利用分类":
                industry.push({		level1: 6, level2: 1})
                break;
              case "土地督察与执法":
                industry.push({		level1: 6, level2: 2})
                break;
              case "矿产资源调查":
                industry.push({		level1: 6, level2: 3})
                break;
              case "地质灾害":
                industry.push({		level1: 6, level2: 4})
                break;
              case "其他":
                industry.push({		level1: 6, level2: 5})
                break;
            }
          }
        }
        else{ industry.push({level1: 6, level2: 0})}
          }
          if(this.jiao==true)
          {
        if(this.selectJiao.length!=0)
        {
          for(var i=0;i<this.selectJiao.length;i++)
          {
            switch (this.selectJiao[i])
            {
              case "道路规划":
                industry.push({		level1: 7, level2: 1})
                break;
              case "路网检测":
                industry.push({		level1: 7, level2: 2})
                break;
              case "道路设施检测":
                industry.push({		level1: 7, level2: 3})
                break;
              case "道路灾害监测":
                industry.push({		level1: 7, level2: 4})
                break;
              case "航道环境检测":
                industry.push({		level1: 7, level2: 5})
                break;
              case "机场规划建设":
                industry.push({		level1: 7, level2: 6})
                break;
              case "其他":
                industry.push({		level1: 7, level2: 7})
                break;
            }
          }
        }
        else{ industry.push({level1: 7, level2: 0})}
          }
          if(this.dian==true)
          {
        if(this.selectDian.length!=0)
        {
          for(var i=0;i<this.selectDian.length;i++)
          {
            switch (this.selectDian[i])
            {
              case "电网工程规划设计":
                industry.push({		level1: 8, level2: 1})
                break;
              case "电网工程建设施工":
                industry.push({		level1:8, level2: 2})
                break;
              case "运行监测":
                industry.push({		level1: 8, level2: 3})
                break;
              case "其他":
                industry.push({		level1: 8, level2: 4})
                break;
            }
          }
        }
        else{ industry.push({level1: 8, level2: 0})}
          }
          if(this.zhu==true)
          {
        if(this.selectZhu.length!=0)
        {
          for(var i=0;i<this.selectZhu.length;i++)
          {
            switch (this.selectZhu[i])
            {
              case "变化检测":
                industry.push({		level1: 9, level2: 1})
                break;
              case "违法建筑执法":
                industry.push({		level1:9, level2: 2})
                break;
              case "建筑特征提取":
                industry.push({		level1: 9, level2: 3})
                break;
              case "特定目标识别":
                industry.push({		level1: 9, level2: 4})
                break;
              case "其他":
                industry.push({		level1: 9, level2: 5})
                break;
            }
          }
        }
        else{ industry.push({level1: 9, level2: 0})}
          }
          if(this.cheng==true)
          {
        if(this.selectCheng.length!=0)
        {
          for(var i=0;i<this.selectCheng.length;i++)
          {
            switch (this.selectCheng[i])
            {
              case "城市规划":
                industry.push({		level1: 10, level2: 1})
                break;
              case "园林绿地":
                industry.push({		level1:10, level2: 2})
                break;
              case "其他":
                industry.push({		level1: 10, level2: 3})
                break;
            }
          }
        }
        else{ industry.push({level1: 10, level2: 0})}
          }
          if(this.zi==true)
          {
        if(this.selectZi.length!=0)
        {
          for(var i=0;i<this.selectZi.length;i++)
          {
            switch (this.selectZi[i])
            {
              case "地震":
                industry.push({		level1: 11, level2: 1})
                break;
              case "火灾":
                industry.push({		level1:11, level2: 2})
                break;
              case "洪涝":
                industry.push({		level1: 11, level2: 3})
                break;
              case "干旱":
                industry.push({		level1: 11, level2: 4})
                break;
              case "冰雹":
                industry.push({		level1:11, level2: 5})
                break;
              case "其他":
                industry.push({		level1: 11, level2: 6})
                break;
            }
          }
        }
        else{ industry.push({level1: 11, level2: 0})}
          }
          if(this.di==true)
          {
        if(this.selectDi.length!=0)
        {
          for(var i=0;i<this.selectDi.length;i++)
          {
            switch (this.selectDi[i])
            {
              case "数字表面模型":
                industry.push({		level1: 12, level2: 1})
                break;
              case "数字高程模型":
                industry.push({		level1:12, level2: 2})
                break;
            }
          }
        }
        else{ industry.push({level1: 12, level2: 0})}
          }
          if(this.ye==true)
          {
        if(this.selectYe.length!=0)
        {
          for(var i=0;i<this.selectYe.length;i++)
          {
            switch (this.selectYe[i])
            {
              case "灯光色彩分类":
                industry.push({		level1: 13, level2: 1})
                break;
              case "灯光强度分级":
                industry.push({		level1:13, level2: 2})
                break;
              case "城市住房空置率估算":
                industry.push({		level1: 13, level2: 3})
                break;
              case "城市功能区划分":
                industry.push({		level1:13, level2: 4})
                break;
              case "城市灯光发展指数":
                industry.push({		level1: 13, level2: 5})
                break;
              case "其他":
                industry.push({		level1:13, level2: 6})
                break;
            }
          }
        }
        else{ industry.push({level1: 13, level2: 0})}
          }
          if(this.shi==true)
          {
        if(this.selectShi.length!=0)
        {
          for(var i=0;i<this.selectShi.length;i++)
          {
            switch (this.selectShi[i])
            {
              case "动目标检测":
                industry.push({		level1: 14, level2: 1})
                break;
              case "其他":
                industry.push({		level1:14, level2: 2})
                break;
            }
          }
        }
        else{ industry.push({level1: 14, level2: 0})}
          }
          if(this.qi==true) {
            if (this.selectQi.length != 0) {
              for (var i = 0; i < this.selectQi.length; i++) {
                switch (this.selectQi[i]) {
                  case "海关":
                    industry.push({level1: 15, level2: 1})
                    break;
                  case "安全":
                    industry.push({level1: 15, level2: 2})
                    break;
                  case "其他":
                    industry.push({level1: 15, level2: 3})
                    break;
                }
              }
            }
          }
        var singlePeriodProductInfo=[];
        //alert(this.panel);
        for(var i=0;i<this.$store.state.specialArchiveFileInfo.directory.length;i++)
        {
         singlePeriodProductInfo.push({singleTempId:this.$store.state.specialArchiveFileInfo.directory[i].singleTempId,
                                       singleName:this.$store.state.specialArchiveFileInfo.directory[i].directoryName,
                                       satellite:this.Satellite[i],
                                       sensor:this.Sensor[i],
                                       imagingTime:this.date1[i]+'T'+this.time1[i]+':00.000+0000',
                                       producer:this.productionPersonnel[i],
                                       produceTime:this.date2[i]+'T00:00:00.000+0000'})
        }
        var paramData={

          tempId:this.$store.state.specialArchiveFileInfo.tempId,
          productDescription:this.productDescription,
          industry:industry,
          deliverTime:this.date+'T'+this.time+':00.000+0000',
          clientName:this.selectDeliveryObject,
          deliverName:this.selectServiceObject,
          singlePeriodProductInfo:singlePeriodProductInfo

        }

       // var selectedFile = document.getElementById("files").files[0];//获取读取的File对象
        let param = new URLSearchParams(); // 创建form对象
        param.append('json', JSON.stringify(paramData))  // 通过append向form对象添加数据

        // 添加请求头

        axios.post('http://192.168.20.7:8079/commitThemeticProductInfo', param)

          .then(resp => {
            //alert(resp.data.message);
            this.dialog = false;
           // alert("提交成功");
            this.dialog2=true;
            //alert("跳转到详情");
            //alert(this.items);

          }).catch(err => {             //
          alert('请求失败：'+err.status+','+err.statusText);
          this.dialog = false;
        });



        //var productDescription= this.input-7-1.


      }
      else
        {this.dialog1=true};
      }
      },
      computed: {
      specialArchiveShow1 :function(){
        return this.$store.state.specialArchiveShow1
      },
        specialArchiveFileInfo: function () {

          if(this.$store.state.specialArchiveFileInfo.directory!=null)
          {
            //alert("a");
            this.specialArchiveFileInfo1= this.$store.state.specialArchiveFileInfo;
            //alert(specialArchiveFileInfo1.)
            this.infoShow=true;}

        },
        autoWidth () {
        //alert(this.$store.state.specialArchiveClientWidth1 *0.95);
          return this.$store.state.specialArchiveClientWidth1 *0.95
        },
        autoHeight () {
          return this.$store.state.specialArchiveClientHeight1 -240;
        },
        specialArchiveInfoShowIndex:function () {

        return this.$store.state.specialArchiveInfoShowIndex;

        }
      },
      watch: {
        specialArchiveFileInfo:{handler(){
            //alert("aa");

           // alert("b");
            this.specialArchiveFileInfo=this.$store.state.specialArchiveFileInfo.directory;
            //alert(this.specialArchiveFileInfo.length);
            this.infoShow=true;
            //alert("aa");
          }
        },
        specialArchiveInfoShowIndex: {
          handler () {
            //alert("aa");

            // alert(this.$store.state.specialArchiveInfoShowIndex);
            this.panel = [...Array(this.$store.state.specialArchiveFileInfo.directory.length)];
            this.panel[this.$store.state.specialArchiveInfoShowIndex] = true;
            //this.specialArchiveFileInfo=this.$store.state.specialArchiveFileInfo.directory;
            //alert(this.specialArchiveFileInfo.length);
            //this.infoShow=true;
            //alert("aa");
          }
        },
          dialog: {handler() {
            //alert("bb");
            //if (!val) return
            //setTimeout(() => (this.dialog = false), 4000)
          }
        }
      }
    }
</script>

<style scoped>
  .term-ipt {
    float: left;
    margin-top: 1.5rem;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    width: 28rem;
    height:2rem;
    text-indent: 0.5rem;
  }
  .term-text{
    float: left;
    clear:left;
    margin:1rem 0 0 1rem;
    width: 7.125rem;
    height:2rem;
    line-height:1.8rem;
  }
  .term-text1{
    float: left;
    clear:left;
    margin:1rem 0 0 1rem;
    width: 1.125rem;
    height:2rem;
    line-height:1.8rem;
  }
  .term-text2{
    float: left;
    clear:left;
    margin:1rem 0 0 1rem;
    width: 1.5rem;
    height:2rem;
    line-height:1.8rem;
  }
</style>
