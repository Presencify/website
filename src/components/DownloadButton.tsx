"use client"
import { handleDownload } from "@/utils/handleDownload"
import Button from "./Button"
import type { FC } from "react"

const DownloadButton: FC = () => {
  return (
    <Button variant="green" type="button" onClick={() => handleDownload()}>
      Download
    </Button>
  )
}

export default DownloadButton
