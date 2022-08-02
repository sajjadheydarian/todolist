import {makeStyles} from "@material-ui/styles";
import {hover} from "@testing-library/user-event/dist/hover";

const Style = makeStyles(Theme => ({
    root: {
        height: 'calc(100vh - 4rem)',
        background: 'orange',
        display: 'flex',
        padding: '0 1rem ',
        margin: '2rem',
        flexDirection: ' column',
        justifyContent: 'space-evenly',
        alignItems: ' center',
        borderRadius: '1rem',

    },
    btn: {
        padding: "1px !important",
        background: "blue",
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '1rem',
        width: "50%",
        margin: '1rem 25%',
        boxShadow: '4px 5px 5px rgb(0 0 0 / 40%) ,-4px -5px 8px rgb(250 250 250 / 40%)',
        fontSize: 'xx-large',

    },
    input: {
        width: '70%',
        borderRadius: '0.5rem',
        background: 'white',
        border: 'none',
        boxShadow: 'inset 4px 5px 7px rgb(0 0 0 / 40%) ,-4px -5px 10px rgb(250 250 250 / 40%) ',
        padding: '5px'
    },
    divInput: {
        display: 'flex',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontSize: '1rem',
        marginRight: '1rem !important',
        fontWeight: '700 !important'
    },
}));

export default Style;