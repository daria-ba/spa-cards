import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/esm/Button";
import { addProduct } from "../store/productsSlice";
import Product from "../api/productsApi";
import { AppDispatch } from "../store/index";
import GoHomeButton from "../components/GoHomeButton";

const CreateProductForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div>
      <GoHomeButton />
      <div className="form-wrapper">
        <Formik
          initialValues={{
            id: Date.now(),
            title: "",
            artist_display: "",
            image_id: "",
            liked: false,
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Название обязательно"),
            artist_display: Yup.string().required("Автор обязателен"),
            image_id: Yup.string()
              .url("Введите корректный URL")
              .required("URL изображения обязателен"),
          })}
          onSubmit={(values, { resetForm }) => {
            dispatch(addProduct(values as Product));
            resetForm();
            navigate("/products");
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="form-container">
              <div>
                <Field
                  type="text"
                  name="title"
                  className={`custom-input ${errors.title && touched.title ? "input-error" : ""}`}
                  placeholder="Название"
                />
                <ErrorMessage name="title" component="div" className="error" />
              </div>

              <div>
                <Field
                  type="text"
                  name="artist_display"
                  className={`custom-input ${errors.artist_display && touched.artist_display ? "input-error" : ""}`}
                  placeholder="Автор"
                />
                <ErrorMessage
                  name="artist_display"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Field
                  type="text"
                  name="image_id"
                  className={`custom-input ${errors.image_id && touched.image_id ? "input-error" : ""}`}
                  placeholder="URL изображения"
                />
                <ErrorMessage
                  name="image_id"
                  component="div"
                  className="error"
                />
              </div>

              <Button type="submit" disabled={isSubmitting}>
                Добавить товар
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateProductForm;
