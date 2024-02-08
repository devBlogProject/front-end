import { tokenInstance } from '@api/axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../../config'

function PostForm() {
  const [title, setTitle] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await tokenInstance.post(
        API.BOARD_POST_URL,
        JSON.stringify({ title, content }),
      )

      if (response.data.status === 'success') {
        navigate('/posts')
      }
    } catch (error) {
      console.error(error)
    }
  }
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {
      target: { name, value },
    } = e

    if (name === 'title') {
      setTitle(value)
    }

    if (name === 'summary') {
      setSummary(value)
    }

    if (name === 'content') {
      setContent(value)
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__block">
        <input
          type="text"
          name="title"
          id="title"
          required
          placeholder="제목을 입력하세요"
          onChange={onChange}
          value={title}
        />
      </div>
      <div className="form__block">
        <input
          type="text"
          name="summary"
          id="summary"
          required
          placeholder="요약을 입력하세요"
          onChange={onChange}
          value={summary}
        />
      </div>
      <div className="form__block">
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          id="content"
          required
          onChange={onChange}
          value={content}
        />
      </div>
      <div className="form__block">
        {/* TODO: 제목, 요약, 컨텐츠가 입력되어 있는 경우만 제출 가능 */}
        <input type="submit" value="제출" className="form__btn--submit" />
      </div>
    </form>
  )
}

export default PostForm
