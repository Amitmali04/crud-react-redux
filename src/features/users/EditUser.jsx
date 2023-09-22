import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const existingUser = users.filter((user) => user.id === params.id);
  const {name , email } = existingUser[0];
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = (id) => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br></br>
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "jhondoe@gmail.com" }}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />

      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
