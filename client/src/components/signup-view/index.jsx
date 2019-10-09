import React, { useState } from 'react';

import LayoutForm from '../layout-form';
import SignupForm from '../signup-form';

export default function SignupView(props) {
  return (
    <LayoutForm>
      <div className="login__ui">
        <div>
          <h1 className="form-head">Sign up</h1>
          <p>Sign up to theFLIXdb.</p>
        </div>
        <div className="login__form">
          <SignupForm />
        </div>
      </div>
    </LayoutForm>
  );
}
