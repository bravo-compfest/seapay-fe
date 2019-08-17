import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
    
    this.state = {
      username: '',
      isAuthenticated: false,
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(username, password) {
    axios({
      method: 'post',
      url: 'http://localhost:8088/restapi/customers/login',
      data: {
        username: username,
        password: password,
      }
    })
    .then((response) => {
      this.setState({
        username: username,
        isAuthenticated: response.data.response === 'success' ? true : false,
      });
      this.saveSession();
      const { from } = this.props.location.state || { from: { pathname: "/dashboard" }};
      this.props.history.push(from);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  saveSession() {
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('isAuthenticated', this.state.isAuthenticated);
  }

  componentDidMount() {
    if (localStorage.getItem('isAuthenticated')) {
      this.props.history.push("/dashboard");
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
            onSubmit={({ username, password }) => this.handleLogin(username, password)}
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

const LogInField = ({ field, form: { touched, errors }, ...props }) => (
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

const PasswordField = ({ field, form: { touched, errors }, ...props }) => (
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
