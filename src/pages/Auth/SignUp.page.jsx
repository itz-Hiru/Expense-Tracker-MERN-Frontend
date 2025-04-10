import React, { useContext, useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout.component";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext.context";
import { validateEmail } from "../../utils/helper.util";
import { validatePasswordLength } from "../../utils/helper.util";
import axiosInstance from "../../utils/axiosInstance.util";
import uploadImage from "../../utils/uploadImage.util";
import { API_PATHS } from "../../utils/apiPath.util";
import Input from "../../components/inputs/InputLayout.component";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector.component";

const SignUp = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUpForm = async (e) => {
    e.preventDefault();
    let profileImageURL = "";

    if (!fullName) {
      setError("Please enter your full name!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter valid email!");
      return;
    }

    if (!validatePasswordLength(password)) {
      setError("Password should be minimum 8 characters!");
      return;
    }

    setError("");

    if (profilePicture) {
      const imageUploadRes = await uploadImage(profilePicture);
      profileImageURL = imageUploadRes.imageURL || ""; 
    }

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageURL
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again!");
      }
    }
  };
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUpForm}>
          <ProfilePhotoSelector
            image={profilePicture}
            setImage={setProfilePicture}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <Input
                value={fullName}
                onChange={({ target }) => setFullName(target.value)}
                label="Full Name"
                placeholder="Please enter your full name"
                type="text"
              />
            </div>
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email"
              placeholder="Please enter your email"
              type="text"
            />
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Please enter your password"
              type="password"
            />
          </div>

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          <button type="submit" className="btn-primary">
            SignUp
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link
              className="font-medium text-primary underline cursor-pointer"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
