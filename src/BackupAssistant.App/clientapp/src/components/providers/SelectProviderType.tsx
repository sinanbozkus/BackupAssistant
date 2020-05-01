import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { getProviderTypes } from "../../redux/actions/providerActions";

function SelectProviderType({
  getProviderTypes,
  providerTypes,
  register,
  providerTypeSelected,
}: any) {
  useEffect(() => {
    getProviderTypes();
  }, []);

  return (
    <Form.Group className="mb-3">
      <Form.Label>Provider Type</Form.Label>
      <Form.Control name="providerType" as="select" onChange={(e) => providerTypeSelected(e.target.value)} ref={register}>
        <option>Select</option>
        {providerTypes.map((pt : any) => {
          return <option value={pt.value} key={pt.value}>{pt.text}</option>;
        })}
      </Form.Control>
    </Form.Group>
  );
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    providerTypes: state.providerReducer,
  };
}

const mapDispatchToProps = {
  getProviderTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectProviderType);
