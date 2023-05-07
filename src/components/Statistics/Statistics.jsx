import PropTypes from 'prop-types';
import { Section, StatTitle, StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
