import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import UserService from '../../services/userServices/UserService';

import timeZones from '../../assert/data/TimeZones.json';
import userRoles from '../../assert/data/UserRoles.json';
import languages from '../../assert/data/Languages.json';
import quotas from '../../assert/data/Quotas.json';

const UserRegistration = () => {
    const generateList = (dataList) => {
        return dataList.map((val) => <option key={val.text}>{val.text}</option>)
    }
    const userRoleData = generateList(userRoles);

    const languagesData = generateList(languages);

    const timeZonesData = generateList(timeZones);

    const quotasData = generateList(quotas);


    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                userRole: '',
                department: '',
                language: '',
                timeZone: '',
                password: '',
                quota: ''
            }}

            validationSchema={
                Yup.object().shape({
                    firstName: Yup.string()
                        .trim()
                        .required('First Name require'),
                    lastName: Yup.string()
                        .trim()
                        .required('Last Name require'),
                    email: Yup.string()
                        .trim()
                        .email('enter valid email id')
                        .required('email is required'),
                    userRole: Yup.string()
                        .required('user role is required'),
                    department: Yup.string()
                        .trim()
                        .required('department is required'),
                    language: Yup.string()
                        .trim()
                        .required('department is required'),
                    timeZone: Yup.string()
                        .required('time zone is required'),
                    password: Yup.string()
                        .required('password is required'),
                    quota: Yup.string()
                        .required('password is required')
                })}
            onSubmit={(fields, action) => {
                UserService.createUser(fields)
                    .then(() => alert('successfully created'));
            }}
            render={({ errors, touched }) =>
            (
                <div className="form-container">
                    <Form>
                        <div className="row">
                            <div className="col-md-2">First Name</div>
                            <div className="col-md-4">
                                <Field
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    className={
                                        'form-control' +
                                        (errors.firstName && touched.firstName
                                            ? ' is-invalid'
                                            : '')
                                    }
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-md-2">Last Name</div>
                            <div className="col-md-4">
                                <Field
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    className={
                                        'form-control' +
                                        (errors.lastName && touched.lastName
                                            ? ' is-invalid'
                                            : '')
                                    }
                                />
                                <ErrorMessage
                                    name="lastName"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">Email</div>
                            <div className="col-md-10">
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className={
                                        'form-control' +
                                        (errors.email && touched.email
                                            ? ' is-invalid'
                                            : '')
                                    }
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">User Role</div>
                            <div className="col-md-10">
                                <Field
                                    id="userRole"
                                    name="userRole"
                                    component="select"
                                    className={
                                        'form-control' +
                                        (errors.userRole && touched.userRole
                                            ? ' is-invalid'
                                            : '')
                                    }
                                >
                                    <option disabled="disabled" value="">
                                        Select
									</option>
                                    {userRoleData}
                                </Field>
                                <ErrorMessage
                                    name="userRole"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">Department</div>
                            <div className="col-md-10">
                                <Field
                                    id="department"
                                    name="department"
                                    type="text"
                                    placeholder="Department"
                                    className={
                                        'form-control' +
                                        (errors.department && touched.department
                                            ? ' is-invalid'
                                            : '')
                                    }
                                />
                                <ErrorMessage
                                    name="department"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">Language</div>
                            <div className="col-md-10">
                                <Field
                                    id="language"
                                    name="language"
                                    component="select"
                                    className={
                                        'form-control' +
                                        (errors.language && touched.language
                                            ? ' is-invalid'
                                            : '')
                                    }
                                >
                                    <option disabled="disabled" value="">
                                        Select
									</option>
                                    {languagesData}
                                </Field>
                                <ErrorMessage
                                    name="language"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">Time Zone</div>
                            <div className="col-md-10">
                                <Field
                                    id="timeZone"
                                    name="timeZone"
                                    component="select"
                                    className={
                                        'form-control' +
                                        (errors.timeZone && touched.timeZone
                                            ? ' is-invalid'
                                            : '')
                                    }
                                >
                                    <option disabled="disabled" value="">
                                        Select
									</option>
                                    {timeZonesData}
                                </Field>
                                <ErrorMessage
                                    name="timeZone"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">Password</div>
                            <div className="col-md-4">
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className={
                                        'form-control' +
                                        (errors.password && touched.password
                                            ? ' is-invalid'
                                            : '')
                                    }
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-md-2">Quota</div>
                            <div className="col-md-4">
                                <Field
                                    id="quota"
                                    name="quota"
                                    component="select"
                                    className={
                                        'form-control' +
                                        (errors.quota && touched.quota
                                            ? ' is-invalid'
                                            : '')
                                    }
                                >
                                    <option disabled="disabled" value="">
                                        Select
									</option>
                                    {quotasData}
                                </Field>
                                <ErrorMessage
                                    name="quota"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-md-5"></div>
                            <div className="col-md-5"></div>

                            <div className="col-md-1">
                                <button type="reset" className="btn btn-danger">Reset</button>
                            </div>
                        </div>
                    </Form>
                </div>
            )}
        />
    );
}

export default UserRegistration;
