<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <el-icon>
            <tickets/>
          </el-icon>
          基础表格
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-select v-model="query.address" class="handle-select mr10" placeholder="地址">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input v-model="query.name" class="handle-input mr10" placeholder="用户名"></el-input>
        <el-button type="primary" @click="handleSearch" style="background-color:deepskyblue;">搜索</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData" border class="table" header-cell-class-name="table-header">
        <el-table-column align="center" label="ID" prop="id" width="55"></el-table-column>
        <el-table-column label="用户名" prop="name"></el-table-column>
        <el-table-column label="账户余额">
          <template #default="scope">￥{{ scope.row.money }}</template>
        </el-table-column>
        <el-table-column align="center" label="头像(查看大图)">
          <template #default="scope">
            <el-image :preview-src-list="[scope.row.thumb]" :src="scope.row.thumb" class="table-td-thumb">
            </el-image>
          </template>
        </el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
        <el-table-column align="center" label="状态">
          <template #default="scope">
            <el-tag :type="
                                scope.row.state === '成功'
                                    ? 'success'
                                    : scope.row.state === '失败'
                                    ? 'danger'
                                    : ''
                            ">{{ scope.row.state }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="注册时间" prop="date"></el-table-column>
        <el-table-column align="center" label="操作" width="180">
          <template #default="scope">
            <el-button icon="el-icon-edit" type="text" @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button class="red" icon="el-icon-delete" type="text"
                       @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination :current-page="query.pageIndex" :page-size="query.pageSize" :total="pageTotal"
                       background layout="total, prev, pager, next"
                       @current-change="handlePageChange"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {ref} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";
import {fetchData} from "@/api";
import type {RootObject, RootObjectList} from "@/types";

const query = ref({
  address: "",
  name: "",
  pageIndex: 1,
  pageSize: 10,
});
const tableData = ref<RootObjectList[]>();
const pageTotal = ref<number>(0);
// 获取表格数据
const getData = () => {
  //@ts-ignore
  fetchData(query.value).then((res: RootObject) => {
    tableData.value = res.list;
    pageTotal.value = res.pageTotal || 50;
  });
};
getData();

// 查询操作
const handleSearch = () => {
  query.value.pageIndex = 1;
  getData();
};


// 分页导航
const handlePageChange = (val: number) => {
  query.value.pageIndex = val;
  getData();
};

// 删除操作
const handleDelete = (index: number,row:RootObject) => {
  // 二次确认删除
  ElMessageBox.confirm("确定要删除吗？", "提示", {
    type: "warning",
  }).then(() => {
    tableData.value && tableData.value!.length > 0 && tableData.value.splice(index, 1) && ElMessage.success("删除成功")
  }).catch(() => {
  });
};

// 表格编辑时弹窗和保存
const editVisible = ref(false);
let form = ref({
  name: "",
  address: "",
});
let idx = -1;
const handleEdit = (index: number, row: RootObject) => {
  idx = index;
  Object.keys(form).forEach((item) => {
    form[item] = row[item];
  });
  editVisible.value = true;
};
const saveEdit = () => {
  editVisible.value = false;
  ElMessage.success(`修改第 ${idx + 1} 行成功`);
  Object.keys(form).forEach((item) => {
    tableData.value![idx][item] = form[item];
  });
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}

.table {
  width: 100%;
  font-size: 14px;
}

.red {
  color: #ff0000;
}

.mr10 {
  margin-right: 10px;
}

.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>