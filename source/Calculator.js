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

    getParenthesisContent(statement) {
        let closingParenthesis = statement.length;
        let openingParenthesis = -1;

        for (let i = 0; i < statement.length; i++) {
            if (statement[i] === ")" && closingParenthesis > i) {
                closingParenthesis = i;
            } else if (statement[i] === "(") {
                openingParenthesis = i;
            }
        }
        return {
            content: statement.substring(openingParenthesis + 1, closingParenthesis),
            opening: openingParenthesis, 
            closing: closingParenthesis
        }
    }

    calculateFromString(statement) {
        console.log(statement);

        if (typeof(statement) != "string") {
            return statement;
        }
        let parenthesisContent = this.getParenthesisContent(statement);
        if (parenthesisContent.content != statement) {
            console.log(parenthesisContent.content);
            console.log(statement);
            return this.calculateFromString(statement.substring(0, parenthesisContent.opening)) + 
            this.calculateFromString(parenthesisContent.content) +
            this.calculateFromString(statement.substring, parenthesisContent.closing + 1);
        }

        let seperators = ["+", "-", "*", "^"];
        let methods = [this.add, this.subtract, this.multiply, this.exponentiate];

        let result = "";

        for (let i = seperators.length; i >= 0; i--) {
            console.log(statement);
            let splitted = this.seperateByOperator(statement, seperators[i]);

            if (splitted.length > 1) {
                console.log("split");
                console.log(seperators[i]);
                console.log(methods[i]);
                console.log(methods[i](12,4));
                let result = this.calculateFromString(splitted[0]);
                for (let j = 1; j <= splitted.length; j++) {
                    //result = methods[i](result, this.calculateFromString(splitted[j]));
                    console.log(result);
                    console.log(splitted[j]);
                    result = methods[i](result, this.calculateFromString(splitted[j]));
                }
            }
        }

        return result;
    }

    calculateFromString2(statement) {

        let splitByPlus = this.seperateByOperator(statement, "+");

        if (splitByPlus.length === 1) {
            let splitBySubtraction = this.seperateByOperator(statement, "-");

            console.log(splitBySubtraction);

            if (splitBySubtraction.length === 1) {
                let splitByMultiplication = this.seperateByOperator(statement, "*");

                console.log(splitByMultiplication);

                if (splitByMultiplication.length === 1) {
                    let splitByExponential = this.seperateByOperator(statement, "^");


                    if (splitByExponential.length === 1) {
                        return Number(splitByPlus[0]);
                    } else {


                        let splitByParenthesis = this.seperateByParenthesis(statement);

                        if (splitByParenthesis.length === 1) {
                            let result = Number(this.calculateFromString(splitByExponential[0]));
                            console.log(splitByExponential);
                            console.log(result);
                            for (let i = 1; i < splitByExponential.length; i++) {
                                console.log(result);
                                result = Math.pow(result, Number(this.calculateFromString(splitByExponential[i])));
                            }
                            console.log("result:" + result);
                        } else {
                            let result = 1;
                            splitByParenthesis.forEach(split => {
                                result *= this.calculateFromString(split);
                            });
                            return result;
                        }


                        
                    }

                    
                } else {
                    let result = 1;
                    splitByMultiplication.forEach(split => {
                        result *= Number(this.calculateFromString(split));
                    });
        
                    console.log("result:" + result);
                    return result;
                }
    
                
            } else {
                let result = Number(this.calculateFromString(splitBySubtraction[0]));
                console.log(splitBySubtraction);
                console.log(result);
                for (let i = 1; i < splitBySubtraction.length; i++) {
                    console.log(result);
                    result -= Number(this.calculateFromString(splitBySubtraction[i]));
                }
                console.log("result:" + result);
                return result;
            }           
            
        }
        
        let result = 0;
        splitByPlus.forEach(split => {
            result += Number(this.calculateFromString(split));
        });

        console.log("result:" + result);

        return result;        
    }
}
module.exports = Calculator;