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

    divide(first, second) {
        return first / second;
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
        //TODO: Testfall
        if (!isNaN(statement)) {
            return [statement];
        }
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
        if (!isNaN(statement)) {
            console.log("NUMBER");
            return Number(statement);
        }

        let parenthesisContent = this.getParenthesisContent(statement);
        if (parenthesisContent.content != statement) {
            let beforeParenthesis = statement.substring(0, parenthesisContent.opening);
            let evaluatedParenthesis = this.calculateFromString(parenthesisContent.content)
            let afterParenthesis = statement.substring(parenthesisContent.closing + 1);
            return this.calculateFromString(beforeParenthesis + evaluatedParenthesis + afterParenthesis);
        }

        let seperators = ["^", "*", "/", "-", "+"];
        let methods = [this.exponentiate, this.multiply, this.divide, this.subtract, this.add];

        console.log(statement);
        let result = String(statement);
        for (let i = seperators.length - 1; i >= 0; i--) {
            console.log(statement);
            console.log(seperators[i]);
            let splitted = this.seperateByOperator(statement, seperators[i]);
            splitted = splitted.filter(n => n);
            console.log(splitted);
            if (splitted.length > 1 && !seperators.includes(splitted[0][splitted[0].length - 1])) {
                console.log(splitted);
                console.log(seperators[i]);
                result = this.calculateFromString(splitted[0]);
                console.log(splitted);
                for (let j = 1; j < splitted.length; j++) {
                    console.log("METHOD");
                    console.log(methods[i]);           
                    result = methods[i](result, this.calculateFromString(splitted[j]));
                    console.log(result);
                }
                statement = result;
            }
        
        }

        return result;
       
    }
}
module.exports = Calculator;