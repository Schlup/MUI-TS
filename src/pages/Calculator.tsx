import { Button, Grid, Paper } from "@mui/material"
import { Container, styled } from "@mui/system"
import { useState } from "react"
import { GridOperationButton } from "./GridOperantionButton"
import { GridDigitButton } from "./GridDigitButton"

const OutputContainer = styled('div')(({ theme }) => ({
    width: "100%",
    textAlign: "right",
    height: "2em",
    padding: theme.spacing(2),
    fontSize: "3em",
    overflow: "hidden"
}))

const CalculatorBase = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    borderRadius: 15,
}))

function Calculator() {
    const [currentValue, setCurrentValue] = useState("0");
    const [operation, setOperation] = useState("");
    const [prevValue, setPrevValue] = useState("");
    const [overwrite, setOverwrite] = useState(true);

    const calculate = () => {
        if (!prevValue || !operation) return currentValue;

        const curr = parseFloat(currentValue);
        const prev = parseFloat(prevValue);

        let result;

        switch (operation) {
            case "÷":
                result = prev / curr;
                break;
            case "*":
                result = prev * curr;
                break;
            case "+":
                result = prev + curr;
                break;
            case "-":
                result = prev - curr;
                break;
        }
        return result;
    }

    const equals = () => {
        const val = calculate();
        setCurrentValue(`${val}`);
        setPrevValue("");
        setOperation("");
        setOverwrite(true);
    }

    // AC
    const clear = () => {
        setPrevValue("")
        setOperation("")
        setCurrentValue("0")
        setOverwrite(true)
    }

    // C
    const del = () => {
        setCurrentValue("0")
        setOverwrite(true)
    }

    // Porcentagem, refazer, quando coloco 50 e clico em % deveria dar 0
    const percent = () => {
        const curr = parseFloat(currentValue);
        setCurrentValue((curr / 100).toString());
    }

    const selectOperation = (operation: string) => {
        setPrevValue(currentValue);
        setOperation(operation);
        setOverwrite(true);
    }

    // Depois de fazer 0. Ainda deveria poder adicionar mais 0s 0.000, assim por diante
    const setDigit = (digit: string) => {
        if (currentValue[0] === "0" && digit === "0") return;
        if (currentValue.includes(".") && digit == ".") return;
        if (overwrite && digit !== ".") {
            setCurrentValue(digit)
        } else {
            setCurrentValue(`${currentValue}${digit}`);
        }
        setOverwrite(false);
    }



    return (
        <Container maxWidth="sm">
            <CalculatorBase elevation={3}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <OutputContainer>
                            {currentValue}
                        </OutputContainer>
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridOperationButton operation={"AC"} selectOperaion={clear} selectedOperaion={operation} />
                        <GridOperationButton operation={"C"} selectOperaion={del} selectedOperaion={operation} />
                        <GridOperationButton operation={"%"} selectOperaion={percent} selectedOperaion={operation} />
                        <GridOperationButton operation={"÷"} selectOperaion={selectOperation} selectedOperaion={operation} />
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridDigitButton digit={"7"} enterDigit={setDigit} />
                        <GridDigitButton digit={"8"} enterDigit={setDigit} />
                        <GridDigitButton digit={"9"} enterDigit={setDigit} />
                        <GridOperationButton operation={"*"} selectOperaion={selectOperation} selectedOperaion={operation} />
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridDigitButton digit={"4"} enterDigit={setDigit} />
                        <GridDigitButton digit={"5"} enterDigit={setDigit} />
                        <GridDigitButton digit={"6"} enterDigit={setDigit} />
                        <GridOperationButton operation={"-"} selectOperaion={selectOperation} selectedOperaion={operation} />
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridDigitButton digit={"1"} enterDigit={setDigit} />
                        <GridDigitButton digit={"2"} enterDigit={setDigit} />
                        <GridDigitButton digit={"3"} enterDigit={setDigit} />
                        <GridOperationButton operation={"+"} selectOperaion={selectOperation} selectedOperaion={operation} />
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridDigitButton digit={"0"} enterDigit={setDigit} xs={6} />
                        <GridDigitButton digit={"."} enterDigit={setDigit} />
                        <Grid item xs={3}>
                            <Button fullWidth variant="contained" onClick={equals}>=</Button>
                        </Grid>

                    </Grid>
                </Grid>
            </CalculatorBase>
        </Container>
    )
}

export default Calculator