import React from 'react';

import RLogoImg from '../../images/react-movie-logo.svg';
import MLogoImg from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, MovieLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RLogoImg} alt='Logo'/>
            <MovieLogoImg src={MLogoImg} alt='movie database logo'/>
        </Content>
    </Wrapper>
)

export default Header;