import React from 'react';
import styled from 'styled-components';
import {ProfileImage} from './ProfileImage';

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    grid-template-areas: "photo name"
                         "photo label"
                         "photo description";
`;

const Photo = styled.div`
    grid-area: photo;
`;

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
`;

const Label = styled.div`
    grid-area: label;
`;

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
`;

export default function() {
    return <UserGridStyled> 
            <Photo><ProfileImage/></Photo>
            <Name>Name</Name>
            <Label><strong>400</strong> followers </Label>
            <Description>Pitchfork tilde lomo chillwave keytar, tofu chartreuse letterpress mumblecore. 
                 mixtape palo santo kitsch sustainable food truck asymmetrical microdosing pok pok.</Description>
         </UserGridStyled>;
}