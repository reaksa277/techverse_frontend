import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.min.css";

import Router from "./router";
import i18n from "./translation";
import ThemeProvider from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Router />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
