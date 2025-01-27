// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchResult: {},
    recentMatchsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const teamBanner = data.team_banner_url
    const latestMatch = data.latest_match_details

    const latestMatchResultDetails = {
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      date: latestMatch.date,
      firstInnings: latestMatch.first_innings,
      id: latestMatch.id,
      manOfTheMatch: latestMatch.man_of_the_match,
      matchStatus: latestMatch.match_status,
      result: latestMatch.result,
      secondInnigs: latestMatch.second_innings,
      umpires: latestMatch.umpires,
      venue: latestMatch.venue,
    }
    const formattedDataList = data.recent_matches.map(recentMatch => ({
      competingTeam: recentMatch.competing_team,
      competingTeamLogo: recentMatch.competing_team_logo,
      result: recentMatch.result,
      matchStatus: recentMatch.match_status,
      id: recentMatch.id,
    }))
    this.setState({
      teamBannerUrl: teamBanner,
      latestMatchResult: latestMatchResultDetails,
      recentMatchsData: formattedDataList,
      isLoading: false,
    })
  }

  render() {
    const {teamBannerUrl, latestMatchResult, recentMatchsData} = this.state
    const {isLoading} = this.state
    return (
      <>
        <div className="team-match-container">
          {isLoading ? (
            <div data-testid="loader" className="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            <div>
              <div className="img">
                <img
                  src={teamBannerUrl}
                  className="team-banner"
                  alt="team banner"
                />
              </div>
              <p className="match-type">Latest Match</p>
              <div>
                <LatestMatch matchResult={latestMatchResult} />
              </div>
              <ul className="recentMatch-container">
                {recentMatchsData.map(eachMatch => (
                  <MatchCard recentMatch={eachMatch} key={eachMatch.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    )
  }
}
export default TeamMatches
