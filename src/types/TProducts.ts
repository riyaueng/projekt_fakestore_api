import type { TRating } from "./TRating"

export type TProducts = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: TRating
}
