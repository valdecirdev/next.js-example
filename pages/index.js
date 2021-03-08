import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Head from '../src/infra/components/Head';
import Header from '../src/patterns/Header';
import Footer from '../src/patterns/Footer';

import Link from 'next/link';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: sans-serif;
    }
`;

const fontSize = 30;

const Title = styled.h3`
    font-size: ${fontSize}px;

    a {
        color: ${({ theme }) => { 
            return theme.colors.primary;
        }};
        text-decoration: none;
        &:hover {
            color: #666;
        }
    }
`;

const PostCardWrapper = styled.article`
    border: 1px solid orange;
    padding: 15px;
`;

function PostCard() {
    return (
        <article>
            <PostCardWrapper>
                <Title>
                    <Link rel="bookmark" href="/sobre">
                        <a>Acessar página Sobre</a>
                    </Link>
                </Title>
                <small>July 13, 2020 - 1 min read</small>
            </PostCardWrapper>
            <p>Agora estamos na home.</p>
        </article>
    );
}

function Home() {
    return (
        <div>
            <GlobalStyle />
            <Head title="Meu Next.js" />

            <Header />

            <main>
                <PostCard />
            </main>

            <Footer />
        </div>
    )
}

export default Home;