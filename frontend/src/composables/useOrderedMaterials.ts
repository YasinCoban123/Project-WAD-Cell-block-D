import { ref, watch } from 'vue'

export interface OrderedMaterial {
  id: number
  name: string
  quantity: number
}

const storedMaterials = localStorage.getItem('orderedMaterials')
const orderedMaterials = ref<OrderedMaterial[]>(
  storedMaterials ? JSON.parse(storedMaterials) as OrderedMaterial[] : [],
)

watch(orderedMaterials, (latest) => {
  localStorage.setItem('orderedMaterials', JSON.stringify(latest))
}, { deep: true })

export function useOrderedMaterials() {
  function addMaterial(name: string, quantity: number): void {
    orderedMaterials.value.push({
      id: Date.now(),
      name,
      quantity,
    })
  }

  return {
    orderedMaterials,
    addMaterial,
  }
}
