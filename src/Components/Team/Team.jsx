import React,{Component} from "react";
import TeamMembers from "./TeamMembers/TeamMembers";
import TeamNames from "./TeamNames/TeamNames";
import Header from "../Header/Header";
import {teamdata} from "./util/Teamdata";
import "./Team.scss";

class Team extends Component{
    state={
        selectedTeam: Object.keys(teamdata)[0]
    }

    updateSelectedTeam = team=> this.setState({selectedTeam:team})

    render(){
        return(
            <div className="team">
                <Header />
                <div className="team__container">
                    <TeamNames selectedTeam={this.state.selectedTeam} teamdata={teamdata} selectTeam={this.updateSelectedTeam} />
                    <TeamMembers teamName={this.state.selectedTeam} team={teamdata[this.state.selectedTeam]} />
                </div>
            </div>
        )
    }
}

export default Team;