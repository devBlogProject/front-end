import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const handleSubmit = async () => {
    if (signinData.password === signinData.passwordConfirm) {
      try {
        const response = await axios.post("https://api.example.com/register", {
          email: signinData.email,
          password: signinData.password,
          nickname: signinData.nickname,
        });
      } catch (error) {
        console.error("회원가입 실패", error);
      }
    } else {
      setPasswordMatch(false);
    }
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
      {!passwordMatch && (
        <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
      )}
      <button onClick={handleSubmit}>가입하기</button>
    </div>
  );
};

export default SignIn;
