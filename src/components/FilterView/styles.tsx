import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 2px',
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            maxHeight: 50, 
            overflow: 'hidden', 
            boxShadow: '0.5',
            borderRadius: 3,
            flexGrow: 1,
            border: 1,
            borderColor: 'gray', 
            backgroundColor: 'white', 
            margin: 1,
            '& .react-filter-box, .react-codemirror2': {
                width: '100% !important',
                border: 'none !important',
                boxShadow: 'none !important',
                marginBottom: '0 !important'
            }   
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 5,
        },
        divider: {
            height: 28,
            margin: 4,
        },
        filterViewBg: {
            width: '100%',
            background: '#ECECEC'
        }
    })
);