import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import NewNoteForm from './NewNoteForm'

async function NotesList() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: notes } = await supabase.from('notes').select()
  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes?.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
      <NewNoteForm />
    </div>

  )
}

export default NotesList