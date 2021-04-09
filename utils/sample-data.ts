import { Entity } from '../interfaces'


export const entities: Entity[] = [
  {
    type: 'user',
    id: 'alice',
    name: 'alice',
    icon: 'http://aka.saintpillia.com/killme/icon/01_015.png',
    readme: `ほげほげ、アリスだよん`
  },
  {
    type: 'user',
    id: 'bob',
    name: 'bob',
    icon: 'http://aka.saintpillia.com/killme/icon/01_017.png',
    readme: `ほげほげ、ボブだよん`
  },
  {
    type: 'user',
    id: 'charlie',
    name: 'charlie',
    icon: 'http://aka.saintpillia.com/killme/icon/01_073.png',
    readme: `ほげほげ、チャーリーだよん`
  },
  {
    type: 'user',
    id: 'dave',
    name: 'dave',
    icon: 'http://aka.saintpillia.com/killme/icon/03_064.png',
    readme: `ほげほげ、デイブだよん`
  },
  {
    type: 'group',
    id: 'bunka',
    name: '文化部',
    icon: 'http://aka.saintpillia.com/killme/icon/07_003.png',
    readme: `ほげほげ、文化部だよん`,
    subgroups: [],
    users: [
      {
        type: 'user',
        id: 'alice',
        name: 'alice',
        icon: 'http://aka.saintpillia.com/killme/icon/01_015.png',
        readme: `ほげほげ、アリスだよん`
      },
      {
        type: 'user',
        id: 'bob',
        name: 'bob',
        icon: 'http://aka.saintpillia.com/killme/icon/01_017.png',
        readme: `ほげほげ、ボブだよん`
      }
    ]
  }
];
