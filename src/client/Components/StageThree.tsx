// Utilities
import * as React from 'react';

interface IProps {
    restart: any,
    cups: number,
    age: number,
    storeData: any
}

const StageThree = (props: IProps): JSX.Element=> { 
    const cups: number = props.cups;
    const age: number = props.age;
    const yearsCalc = (years: number, interest: number) => {
        const price: number = 2.45;
        const cupsPerYear: number = (cups * 52);
        let pricePerYear: number = cupsPerYear * price;
        let interestDue: number = (pricePerYear * interest) / 100;
        let total: number = 0;
        for (let i: number = 0; i < years; i++) {
            total = Math.round((pricePerYear + total) + interestDue);
            interestDue = (total * interest) / 100;
            const inflation: number = (pricePerYear * 2.40) / 100;
            pricePerYear = pricePerYear + inflation;
            if (i == years-1) {
                total = Math.round(total + interestDue);
            };
        };
        return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    props.storeData({
        "age": props.age,
        "5Years": yearsCalc(5, 2.84),
        "10Years": yearsCalc(10, 2.84),
        "15Years": yearsCalc(15, 2.84),
        "pension": yearsCalc((67-age), 2.00)
    });
    return (
        <div className="stageThree">
            <h3>If you put the money you  usually spend on coffee into a Standard savings account with a 2.84% interest rate...</h3>
            <div className="row">
                <div className="col">
                    <p>After <br/><span> 5 YEARS</span><br/> you could save:</p>
                    <h3 className="value">£{yearsCalc(5, 2.84)}</h3>
                </div>
                <div className="col">
                    <p>After <br/><span> 10 YEARS</span><br/> you could save:</p>
                    <h3 className="value">£{yearsCalc(10, 2.84)}</h3>
                </div>
                <div className="col">
                    <p>After <br/><span> 15 YEARS</span><br/> you could save:</p>
                    <h3 className="value">£{yearsCalc(15, 2.84)}</h3>
                </div>
            </div>
            <h3>If you put the money you normally spend on coffee into your pension*, by age <br/><span className="age">67</span> <br/> you would save...</h3>
            <h3 className="value">£{yearsCalc((67-age), 2.00)}</h3>
            <button onClick={props.restart}>Start Again</button>
            <div className="socials">   
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//mwmul.github.io/CoffeeCalcApp">
                    <i className="fab fa-facebook-square"></i>
                </a> 
                <a target="_blank" href={`https://twitter.com/home?status=I%20would%20save%20£${yearsCalc((67-age), 2.00)}%20if%20I%20deposited%20into%20my%20pension%20fund%20money%20I%20would%20otherwise%20spend%20on%20coffee.%0A%0Atry%20it%20out%20here%3A%20https%3A//mwmul.github.io/CoffeeCalcApp`}>
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=https%253A//mwmul.github.io/CoffeeCalcApp&title=Coffee%20savings%20Calculator&summary=I%20would%20save%20£${yearsCalc((67-age), 2.00)}%20if%20I%20deposited%20into%20my%20pension%20fund%20money%20I%20would%20otherwise%20spend%20on%20coffee.&source=`}>
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <p>
                <small>
                A 2.84% interest rate is based on the best standard savings rate available in april 2018. 
                 this asumes that you would switch your savings account each year to retain the same or similar rate.   
                 *The pension rate used is 2%, which is the lowest return available. The current state pension age is 63 for women and 65 for men, but this is changing. 
                  By 2026 both men and women will be able to retire at age 67, so this is the age we have used. 
                  The price of coffee has not been adjusted for inflation over the time period. 
                  this calculator is for illustration purposes only and figures can not be guaranteed. if you have any other questions about savings or pension contribution you are advised to speak to a qualified financial advisor.
                 </small>
            </p>
            <div className="scroller"><i className="fas fa-angle-down"></i></div>
        </div>
    );
};

export default StageThree;