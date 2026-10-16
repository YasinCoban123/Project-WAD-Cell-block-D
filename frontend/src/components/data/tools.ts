import type { Tool } from '@/types/ToolType.ts'

import sander from '../../assets/img/ColonelSander.png'
import calipers from '../../assets/img/IronMan.jpg'
import clamps from '../../assets/img/Trio.png'
import solderingIron from '../../assets/img/WtfIsDit.png'
import glueGun from '../../assets/img/LijmPewPew.webp'
import drill from '../../assets/img/Drill.avif'
import ltg from '../../assets/img/LTG.jpg'

export const defaultTools: Tool[] = [
  { id: 1, name: 'Sander', description: 'Schuurmachine', OnLoan: false, Condition: 'Goed', image: sander, uitlener: ''  },
  { id: 2, name: 'Calipers', description: 'Schuifmaat', OnLoan: false, Condition: 'Goed', image: calipers, uitlener: ''  },
  { id: 3, name: 'Clamps', description: 'Lijmklemmen', OnLoan: false, Condition: 'Goed', image: clamps, uitlener: ''  },
  { id: 4, name: 'Soldering Irons', description: 'Soldeerbouten', OnLoan: false, Condition: 'Goed', image: solderingIron, uitlener: ''  },
  { id: 5, name: 'Glue Gun', description: 'Lijmpistool', OnLoan: false, Condition: 'Goed', image: glueGun, uitlener: ''  },
  { id: 6, name: 'Drill', description: 'Boormachine', OnLoan: false, Condition: 'Goed', image: drill, uitlener: ''  },
  { id: 7, name: 'LTG', description: 'LTG', OnLoan: false, Condition: 'Goed', image: ltg, uitlener: ''  },
]