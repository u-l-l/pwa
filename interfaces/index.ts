// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Entity = User | Group;

export type User = {
  type: 'user',
  id: string,
  name: string,
  icon: string,
  readme: string
}

export type Group = {
  type: 'group',
  id: string,
  name: string,
  icon: string,
  readme: string
  subgroups: SubGroup[],
  users: User[],
}

export type SubGroup = {
  id: string,
  name: string,
  icon: string,
  readme: string
}

export type LoginActionPayload = {
  server: string,
  screenName: string,
  password: string
}
