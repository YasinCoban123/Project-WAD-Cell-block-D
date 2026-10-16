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
  function addMaterial(name: string, quantity: number): boolean {
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return false
    }

    // als order bestaat, verhoog de aantal van besteld, in plaats van nieuwe object
    const existingMaterial = orderedMaterials.value.find((material) => material.name === name)

    if (existingMaterial) {
      existingMaterial.quantity += quantity
      return true
    }

    orderedMaterials.value.push({
      id: Date.now(),
      name,
      quantity,
    })
    return true
  }

  function deleteMaterial(id: number): void {
    orderedMaterials.value = orderedMaterials.value.filter((material) => material.id !== id)
  }

  function updateMaterial(id: number, quantity: number): boolean {
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return false
    }

    const material = orderedMaterials.value.find((item) => item.id === id)

    if (material) {
      material.quantity = quantity
      return true
    }

    return false
  }

  return {
    orderedMaterials,
    addMaterial,
    deleteMaterial,
    updateMaterial,
  }
}
