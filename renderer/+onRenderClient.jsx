// https://vike.dev/onRenderClient
export { onRenderClient }

import ReactDOM from 'react-dom/client'

let root
async function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext

  const page = (
    <Page {...pageProps} />
  )

  const container = document.getElementById('react-container')
  // SPA
  if (container.innerHTML === '' || !pageContext.isHydration) {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
    // SSR
  } else {
    root = ReactDOM.hydrateRoot(container, page)
  }
}
