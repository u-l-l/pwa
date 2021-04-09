import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import EntityNavItem from '@/components/EntityNavItem';
import {entities as entities_} from '@/utils/sample-data';

import styles from '@/styles/EntityNav.module.scss';


export default function EntityNav() {
  /*const activate = (index: number) => {
    const entity = entities.splice(index, 1)[0];
    setActiveEntity(entity.id);
    entities.splice(0, 0, entity);
    console.log(entities);
  }*/
  const [entities, setEntities] = useState(entities_);
  const router = useRouter();
  const { id } = router.query;
  const search = (e: React.FormEvent) => {
    const word = e.target.value.trim();
    if(word == ''){
      setEntities(entities_);
    }else{
      setEntities(entities_.filter(entity => {
        return !entity.name.search(e.target.value)
      }));
    }
  }
  const reset = (e: React.FormEvent) => {
    e.target.value='';
    setEntities(entities_);
  }
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input type='text' onInput={search} onBlur={reset} placeholder='ユーザーを検索'/>
      </div>
      {entities.map((entity, i)=> (
        <Link href={`/${entity.id}`}>
          <EntityNavItem {...entity} active={id == entity.id} key={i} />
        </Link>
      ))}
    </div>
  )
}
