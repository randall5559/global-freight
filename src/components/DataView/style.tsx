import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexShrink: 0,
            marginLeft: theme.spacing(2.5),
        },
        table: {
            minWidth: 700,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        }
    })
);