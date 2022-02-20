import App from "next/app";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store'

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    console.log(appProps);
    return {appProps: appProps};
  }
  render() {
    const {Component, appProps} = this.props

    return (
      <Provider store={store}>
        {typeof window === 'undefined' ? null : <Component {...appProps}/>}
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
