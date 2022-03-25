<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>基础信息</span>
            </div>
          </template>
          <div class="info">
            <div class="info-image" @click="showDialog">
              <img :src="avatarImg"/>
              <span class="info-edit">
                                <el-icon><camera-filled/></el-icon>
                            </span>
            </div>
            <div class="info-name">{{ name }}</div>
            <div class="info-desc">不可能！我的代码怎么可能会有bug！</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>账户编辑</span>
            </div>
          </template>
          <el-form label-width="90px">
            <el-form-item label="用户名："> {{ name }}</el-form-item>
            <el-form-item label="旧密码：">
              <el-input v-model="form.old" type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码：">
              <el-input v-model="form.new" type="password"></el-input>
            </el-form-item>
            <el-form-item label="个人简介：">
              <el-input v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button plain type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog v-model="dialogVisible" title="裁剪图片" width="600px">
      <vue-cropper ref="cropper" :cropmove="cropImage" :ready="cropImage" :src="imgSrc" :zoom="cropImage"
                   style="width: 100%; height: 400px"></vue-cropper>

      <template #footer>
                <span class="dialog-footer">
                    <el-button class="crop-demo-btn" plain type="primary">选择图片
                        <input accept="image/*" class="crop-input" name="image" type="file" @change="setImage"/>
                    </el-button>
                    <el-button plain type="primary" @click="saveAvatar">上传并保存</el-button>
                </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import {reactive, ref} from "vue";
//@ts-ignore
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import avatar from "../assets/img/img.jpg";

const name = localStorage.getItem("ms_username") ?? "暂无姓名";
const form = reactive({
  old: "",
  new: "",
  desc: "不可能！我的代码怎么可能会有bug！",
});

const onSubmit = () => {
};
const avatarImg = ref(avatar);
const imgSrc = ref("");
const cropImg = ref("");
const dialogVisible = ref(false);
const cropper = ref(null);
const showDialog = () => {
  dialogVisible.value = true;
  imgSrc.value = avatarImg.value;
};

const setImage = (e: Event) => {
  //@ts-ignore
  const file = ((e.target)as HTMLInputElement).files[0];
  if (!file.type.includes("image/")) {
    return;
  }
  const reader = new FileReader();
  reader.onload = (event: Event) => {
    dialogVisible.value = true;
    //@ts-ignore
    imgSrc.value = ((event.target) as HTMLInputElement ).result;
    //@ts-ignore
    cropper.value && cropper.value.replace(((event.target) as HTMLInputElement ).result);
  };
  reader.readAsDataURL(file);
};

const cropImage = () => {
  //@ts-ignore
  cropImg.value = cropper.value!.getCroppedCanvas().toDataURL();
};

const saveAvatar = () => {
  avatarImg.value = cropImg.value;
  dialogVisible.value = false;
};
</script>


<style scoped>
.info {
  text-align: center;
  padding: 35px 0;
}

.info-image {
  position: relative;
  margin: auto;
  width: 100px;
  height: 100px;
  background: #f8f8f8;
  border: 1px solid #eee;
  border-radius: 50px;
  overflow: hidden;
}

.info-image img {
  width: 100%;
  height: 100%;
}

.info-edit {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-edit i {
  color: #eee;
  font-size: 25px;
}

.info-image:hover .info-edit {
  opacity: 1;
}

.info-name {
  margin: 15px 0 10px;
  font-size: 24px;
  font-weight: 500;
  color: #262626;
}

.crop-demo-btn {
  position: relative;
}

.crop-input {
  position: absolute;
  width: 100px;
  height: 40px;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
</style>