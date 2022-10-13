import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

interface Props {
    Component: any;
    pageProps: {
        session: any;
        pageProps: any;
    };
}

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: Props) => {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </SessionProvider>
    );
};

export default MyApp;
