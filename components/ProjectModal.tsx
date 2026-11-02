'use client'

import { useRef } from 'react'

interface Props {
  title: string
  meta?: string
  children: React.ReactNode
}

export function ProjectModal({ title, meta, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        type="button"
        className="t-item-title more-info-trigger"
        aria-label={`More about ${title}`}
        onClick={() => dialogRef.current?.showModal()}
      >
        {title}
        <span className="material-symbols-outlined" aria-hidden="true">
          visibility
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="project-modal"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close()
        }}
      >
        <div className="project-modal-inner">
          <button
            type="button"
            className="project-modal-close"
            aria-label="Close"
            onClick={() => dialogRef.current?.close()}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
          <h3 className="t-modal-title">{title}</h3>
          {meta && <p className="t-modal-meta">{meta}</p>}
          <div className="t-modal-body">{children}</div>
        </div>
      </dialog>
    </>
  )
}
