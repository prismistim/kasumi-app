<script setup lang="ts">
import { onMounted } from 'vue'
import ArticleList from '@/components/ArticleList.vue'

onMounted(() => {
  try {
    Typekit.load({ async: true })
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <div class="container max-w-[800px] mx-auto pt-6">
    <div class="text-lg text-center font-head">
      blog.snowsphere.net
    </div>
    <ArticleList></ArticleList>
  </div>
</template>
