import type { FilterOptionProps } from "@/interfaces"

export const FILTERS: FilterOptionProps[] = [
  { value: "all", label: "All", checked: false },
  { value: "media_streaming", label: "Media streaming", checked: false },
  { value: "videos", label: "Videos", checked: true },
  { value: "music", label: "Music", checked: false },
  { value: "games", label: "Games", checked: false },
  { value: "anime", label: "Anime", checked: false },
  { value: "social_media", label: "Social media", checked: false },
  { value: "other", label: "Other", checked: false }
]
