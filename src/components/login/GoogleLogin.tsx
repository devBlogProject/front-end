export default function GoogleLogin() {
  const GOOGLE_URL = import.meta.env.VITE_APP_GOOGLE_AUTH_URL

  return (
    <a href={GOOGLE_URL}>
      <button>구글 로그인 🚀</button>
    </a>
  )
}
