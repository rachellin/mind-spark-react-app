import React from 'react';

import { ProfileHead, Roles, Stats } from '../styles/profileStyles';

export class UserInfo extends React.Component {

    render () {
        return (
            <ProfileHead>
                <div className="user-pic">
                    <img src={this.props.userPic}/>
                </div>

                <h2>{this.props.userName}</h2>

                <Roles>
                    {this.props.userRoles.map(role => <span>{role}</span>)}
                </Roles>

                <div className="bio">{this.props.userBio}</div>

                <div className="basics">
                    {this.props.userFacts.location ? <span><i className="ri-map-pin-line"></i> {this.props.userFacts.location}</span> : null}
                    {this.props.userFacts.birthday ? <span><i className="ri-cake-line"></i> {this.props.userFacts.birthday}</span> : null}
                    {this.props.userFacts.website ? <span><i className="ri-link"></i> <a href={this.props.userFacts.website}>{this.props.userFacts.website}</a></span> : null}
                </div>

                <Stats>
                    <div><span>322</span> followers</div>
                    <div><span>189</span> following</div>
                    <div><span>11</span> pubs</div>
                    <div><span>743</span> mins</div>
                </Stats>
            </ProfileHead>
        )
    }
}

UserInfo.defaultProps =  {
    userPic: "https://i.pinimg.com/564x/11/bd/2c/11bd2cb6af23127447dcb7b05423d3f0.jpg"
}