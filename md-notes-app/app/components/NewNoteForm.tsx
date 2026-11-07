import { addNote } from '@/utils/note-service'

async function NewNoteForm() {
  return (
    <form action={addNote}>
        <input name='mdFile' type='file' accept='.md' required />
        <button type='submit'>New Note</button>
      </form>
  )
}

export default NewNoteForm