import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useClipboard } from "../../hooks";
import { Row, Col } from "react-flexbox-grid";

CopyEmailAddressToClipboard.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  onCopied: PropTypes.func.isRequired,
};

export default function CopyEmailAddressToClipboard({ emailAddress, onCopied }) {
  const [statusText, setStatusText] = useState("click to copy");
  const setClipboard = useClipboard();

  useEffect(() => {
    let _to = setTimeout(() => {
      onCopied();
    }, 10000);
    return () => clearTimeout(_to);
  }, [onCopied]);

  const handleCopyEmail = () => {
    setClipboard(emailAddress);
    setStatusText("copied to clipboard!");
    setTimeout(() => {
      onCopied();
    }, 2000);
  };

  return (
    <Row center="xs">
      <Col xs={12} sm={12} md={2} lg={2} className="cursor-copy" onClick={handleCopyEmail}>
        <div id="email-address" className="outline pa1">
          {emailAddress}
        </div>
        {statusText}
      </Col>
    </Row>
  );
}
