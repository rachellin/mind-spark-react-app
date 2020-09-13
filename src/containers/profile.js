import React from 'react';
import { StyledContainer, MainContent } from '../styles/containerStyles';

import { UserInfo } from '../user/userInfo'; 
import { UserPostFilter } from '../user/userPostFilter';

export class Profile extends React.Component {
    render () {
        return (
            <StyledContainer>
                <MainContent>
                    <UserInfo
                        userPic={this.props.userPic}
                        userName={this.props.userName}
                        userRoles={this.props.userRoles}
                        userBio={this.props.userBio}
                        userFacts={this.props.userFacts}
                    />
                    <UserPostFilter/>
                </MainContent>
            </StyledContainer>
        )
    }
}

Profile.defaultProps =  {
    userPic: "https://i.pinimg.com/564x/11/bd/2c/11bd2cb6af23127447dcb7b05423d3f0.jpg",
    userName: "Jane Doe",
    userRoles: ["pioneer", "astrophysics"],
    userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userFacts: {
        location: "USA",
        birthday: "April 14",
        website: "https://website.com"
    }
}