import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { X } from 'lucide-react'

export function GalleryWithLightbox({ images }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  function openLightbox(img) {
    setSelected(img)
    setOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            onClick={() => openLightbox(img)}
            className="w-full rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer object-cover"
          />
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-2 bg-black/95 border-none">
          {selected && (
            <img
              src={selected.src}
              alt={selected.alt}
              className="w-full max-h-[85vh] object-contain rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
