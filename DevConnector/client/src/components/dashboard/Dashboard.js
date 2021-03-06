import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);
    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'><i className="fas fa-user"></i> Welcome {user && user.name}</p>
        {profile !== null ? (
            <Fragment>

            </Fragment>
        ) : (
                <Fragment>
                    <p>You have not set up a profile yet! Add some info to get started below</p>
                    <Link to='/create-profile' className='btn btn-primary my-1'>
                        Create a Profile
                    </Link>
                </Fragment>
            )
        }
    </Fragment>;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profileState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
