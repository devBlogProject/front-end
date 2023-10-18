import "./../styles/SignIn.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    nickName: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleSubmit = async () => {
    if (signinData.password === signinData.passwordConfirm) {
      try {
        const response = await axios.post(
          "http://ec2-43-200-212-212.ap-northeast-2.compute.amazonaws.com:8080/member/signup",
          {
            email: signinData.email,
            password: signinData.password,
            nickName: signinData.nickName,
          }
        );
        console.log("response 응답값", response);
        navigate("/login");
        setSigninData({
          email: "",
          password: "",
          passwordConfirm: "",
          nickName: "",
        });
      } catch (error) {
        console.error("회원가입 실패", error);
        // let pwError = error.response.data.errors[0].defaultMessage;
        // let mailError = error.response.data.errors[1].defaultMessage;
      }
    } else {
      setPasswordMatch(true);
      setSigninData({
        ...signinData,
        password: "",
        passwordConfirm: "",
      });
    }
  };
  return (
    <div className="wrapper">
      <div className="input-h1">
        <h1>
          <Link to={"/"}>
            <span>DEVBLOG</span>{" "}
          </Link>
        </h1>
      </div>
      <div className="input">
        <input
          className="input-email"
          type="text"
          placeholder="이메일"
          value={signinData.email}
          onChange={(e) =>
            setSigninData({ ...signinData, email: e.target.value })
          }
        />
      </div>
      <div className="input">
        <input
          className="input-password"
          type="password"
          placeholder="비밀번호"
          value={signinData.password}
          onChange={(e) =>
            setSigninData({ ...signinData, password: e.target.value })
          }
        />
      </div>
      <div className="input">
        <input
          className="input-passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          value={signinData.passwordConfirm}
          onChange={(e) =>
            setSigninData({ ...signinData, passwordConfirm: e.target.value })
          }
        />
        {passwordMatch && (
          <p className="alert" style={{ color: "red" }}>
            * 비밀번호가 일치하지 않습니다.
          </p>
        )}
      </div>
      <div className="input">
        <input
          className="input-nickName"
          type="text"
          placeholder="닉네임"
          value={signinData.nickName}
          onChange={(e) =>
            setSigninData({ ...signinData, nickName: e.target.value })
          }
        />
      </div>
      <div className="button">
        <button className="button-submit" onClick={handleSubmit}>
          가입하기
        </button>
      </div>
    </div>
  );
};

export default SignIn;
