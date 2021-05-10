import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  search: {
    position: 'relative',
    borderRadius: props => props.shape.borderRadius,
    backgroundColor: fade('#FFF', 0.15),
    '&:hover': {
      backgroundColor: fade('#FFF', 0.25),
    },
    marginRight: props => props.spacing(2),
    marginLeft: 0,
    width: '100%',
    [props => props.breakpoints.up('sm')]: {
      marginLeft: props => props.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: props => props.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateX(-70%)',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: props => props.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${props => props.spacing(4)}px)`,
    transition: props => props.transitions.create('width'),
    width: '100%',
    [props => props.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  formControl: {
    margin: props => props.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: props => props.spacing(2),
  },
  select: {
    color: props => props.palette.type === 'dark' ? '#FFF' : ''
  }
});