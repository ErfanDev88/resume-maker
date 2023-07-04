import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card, Button } from "react-bootstrap";
import Resume from "./Resume";
import "./customcss.css"; // فایل CSS اضافه شده

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  skills: Yup.string().required("Skills are required"),
});

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [resume, setResume] = useState(null);

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setResume(values);
      setSubmitting(false);
    }, 400);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUrl(URL.createObjectURL(file));
  };

  return (
    <div className="container mt-3">
      <Card className="p-3 cardr">
        <h2 className="text-center mb-3">Create Your Resume</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            skills: "",
            description: "",
            photo: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <>
              <div className="box">
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <Field type="text" name="name" className="form-control" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="skills" className="form-label">
                      Skills
                    </label>
                    <Field type="text" name="skills" className="form-control" />
                    <ErrorMessage
                      name="skills"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="photo" className="form-label">
                      Photo
                    </label>
                    <Field
                      type="file"
                      name="photo"
                      className="form-control"
                      onChange={(event) =>
                        handleFileChange(event, setFieldValue)
                      }
                    />
                    <ErrorMessage
                      name="photo"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </Form>

                {resume && <Resume values={resume} imageUrl={imageUrl} />}
              </div>
            </>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default App;
