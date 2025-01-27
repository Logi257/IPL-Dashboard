// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = recentMatch
  const statusColor = matchStatus === 'Won' ? 'Green' : 'Red'
  return (
    <li>
      <div className="list-item-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="team-logo"
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p className={statusColor}>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
