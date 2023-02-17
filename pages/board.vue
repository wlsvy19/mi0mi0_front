<template>
  <div>
    <h5>Element UI Test...</h5>
    <el-radio v-model="radio" label="1">Option A</el-radio>
    <el-radio v-model="radio" label="2">Option B</el-radio>
    <br />
    <el-input v-model="input" placeholder="Please input"></el-input>
    <br />
    <br />
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">Click to upload</el-button>
      <div slot="tip" class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </el-upload>
    <br />
    <el-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      placeholder="Arbitrary time"
    >
    </el-time-picker>
    <el-time-picker
      v-model="value2"
      arrow-control
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      placeholder="Arbitrary time"
    >
    </el-time-picker>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>