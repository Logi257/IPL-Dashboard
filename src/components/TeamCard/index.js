// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team
  return (
    <Link to={`/team-matches/${id}`} className="Link">
      <li className="list">
        <div className="list-item">
          <img src={teamImageUrl} alt={name} className="team-img" />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
