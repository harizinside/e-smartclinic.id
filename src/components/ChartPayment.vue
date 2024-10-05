<template>
  <div>
    <div class="pt-4">
      <div class="border p-4 rounded-lg">
        <canvas ref="chartRef" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'
// Import necessary components for both bar and line charts
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement, 
  PointElement, 
  Title, 
  Tooltip, 
  Legend, 
  BarController, 
  LineController 
} from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement, 
  PointElement, 
  Title, 
  Tooltip, 
  Legend, 
  BarController, 
  LineController
)

interface ChartProps {
  type: 'bar' | 'line'; 
  data: ChartData;
  options?: ChartOptions;
}

const props = defineProps<ChartProps>()

const chartRef = ref<HTMLCanvasElement | null>(null)
let chartInstance: ChartJS | null = null

onMounted(() => {
  if (chartRef.value) {
    chartInstance = new ChartJS(chartRef.value, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: props.type as any, 
      data: props.data,
      options: props.options
    })
  }
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<style></style>
