// Utilities
import * as React from 'react';

const StageOne = (props: any): JSX.Element => {

    const renderNumbers = (): Array<number> => {
        const nums = [];
        for(let x = 0; x < 150; x++) {
            nums.push(<option key={x} value={x}>{x}</option>);
        };
        return nums;
    };


    return (
        <div className="stageOne"> 
            <h1>How many cups of coffee <br/> do you drink per week?</h1>
            <form className="calcForm" onSubmit={(e: React.SyntheticEvent): React.SyntheticEvent => props.submitForm(e)}>
                <div className="inputs">
                    <div className="group">
                        <h3>Age</h3>
                        <select onChange={(e: React.SyntheticEvent): React.SyntheticEvent => props.changeAge(e)}>
                            {renderNumbers()}
                        </select>
                    </div>
                    <div className="group">
                        <h3>Cups</h3>
                        <select onChange={(e: React.SyntheticEvent): React.SyntheticEvent => props.changeCups(e)}>
                            {renderNumbers()}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default StageOne;