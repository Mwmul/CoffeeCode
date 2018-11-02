// Utilities
import * as React from 'react';
// Components
import CalculatorControler from '../Containers/CalculatorControler';

const App: React.StatelessComponent = (): JSX.Element => {
    return (
        <div className="Container">
            <CalculatorControler />
        </div>
    )  
}

export default App
