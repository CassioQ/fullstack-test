import { Divider } from '@mui/material';
import { Monster } from '../../models/interfaces/monster.interface';
import { StatsItem } from '../stats-item/StatsItem';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  Image,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <BattleMonsterCard centralized>
      {monster != null ? (
        <>
          <Image src={monster.imageUrl} />
          <BattleMonsterTitle>{title!}</BattleMonsterTitle>
          <Divider />
          <StatsItem name="HP" value={monster.hp} />
          <StatsItem name="Attack" value={monster.attack} />
          <StatsItem name="Defense" value={monster.defense} />
          <StatsItem name="Speed" value={monster.speed} />
        </>
      ) : (
        <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
