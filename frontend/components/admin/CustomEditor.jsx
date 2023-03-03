import { EditorContent } from '@tiptap/react'
import EditorButtons from './EditorButtons'

const CustomEditor = ({ editor }) => {

  return (
    <>
      <EditorButtons editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}

export default CustomEditor
