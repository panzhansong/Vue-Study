export const getName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) resolve({ code: 200, info: { name: 'songxiaozhan' } })
      else reject(err)
    })
  })
}
