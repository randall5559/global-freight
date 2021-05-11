import { useTheme } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import {
    KeyboardArrowRight,
    LastPage,
    FirstPage,
    KeyboardArrowLeft
} from '@material-ui/icons';
import { useStyles } from '../style';

type Pagination = { 
    count: number; 
    page: number;
    rowsPerPage: number;
    onChangePage: Function; 
};

export const TablePaginationActions = (props: Pagination) => {
    const classes = useStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event: any) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event: any) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event: any) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event: any) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
        </IconButton>
      </div>
    );
  }