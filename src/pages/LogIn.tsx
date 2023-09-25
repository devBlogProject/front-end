import { useState } from "react";
import axios from "axios";

const LogIn = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  console.log("email:", loginData.email);
  console.log("pw:", loginData.password);
  // input tag에서 onchange에 호출될 함수 (객체 변수 e 에서 TS7006: Parameter 'e' implicitly has an 'any' type. 에러 발생)
  // const changeHandle = (e) => {
  //   setLoginData({ ...loginData, [e.target.name]: e.target.value });
  // };

  // 로그인 버튼을 눌렀을 때 AXIOS 통신으로 back-end에 아이디 비번 전송
  const submitHandle = async () => {
    await axios
      .post("https://your-api-url.com/login", loginData)
      .then((response) => {
        // 로그인 성공 시, 본인 페이지로 이동
        if (response.data.success) {
          console.log("로그인 성공!");
          const { accessToken, refreshToken } = response.data; // 서버 응답에서 토큰 추출
          // Access Token과 Refresh Token을 localStorage에 저장
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          // 페이지 이동 로직 구현
        } else {
          // 다시 로그인 페이지로 이동
        }

        // 개인 페이지로 이동시켜 주기!
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
      });

    // 로그인 완료, 에러 후 스테이트 초기화
    setLoginData({ email: "", password: "" });
  };

  // 나중에 토큰을 사용할 때는 localStorage에서 가져올 수 있습니다.
  const storedAccessToken = localStorage.getItem("accessToken");
  const storedRefreshToken = localStorage.getItem("refreshToken");

  return (
    <div id="wrapper">
      <div id="inputEmail">
        <input
          name="email"
          type="text"
          value={loginData.email}
          onChange={(e) => {
            setLoginData({ ...loginData, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div id="inputPassword">
        <input
          name="password"
          type="password"
          value={loginData.password}
          onChange={(e) => {
            setLoginData({ ...loginData, [e.target.name]: e.target.value });
          }}
        />
      </div>

      <button onClick={submitHandle}>로그인</button>
    </div>
  );
};

export default LogIn;
