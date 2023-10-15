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
          "http://ec2-18-221-110-62.us-east-2.compute.amazonaws.com:8080/member/signup",
          {
            email: signinData.email,
            password: signinData.password,
            nickname: signinData.nickName,
          }
        );
        console.log("response 응답값", response);
      } catch (error) {
        console.error("회원가입 실패", error);
      }
    } else {
      setPasswordMatch(true);
    }

    setSigninData({
      email: "",
      password: "",
      passwordConfirm: "",
      nickName: "",
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이메일"
        value={signinData.email}
        onChange={(e) =>
          setSigninData({ ...signinData, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={signinData.password}
        onChange={(e) =>
          setSigninData({ ...signinData, password: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={signinData.passwordConfirm}
        onChange={(e) =>
          setSigninData({ ...signinData, passwordConfirm: e.target.value })
        }
      />
      {passwordMatch && (
        <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
      )}
      <input
        type="text"
        placeholder="닉네임"
        value={signinData.nickName}
        onChange={(e) =>
          setSigninData({ ...signinData, nickName: e.target.value })
        }
      />
      <button onClick={handleSubmit}>가입하기</button>
    </div>
  );
};

export default SignIn;
