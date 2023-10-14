import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://your-api-url.com/login",
        loginData
      );
      // response 확인용 출력(확인 후 삭제)
      console.log(`response.data:${response.data}`);

      if (response.data) {
        console.log("로그인 성공!");
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        console.log(`accessToken:${accessToken},refreshToken:${refreshToken}`); //테스트용 출력
        navigate("/page/:userId"); // 로그인 성공 시, 개인 페이지로 이동
      } else {
        console.log("로그인 실패");
        navigate(-1);
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      // if (error.response && error.response.status === 401) {
      //   alert("인증 실패: 올바른 사용자 이름과 암호를 입력하십시오.");
      // } else {
      //   alert("로그인에 실패했습니다. 다시 시도하십시오.");
      // }
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
