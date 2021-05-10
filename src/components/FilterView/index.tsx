import React from 'react';
import ReactFilterBox, {SimpleResultProcessing } from '@appbaseio/react-filter-box';
import '@appbaseio/react-filter-box/lib/react-filter-box.css';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';

const options = [
    {
        columnField: "Name",
        type:"text"
    },
    {
        columnField: "Description",
        type:"text"
    },
    {
        columnField: "Status",
        type:"selection" // when using type selection, it will automatically sugest all posible values
    },
    {
        columnText: "Email @",
        columnField: "Email",
        type:"text"
    }
];

const onParseOk = (expressions: []) => {
    const data = [] as any;
    const newData = new SimpleResultProcessing(options).process(data, expressions);
    //your new data here, which is filtered out of the box by SimpleResultProcessing
}

export const FilterView = () => {
    const data = [] as any;
    const classes = useStyles();
    
    return (
        <Box display="flex" flexDirection="row" p={0.5} className={classes.filterViewBg} borderBottom="solid lightGrey 1px">
            <Box className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu" onClick={() => {}}>
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <ReactFilterBox        
                    data={data}
                    options={options}
                    onParseOk={onParseOk}
                />
            </Box>
        </Box>
    );
};
export default FilterView;