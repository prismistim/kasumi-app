<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import dayjs from 'dayjs'

const components = Object.keys(import.meta.glob('@/contents/2023/*.md')).map(
  (item) => {
    return defineAsyncComponent(
      () =>
        import(
          `../contents/2023/${item.split('/').reverse()[0].slice(0, -3)}.md`
        ),
    )
  },
)

const current = ref()
</script>

<template>
  <div class="article">
    <template v-for="(item, index) in components" :key="index">
      <div :id="`${index}`" class="card">
        <div class="card-body">
          <a v-if="current" :href="`#${index}`" class="font-title text-sm mb-1 transition hover:text-accent ease-in hover:cursor-pointer">
            {{ dayjs(current[0].frontmatter.date).format('YYYY-MM-DD HH:mm') }}
          </a>
          <component :is="item" ref="current"></component>
        </div>
      </div>
      <div v-if="index + 1 < components.length" class="divider"></div>
    </template>
  </div>
</template>
