import HandStrengthCalculator from './components/HandStrengthCalculator.jsx';
import OddsCalculator from './components/OddsCalculator';
import SuggestedActions from './components/SuggestedActions';
import WinRateEstimator from './components/WinRateEstimator';
import PotOddsCalculator from './components/PotOddsCalculator';
import BankrollManagementTips from './components/BankrollManagementTips';
import GameHistory from './components/GameHistory';
import HandHistoryAnalyzer from './components/HandHistoryAnalyzer';

function App() {
  return (
    <div>
      <h1>Poker Assistant</h1>
      <HandStrengthCalculator />
      <OddsCalculator />
      <SuggestedActions />
      <WinRateEstimator />
      <PotOddsCalculator />
      <BankrollManagementTips />
      <GameHistory />
      <HandHistoryAnalyzer />
    </div>
  );
}

export default App;
