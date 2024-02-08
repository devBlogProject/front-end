import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { tokenInstance } from '@api/axios'
import GoogleLogin from '@components/login/GoogleLogin'
import { API } from '../../config'
import '@styles/Login.css'

const SignupPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await tokenInstance.post(
        API.SIGNUP_URL,
        JSON.stringify({ email, password: password, nickName: nickname }),
      )
      if (response.data) {
        navigate('/')
      }
    } catch (error: any) {
      console.log(error.message)
      if (!error?.response) {
        setError('No Server Response')
      } else if (error?.response?.status === 409) {
        setError('Username Taken')
      } else {
        setError('Registration Failed')
      }
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'email') {
      setEmail(value)
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      if (!value?.match(validRegex)) {
        setError('이메일 형식이 올바르지 않습니다.')
      } else {
        setError('')
      }
    }

    if (name === 'password') {
      setPassword(value)

      if (value?.length < 4) {
        setError('비밀번호는 4자리 이상으로 입력해주세요')
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        setError('비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.')
      } else {
        setError('')
      }
    }

    if (name === 'password_confirm') {
      setPasswordConfirm(value)

      if (value?.length < 4) {
        setError('비밀번호는 4자리 이상으로 입력해주세요')
      } else if (value !== password) {
        setError('비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.')
      } else {
        setError('')
      }
    }

    if (name === 'nickname') {
      setNickname(value)
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <h1 className="form__title">회원가입</h1>
        {/* TODO: autoComplete="off"가 정상적으로 동작하지 않는 오류*/}
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={onChange}
          />
        </div>
        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={onChange}
          />
        </div>
        <div className="form__block">
          <label htmlFor="password_confirm">비밀번호 확인</label>
          <input
            type="password"
            name="password_confirm"
            id="password_confirm"
            required
            onChange={onChange}
          />
        </div>
        <div className="form__block">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            required
            onChange={onChange}
          />
        </div>
        <div className="form__block">
          계정이 이미 있으신가요?
          <Link to="/login" className="form__link">
            로그인하기
          </Link>
        </div>
        <div className="form__block">
          <input
            type="submit"
            value="회원가입"
            className="form__btn--submit"
            disabled={error?.length > 0}
          />
        </div>
      </form>
      <GoogleLogin />
    </>
  )
}

export default SignupPage
