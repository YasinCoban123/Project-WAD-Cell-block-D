import { ref } from 'vue'
import type { Material } from '../types/Material'
import acrylicImage from '../assets/img/acrylic.jpg'
import cardboardImage from '../assets/img/cardboard.jpg'
import filamentImage from '../assets/img/filemant.jpg'
import plywoodImage from '../assets/img/plywood.jpg'

const materials = ref<Material[]>([
  {
    id: 1,
    name: 'Filament',
    image: filamentImage,
    description: 'Filament for 3D printing projects.',
    unit: 'grams',
    stock: 12500,
  },
  {
    id: 2,
    name: 'Plywood',
    image: plywoodImage,
    description: 'Plywood sheets for projects.',
    unit: 'sheets',
    stock: 350,
  },
  {
    id: 3,
    name: 'Acrylic',
    image: acrylicImage,
    description: 'Acrylic sheets for projects.',
    unit: 'sheets',
    stock: 220,
  },
  {
    id: 4,
    name: 'Cardboard',
    image: cardboardImage,
    description: 'Cardboard sheets for projects.',
    unit: 'sheets',
    stock: 100,
  },
])

export function useMaterials() {
  function getMaterial(id: number): Material | undefined {
    return materials.value.find((material) => material.id === id)
  }

  return {
    materials,
    getMaterial,
  }
}
