async function fetchBlobs() {
  const urlsToFetch = ['...']
  const blobPromises = urlsToFetch.map(async (url) =>
    fetch(url).then(async (res) => res.blob())
  )
  return Promise.all(blobPromises)
}


function x () {
    return Promise.all()
}