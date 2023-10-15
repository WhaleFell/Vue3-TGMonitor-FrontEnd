<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <RouterView></RouterView>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
