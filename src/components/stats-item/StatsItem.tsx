import { ProgressBar, StatName } from './StatsItem.styled';

type StatItensProps = {
  name: string;
  value: number;
};

const StatsItem: React.FC<StatItensProps> = ({ name, value }) => {
  return (
    <>
      <StatName>{name}</StatName>
      <ProgressBar value={value} variant="determinate" />
    </>
  );
};

export { StatsItem };
