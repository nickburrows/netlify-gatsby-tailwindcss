import React from "react";
import { Link } from "gatsby";

const FIrebaseAuthenticationExample = () => {
  return (
    <>
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
        {/* Header section containing title */}
        <header className="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700">
          <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
            <div className="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--8-col-desktop">
              <h3 className="h-10 text-3xl leading-7 firebase-logo">
                Firebase Authentication
              </h3>
            </div>
          </div>
        </header>
        <main className="mdl-layout__content mdl-color--grey-100">
          <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
            {/* Container for the Table of content */}
            <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
              <div className="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">
                <h2 className="mdl-card__title-text">Table of Contents</h2>
              </div>
              <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                <p>
                  There are multiple methods available for authentication with
                  Firebase.{" "}
                  <em>
                    Ensure that the appropriate sign-in method has been enabled
                    in the Firebase Console authentication panel
                  </em>
                  . Note: custom auth does not require enabling.
                </p>
                <ul>
                  <li>
                    <Link to="/anon">Anonymous</Link>
                    <br />
                    <br />
                  </li>
                  <li>
                    <Link to="/email-password">
                      Email and Password authentication
                    </Link>
                  </li>
                  <li>
                    <Link to="/email-link">Email Link authentication</Link>
                    <br />
                    <br />
                  </li>
                  <li>
                    <Link to="/customauth">Custom Authentication</Link> and an
                    Example{" "}
                    <a href="exampletokengenerator/auth.html">
                      Custom Token Generator
                    </a>
                    <br />
                    <br />
                  </li>
                  <li>
                    <Link to="/phone-visible">
                      Phone number sign-in with visible ReCaptcha
                    </Link>
                  </li>
                  <li>
                    <Link to="/phone-invisible">
                      Phone number sign-in with invisible ReCaptcha
                    </Link>
                  </li>
                  <li>
                    <Link to="/phone-simple">
                      Phone number sign-in with simplified popup flow (not
                      recommended for production apps)
                    </Link>
                    <br />
                    <br />
                  </li>
                  <li>
                    <Link to="/google-popup">Google sign-in using Popup</Link>
                  </li>
                  <li>
                    <Link to="/google-redirect">
                      Google sign-in using Redirect
                    </Link>
                  </li>
                  <li>
                    <Link to="/google-credentials">
                      Google sign-in using OAuth Credentials (via Google Sign-in
                      Button)
                    </Link>
                    <br />
                    <br />
                  </li>
                  <li>
                    <Link to="/facebook-popup">Facebook login using Popup</Link>
                  </li>
                  <li>
                    <Link to="/facebook-redirect">
                      Facebook login using Redirect
                    </Link>
                  </li>
                  <li>
                    <Link to="/facebook-credentials">
                      Facebook login using OAuth Credentials (via Facebook Login
                      Button)
                    </Link>
                    <br />
                    <br />
                  </li>
                  <li>
                    <Link to="/twitter-popup">Twitter sign-in using Popup</Link>
                  </li>
                  <li>
                    <Link to="/twitter-redirect">
                      Twitter sign-in using Redirect
                    </Link>
                    <br />
                    <br />
                  </li>
                  <li>
                    <Link to="/microsoft-popup">
                      Microsoft sign-in using Popup
                    </Link>
                  </li>
                  <li>
                    <Link to="/microsoft-redirect">
                      Microsoft sign-in using Redirect
                    </Link>
                    <br />
                    <br />
                  </li>
                  <li>
                    <Link to="/github-popup">GitHub sign-in using Popup</Link>
                  </li>
                  <li>
                    <Link to="/github-redirect">
                      GitHub sign-in using Redirect
                    </Link>
                    <br />
                    <br />
                  </li>
                  <li>
                    <Link to="/apple-popup">Apple sign-in using Popup</Link>
                  </li>
                  <li>
                    <Link to="/apple-redirect">
                      Apple sign-in using Redirect
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FIrebaseAuthenticationExample;
