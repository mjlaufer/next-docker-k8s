import { NextPageContext } from 'next';

interface Props {
    userAgent: string;
}

function Home({ userAgent }: Props): JSX.Element {
    return <h1>Hello world! - user agent: {userAgent}</h1>;
}

Home.getInitialProps = async ({ req }: NextPageContext) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;
