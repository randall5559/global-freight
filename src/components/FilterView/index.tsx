import { useState } from 'react';
import ReactFilterBox, { SimpleResultProcessing, GridDataAutoCompleteHandler } from '@appbaseio/react-filter-box';
import '@appbaseio/react-filter-box/lib/react-filter-box.css';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import { useStyles } from './styles';
import { APP } from '../../shared/constants';
import { filterQuery } from '../../state/filter';
import { customRenderCompletionItem, shipmentReformatted } from './helper'
import shipments from '../../shared/shipments.json';

import 'react-day-picker/lib/style.css';

const FILTER = APP.FILTER_VIEW;
const shipmentData = shipmentReformatted(shipments); 

export const FilterView = () => {
    const [expressions, setExpressions] = useState([]);
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="row" p={0.5} className={classes.filterViewBg} borderBottom="solid lightGrey 1px">
            <Box className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu" onClick={() => {
                    filterQuery.updateQuery(expressions);
                }}>
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <ReactFilterBox 
                    onChange={(query: string, expressions: []) => {
                        setExpressions(expressions);
                    }}
                    data={shipmentData}
                    options={FILTER.OPTIONS}
                    autoCompleteHandler={customAutoComplete}
                    customRenderCompletionItem={(self: any, data: any, registerAndGetPickFunc: Function) => {
                        return customRenderCompletionItem(self, data, registerAndGetPickFunc, shipmentData);
                    }}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton className={classes.iconButton} aria-label="menu" onClick={() => {
                    filterQuery.updateQuery(expressions);
                }}>
                    <KeyboardReturnIcon />
                </IconButton>
            </Box>
        </Box>
    );
};
export default FilterView;

//extend this class to add your custom operator
class CustomAutoComplete extends GridDataAutoCompleteHandler {
    // override this method to add new your operator
    needOperators(parsedCategory: any) {
        var result = super.needOperators(parsedCategory);

        if(parsedCategory === 'Estimated Departure' || parsedCategory === 'Estimated Arrival'){
            return ['same', 'after', 'before'];
        }

        return result;
    }

    //override to custom to indicate you want to show your custom date time
    needValues(parsedCategory: any, parsedOperator: any){
        if(parsedCategory === 'Estimated Departure' || parsedCategory === 'Estimated Arrival'){
            return [{ customType: 'date' }]
        }

        return super.needValues(parsedCategory, parsedOperator);
    }
}

const customAutoComplete = new CustomAutoComplete(shipmentData, FILTER.OPTIONS);


