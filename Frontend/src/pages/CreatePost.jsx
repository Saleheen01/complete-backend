import React from 'react'

export const CreatePost = () => {
  return (
    <section className='create-post-section'>
      <h2>Create Post</h2>
      <form>
        <input type="file" name="image" accept="image/*" />
        <input type="text" name='caption' placeholder="Enter caption" required/>
        <button type='submit'> Create Post </button>
      </form>
    </section>
  )
}

export default CreatePost