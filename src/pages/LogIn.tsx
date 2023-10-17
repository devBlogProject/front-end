import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://ec2-43-200-212-212.ap-northeast-2.compute.amazonaws.com:8080/auth/login",
        loginData
      );
      // response 확인용 출력(확인 후 삭제)

      if (response.data) {
        console.log(`response.data:`, response.data);
        console.log(`data:`, response);
        console.log("로그인 성공!");
        const { accessToken, refreshToken } = response.data;
        Cookies.set("accessToken", accessToken, { expires: 7 });
        Cookies.set("refreshToken", refreshToken, { expires: 7 });

        navigate("/"); // 로그인 성공 시 메인 페이지로
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      navigate("/login");
      window.alert(`"로그인에 실패했습니다. 다시 시도해 주세요."`);
    }
    setLoginData({ email: "", password: "" });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이메일"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
      />
      <button onClick={handleSubmit}>로그인</button>
      <Link to={"/signin"}>
        <button>회원가입</button>
      </Link>
    </div>
  );
}

export default Login;
