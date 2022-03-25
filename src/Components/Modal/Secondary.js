import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Text from "./MComponents/Inputs/Text";
import Select from "./MComponents/Inputs/Select";

function Secondary({ title, form, initialValues, onSubmit, validate }) {
  const navigate = useNavigate();
  const toggle = () => {
    navigate(-1);
  };
  return (
    <Modal
      isOpen={true}
      modalTransition={{
        timeout: 10,
      }}
      className={"s-modal nested-modal"}
      toggle={toggle}
    >
      <ModalHeader className={`s-modal-header s-modal-header-bordered`}>
        <button className={"btn back-btn"} onClick={toggle}>
          <IoArrowBack />
        </button>
        <span>{title}</span>
      </ModalHeader>
      <ModalBody className={"s-modal-body overflow-hidden"}>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={onSubmit}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              className={"s-modal-form"}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              {form.map((item, index) =>
                item.type === "select" ? (
                  <Select
                    key={index}
                    options={item.options}
                    name={item.name}
                    value={values[item.name]}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    onChange={item.onChange}
                    helperText={errors[item.name]}
                    error={errors[item.name] && touched[item.name]}
                    defaultValue={item.defaultValue}
                    fields={item.fields}
                  />
                ) : (
                  <Text
                    key={index}
                    label={item.label}
                    name={item.name}
                    value={values[item.name]}
                    placeholder={item.placeholder}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    helperText={errors[item.name]}
                    error={errors[item.name] && touched[item.name]}
                  />
                )
              )}

              <div className="action-btns text-end mt-3">
                <button
                  type={"button"}
                  className="btn form-btn cancel-btn"
                  onClick={toggle}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn form-btn submit-btn"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
}

export default Secondary;
