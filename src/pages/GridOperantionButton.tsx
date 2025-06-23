import { Button, Grid, styled } from "@mui/material";

interface GridOperationButton {
    operation: string;
    selectOperaion: (operation: string) => void;
    selectedOperaion: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
    backgroundColor: "rgb(254,241,73,.1)",
    borderColor: props.selected ? "#FFF" : "rgb(254,241,73,.1)",

}))

export const GridOperationButton: React.FC<GridOperationButton> = ({
    operation,
    selectedOperaion,
    selectOperaion,
}) => {
    return (
        <Grid item xs={3}>
            <StyledButton
                fullWidth
                variant="outlined"
                onClick={() => selectOperaion(operation)}
                selected={selectedOperaion === operation}
            >
                {operation}
            </StyledButton>
        </Grid>
    );
};