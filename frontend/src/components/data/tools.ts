import type { Tool } from '@/types/Tool.ts'

import sander from '../../assets/img/ColonelSander.png'
import calipers from '../../assets/img/IronMan.png'
import clamps from '../../assets/img/Trio.png'
import solderingIron from '../../assets/img/WtfIsDit.png'
import glueGun from '../../assets/img/LijmPewPew.png'
import drill from '../../assets/img/Drill.avif'
import ltg from '../../assets/img/LTG.png'

export const defaultTools: Tool[] = [
  { id: 1, name: 'Sander', description: 'Schuurmachine', Condition: 'Goed', image: sander},
  { id: 2, name: 'Calipers', description: 'Schuifmaat', Condition: 'Goed', image: calipers},
  { id: 3, name: 'Clamps', description: 'Lijmklemmen', Condition: 'Goed', image: clamps},
  { id: 4, name: 'Soldering Irons', description: 'Soldeerbouten', Condition: 'Goed', image: solderingIron},
  { id: 5, name: 'Glue Gun', description: 'Lijmpistool', Condition: 'Goed', image: glueGun},
  { id: 6, name: 'Drill', description: 'Boormachine', Condition: 'Goed', image: drill},
  { id: 7, name: 'LTG', description: 'Low Tier God is a Street Fighter 5 (SFV) player and YouTube streamer known for his rage and funny moments. He is universally hated by the SFV community, as well as the fighting game community in general. He has trash talked well-liked SFV professional players, such as Smug and Snake Eyez. Low Tier God is also hated for banning anyone in his chat who criticizes him, falsely copyright striking the videos of those who criticize him, and for his racist rants where he uses racial slurs against black people.', Condition: 'Goed', image: ltg},
]