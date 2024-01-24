import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import RouteChangeTracker from "routes/RouteChangeTracker";
import Router from "routes/Router";

const queryClient = new QueryClient();

const App = () => {
  RouteChangeTracker();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouteChangeTracker />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
