import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './layout-form.scss';

export default function Layout({ children, image }) {
  return (
    <div className="form-view">
      <div className="image-section" />
      <div className="form-section">
        <div className="form-container">
          {children}
        </div>
      </div>
    </div>
  );
}
