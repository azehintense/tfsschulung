class Calculator {
    add(first, second) {
        return first + second;
    }
    
    subtract(first, second) {
        return first - second;
    }

    multiply(first, second) {
        return first * second;
    }

    exponentiate(first, second) {
        return Math.pow(first, second);
    }

    /*
    seperateByPlus(statement) {

        let splitByPlus = statement.split("+");

        for (let i = 0; i < splitByPlus.length; i++) {
            splitByPlus[i] = splitByPlus[i].trim();
        }

        return splitByPlus;
    }
    */

    seperateByOperator(statement, operator) {

        let splitByOperator = statement.split(operator);

        for (let i = 0; i < splitByOperator.length; i++) {
            splitByOperator[i] = splitByOperator[i].trim();
        }

        return splitByOperator;
    }

    seperateByParenthesis(statement) {

        let splitByParenthesis = statement.split(")");

        for (let i = 0; i < splitByParenthesis.length; i++) {
            if (splitByParenthesis[i][0].trim() === "(") {
                splitByParenthesis[i] = splitByParenthesis[i].trim().substring(1);
            }
            splitByParenthesis[i] = splitByParenthesis[i].trim();
        
        }

        return splitByParenthesis; 
    }

    calculateFromString(statement) {

        let splitByPlus = this.seperateByOperator(statement, "+");

        if (splitByPlus.length === 1) {
            return Number(splitByPlus[0]);
        }
        
        let result = 0;
        splitByPlus.forEach(split => {
            result += Number(this.calculateFromString(split));
        });
        return result;


        /*
        let terms = [];
        splitByPlus.forEach(split => {
            terms.push(this.calculateFromString(split));
        });


        /*
        let splitByParenthesis = this.seperateByParenthesis(statement);
        if (splitByParenthesis.length > 1) {
            splitByParenthesis.forEach(split => {
                return this.calculateFromString(split);
            });
            
        } else {
            let additions = this.seperateByOperator(statement, "+");

            if (additions.length > 1) {
                additions.forEach(addition => {
                    let multiplications = this.seperateByOperator(addition, "*");
        
                    if (multiplications.length > 1) {
                        multiplications.forEach(multiplication => {
                            let potency = this.seperateByOperator(multiplication, "^");

                            if (potency.length > 1) {

                            } else {

                            }
                        })
                    }
                    
                });
            } else {
                return additions;
            }
        }
*/

        
    }
}
module.exports = Calculator;