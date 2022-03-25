<template>
  <section>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="mgb20" shadow="hover" style="height:252px;">
          <div class="user-info">
            <img alt class="user-avator" src="../assets/img/永恩.jpg"/>
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2019-11-01</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>东莞</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height:252px;">
          <template #header>
            <div class="clearfix">
              <span>语言详情</span>
            </div>
          </template>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress>
          JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
          CSS
          <el-progress :percentage="13.7"></el-progress>
          HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div class="grid-content grid-con-1">
                <el-icon :size="40">
                  <user-filled/>
                </el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div class="grid-content grid-con-2">
                <el-icon :size="40">
                  <comment/>
                </el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div class="grid-content grid-con-3">
                <el-icon :size="40">
                  <promotion/>
                </el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height:403px;" :body-style="{overflow:'auto',}">
          <template #header>
            <div class="clearfix">
              <span>待办事项</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="addTodo">添加</el-button>
            </div>
          </template>

          <el-table :data="todoList" :show-header="false" style="width:100%;">
            <el-table-column width="40">
              <template #default="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template #default="scope">
                <div :class="{ 'todo-item-del': scope.row.status,}" class="todo-item">
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template #default="scope">
                <el-icon :size="15">
                  <edit/>
                </el-icon>
                <el-icon :size="15" @click="deleteTodo" style="cursor: pointer">
                  <delete/>
                </el-icon>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div id="zhexian"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div id="bingtu"></div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";

type EChartsOption = echarts.EChartsOption;

const name = localStorage.getItem("ms_username");
const role = name === "admin" ? "超级管理员" : "普通用户";
const todoList = ref([
  {
    title: "今天要修复100个bug",
    status: false,
  },
  {
    title: "今天要修复100个bug",
    status: false,
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: false,
  },
  {
    title: "今天要修复100个bug",
    status: false,
  },
  {
    title: "今天要修复100个bug",
    status: true,
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: true,
  },
]);
const addTodo = () => {
    todoList.value.unshift({
      title: "今天要修复0个bug",
      status: false,
    },)
}
const deleteTodo=() => {
  todoList.value.splice(0,1)
}
const drawZhexian = () => {
  const chartDom = document.getElementById('zhexian')!;
  const myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  option && myChart.setOption(option);
}
const drawBingtu = () => {
  const chartDom = document.getElementById('bingtu')!;
  const myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          {value: 1048, name: 'Search Engine'},
          {value: 735, name: 'Direct'},
          {value: 580, name: 'Email'},
          {value: 484, name: 'Union Ads'},
          {value: 300, name: 'Video Ads'}
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  option && myChart.setOption(option);

}
onMounted(() => {
  drawZhexian()
  drawBingtu()
})
</script>

<style scoped>
#zhexian {
  height: 300px;
}

#bingtu {
  height: 300px;
}

.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
</style>