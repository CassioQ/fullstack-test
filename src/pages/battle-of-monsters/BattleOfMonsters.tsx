import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectComputerMonster,
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';
import { BattleResult, Fight } from '../../models/interfaces/monster.interface';
import { MonsterService } from '../../reducers/monsters/monsters.service';
import { WinnerDisplayContainer } from '../../components/winner-display/WinnerDisplay.styled';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const computerMonster = useSelector(selectComputerMonster);
  const [battleWinner, setBattleWinner] = useState<BattleResult | null>(null);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    // Fight!
    const fighting: Fight = {
      monster1Id: selectedMonster ? selectedMonster.id : null,
      monster2Id: computerMonster ? computerMonster.id : null,
    };

    MonsterService.battle(fighting).then((data) => {
      setBattleWinner({ winner: data.winner, tie: data.tie });
    });
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />
      {battleWinner !== null ? (
        <>
          <WinnerDisplayContainer>
            {battleWinner.tie ? (
              <span>It's a Tie</span>
            ) : (
              <span>{battleWinner.winner.name} wins!</span>
            )}
          </WinnerDisplayContainer>
        </>
      ) : (
        <span></span>
      )}
      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={computerMonster?.name || 'Computer'}
          monster={computerMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
