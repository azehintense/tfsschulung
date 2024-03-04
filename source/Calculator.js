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

    seperateByOperator(statement, operator) {
        //Return numbers directly
        if (!isNaN(statement)) {
            return [statement];
        }

        let splitByOperator = statement.split(operator);

        //trim for beauty
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
        //End of recursion
        if (!isNaN(statement)) {
            return Number(statement);
        }

        //Prioritize parenthesis
        let parenthesisContent = this.getParenthesisContent(statement);
        if (parenthesisContent.content != statement) {
            let beforeParenthesis = statement.substring(0, parenthesisContent.opening);
            let evaluatedParenthesis = this.calculateFromString(parenthesisContent.content)
            let afterParenthesis = statement.substring(parenthesisContent.closing + 1);
            return this.calculateFromString(beforeParenthesis + evaluatedParenthesis + afterParenthesis);
        }

        //order is given by opposite of how strong the operators bind
        let seperators = ["^", "*", "/", "-", "+"];
        let methods = [this.exponentiate, this.multiply, this.divide, this.subtract, this.add];

        let result = String(statement);
        for (let i = seperators.length - 1; i >= 0; i--) {
            let splitted = this.seperateByOperator(statement, seperators[i]);
            splitted = splitted.filter(n => n);
            //Make operation only if there are multiple parts, so there is a calculation needed
            //and if the first part doesn't end in an operator which will happen if it tries to 
            //use subtraction for a negative number
            if (splitted.length > 1 && !seperators.includes(splitted[0][splitted[0].length - 1])) {
                result = this.calculateFromString(splitted[0]);
                for (let j = 1; j < splitted.length; j++) {     
                    result = methods[i](result, this.calculateFromString(splitted[j]));
                }
                statement = result;
            }
        }

        return result;
       
    }
}
module.exports = Calculator;