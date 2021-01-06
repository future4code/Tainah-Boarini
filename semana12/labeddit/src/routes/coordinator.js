export const goToLogin = (history) => {
    history.push('/')
}
  
export const goToSignUp = (history) => {
    history.push('/signUp')
}
  
export const goToFeedPage = (history) => {
    history.push('/feedPage')
}
  
export const goToPostPage = (history) => {
    history.push('/postPage')
}
  
export const goToDetailPage = (history, id) => {
    history.push(`/details/${id}`)
}