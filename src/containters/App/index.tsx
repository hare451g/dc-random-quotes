import { Router } from '@reach/router';
import QuoteView from '../QuoteView';

const App: React.FC = () => (
  <Router>
    <QuoteView path="/" />
  </Router>
);

export default App;
