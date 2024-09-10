import React from 'react'
import { useLocation } from 'react-router-dom'
export default function PDFReview() {
  const { pdfUrl } = useLocation().state

  return (
    <iframe
      src={pdfUrl}
      type="application/pdf"
      width="100%"
      style={{ height: 'calc(100vh - 100px)' }}
    ></iframe>
  )
}
