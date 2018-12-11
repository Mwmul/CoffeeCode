// Utilities
import * as React from 'react';
// Components
import StageOne from '../Components/StageOne';
import StageThree from '../Components/StageThree';
import * as objectAssign from 'object-assign';

interface IState {
    age: number,
    cupsPW: number,
    stage: number
}
const APIURL = `https://us-central1-evolvedapi.cloudfunctions.net/EvolvedStore/?project=CoffeeCalculator`
export default class CalculatorControler extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            age: null,
            cupsPW: null,
            stage: 1
        };
    };

    public restart = (): void => {
        this.setState(prevState => {
            return objectAssign({}, prevState, {
                age: null,
                cupsPW: null,
                stage: 1
            });
        });
    };

    public changeAge = (e): void => {
        const age: number = e.target.value;
        this.setState(prevState => {
            return objectAssign({}, prevState, {
                ...prevState,
                age: age    
            });
        },() => {
            this.submitForm(e);
         });
    };

    public changeCups = (e): void => {
        const cups: number = e.target.value;
         this.setState(prevState => {
             return objectAssign({}, prevState, {
                 ...prevState,
                 cupsPW: cups    
             });
         }, () => {
            this.submitForm(e);
         });
         
    };

    public submitForm = (e: React.SyntheticEvent): void => {
        if(this.state.cupsPW != null && this.state.age != null)
            this.setState(prevState => {
                return objectAssign({}, prevState, {
                    ...prevState,
                    stage: 2
                });
            }, () => {
                setTimeout(() => {
                    this.setState(prevState => {
                        return objectAssign({}, prevState, {
                            ...prevState,
                            stage: 3
                        });
                    });
                }, 700);
            });
    };


    public storeData = (data) => fetch(APIURL, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        })
        .then(res => console.log(res))
        .catch(err => {throw new Error(err);});
    


    public render(): JSX.Element {
        return (
            <div className="CalculatorControler">
                
             
                <div className="top">
                    <img src={require('../../../public/images/topLeft.jpg')} alt=""/>
                    <img src={require('../../../public/images/topRight.jpg')} alt=""/>
                </div>
                
                <main className="main" role="main">
            
                    {
                        this.state.stage === 1 
                            ?   <StageOne changeCups={this.changeCups} changeAge={this.changeAge} submitForm={this.submitForm}/>
                            :   null
                    }

                    {
                        this.state.stage === 2
                            ?   <div className="spinner"></div>
                            :   null
                    }

                    {
                        this.state.stage === 3
                            ?   <StageThree storeData={this.storeData} restart={this.restart} cups={this.state.cupsPW} age={this.state.age} />
                            :   null
                    }
                
                </main>

                <div className="bottom">
                    {
                        this.state.stage !== 3
                            ?   <img src={require('../../../public/images/bottomLeft.jpg')} alt="" />
                            :   null
                    }
                </div>
                 

            </div>
        );
    };
};