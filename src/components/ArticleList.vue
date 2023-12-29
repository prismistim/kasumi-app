<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import dayjs from 'dayjs'

const components = Object.keys(import.meta.glob('@/contents/2023/*.md')).sort((a, b) => {
  return dayjs(a.split('/').reverse()[0].slice(0, -3), 'MMDD').isBefore(
    dayjs(b.split('/').reverse()[0].slice(0, -3), 'MMDD')
  ) ? 1 : -1
}).map(
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
          <template v-if="current && current[index]">
            <a
              :href="`#${dayjs(current[index].frontmatter.date).format('YYYYMMDDHHmm')}`"
              class="date"
            >
              {{ dayjs(current[index].frontmatter.date).format('YYYY-MM-DD HH:mm') }}
            </a>
          </template>
          <component :is="item" ref="current"></component>
        </div>
      </div>
      <div v-if="index + 1 < components.length" class="divider"></div>
    </template>
  </div>
</template>
