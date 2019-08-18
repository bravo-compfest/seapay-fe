import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUpCustomerPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(firstName, lastName, username, email, phone, password) {
    let name = firstName.trim() + ' ' + lastName.trim();
    axios({
      method: 'post',
      url: 'http://localhost:8088/restapi/customers',
      data: {
        name: name,
        username: username,
        password: password,
        email: email,
        phoneNumber: phone
      }
    })
    .then((response) => {
      this.addCustomerWallet(response.data.id);
      const { from } = this.props.location.state || { from: { pathname: "/" }};
      this.props.history.push(from);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  addCustomerWallet(userId) {
    axios({
      method: 'post',
      url: 'http://localhost:8081/wallet',
      data: {
        userId: userId,
        balance: 0
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography gutterBottom component="h1" variant="h2">
            Sign up
          </Typography>
          <Typography component="h1" variant="subtitle1">
            Please fill up your details below
          </Typography>
          <Formik
            initialValues={{ firstName: '', lastName: '', username: '', email: '', phone: '', password: '' }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required('First Name is required'),
              lastName: Yup.string(),
              username: Yup.string().required('Username is required'),
              email: Yup.string().required('Email is required'),
              phone: Yup.string().required('Phone Number is required'),
              password: Yup.string().required('Password is required'),
            })}
            onSubmit={({ firstName, lastName, username, email, phone, password }) => this.handleSignUp(firstName, lastName, username, email, phone, password)}
            render={({ errors, status, touched, isSubmiting }) => (
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="firstName"
                      type="text"
                      component={FirstNameField}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="lastName"
                      type="text"
                      component={LastNameField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="username"
                      type="text"
                      component={UsernameField}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="email"
                      type="text"
                      component={EmailField}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="phone"
                      type="text"
                      component={PhoneField}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="password"
                      type="text"
                      component={PasswordField}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/" variant="body2">
                      Already have an account? Sign in
                </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          />
        </div>
      </Container>
    );
  }
}

const FirstNameField = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    {...field} {...props}
    autoComplete="fname"
    name="firstName"
    variant="outlined"
    required
    fullWidth
    id="firstName"
    label="First Name"
    autoFocus
  />
);

const LastNameField = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    {...field} {...props}
    variant="outlined"
    fullWidth
    id="lastName"
    label="Last Name"
    name="lastName"
    autoComplete="lname"
  />
);

const UsernameField = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    {...field} {...props}
    variant="outlined"
    required
    fullWidth
    id="username"
    label="Username"
    name="username"
    autoComplete="username"
  />
);

const EmailField = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    {...field} {...props}
    variant="outlined"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
  />
);

const PhoneField = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    {...field} {...props}
    variant="outlined"
    required
    fullWidth
    id="phone"
    label="Phone Number"
    name="phone"
    autoComplete="number"
  />
);

const PasswordField = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    {...field} {...props}
    variant="outlined"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
  />
);

export default withStyles(style, { withTheme: true })(SignUpCustomerPage);
