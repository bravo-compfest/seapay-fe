import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authenticationService } from '../../services';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const style = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) { 
        this.props.history.push('/dashboard');
    }
  }
  
  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography gutterBottom component="h1" variant="h2">
            Hello
          </Typography>
          <Typography component="h1" variant="subtitle1">
            Welcome back, please login to your account
          </Typography>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required('Username is required'),
              password: Yup.string().required('Password is required')
            })}
            onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
              console.log("Submit");
              setStatus();
              authenticationService.login(username, password).then(
                user => {
                  console.log("submitted");
                  const { from } = this.props.location.state || { from: { pathname: "/" } };
                  this.props.history.push(from);
                },
                error => {
                  console.log("Error");
                  setSubmitting(false);
                  setStatus(error);
                }
              );
            }}
            render={({ errors, status, touched, isSubmitting }) => (
              <Form className={classes.form}>
                <Field 
                  name="username" 
                  type="text"
                  component={LogInField}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                />
                <Field 
                  name="password"
                  type="password"
                  component={PasswordField}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                Sign In
                </Button>
              </Form>
            )}
          />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
        </div>
      </Container>
    );
  }
}

const LogInField = ({field, form: {touched, errors}, ...props}) => (
  <TextField
    {...field} {...props}
    variant="outlined"
    margin="normal"
    fullWidth
    label="Username"
    autoComplete="username"
    autoFocus
  />
);

const PasswordField = ({field, form: {touched, errors}, ...props}) => (
  <TextField
    {...field} {...props}
    variant="outlined"
    margin="normal"
    fullWidth
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
  />
)

export default withStyles(style, { withTheme: true })(LoginPage);
