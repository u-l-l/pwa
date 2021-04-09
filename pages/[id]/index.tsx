import Header from '@/components/Header';
import {GetServerSideProps} from 'next';
import {Entity} from '@/interfaces/index';
import {entities} from '@/utils/sample-data';
import RoomNav from '@/components/RoomNav';
import styles from '@/styles/pages/EntityPage.module.scss';

type Props = {
  entity: Entity
}

export default function EntityPage({ entity }: Props) {
  return (
    <>
      <div className={styles.container}>
        <Header name={entity.name} />
        <div className={styles.main}>
          <div className={styles.menu}>
            <RoomNav />
          </div>
          <div className={styles.content}>
            {entity.readme}
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      entity: entities.find(e => e.id == params.id),
    }
  }
}
